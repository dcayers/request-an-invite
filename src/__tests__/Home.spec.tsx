import userEvent from '@testing-library/user-event';
import { fireEvent, render, screen, waitFor } from '../test-utils/testingLibrary';
import Home from '../pages';
import { API_URL, server, rest } from '../test-utils/server';

describe('Home', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    jest.useRealTimers();
    server.close();
  });

  it('should match snapshot', () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });

  it('should successfully post form data', async () => {
    render(<Home />);

    const requestButton = screen.getByRole('button', { name: /request/i });
    expect(requestButton).toBeInTheDocument();
    userEvent.click(requestButton);

    const sendRequestButton = screen.getByRole('button', { name: /send/i });
    const nameInput = screen.getByPlaceholderText('Full name');
    const emailInput = screen.getByPlaceholderText('Email', { exact: true });
    const confirmEmailInput = screen.getByPlaceholderText('Confirm email', { exact: true });

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(confirmEmailInput).toHaveValue('');
    expect(sendRequestButton).toBeDisabled();

    userEvent.type(nameInput, 'Dewaun Ayers');
    userEvent.type(emailInput, 'mail@mail.com');
    userEvent.type(confirmEmailInput, 'mail@mail.com');

    await waitFor(() => {
      expect(sendRequestButton).toBeEnabled();
    });

    userEvent.click(sendRequestButton);

    await waitFor(() => {
      expect(sendRequestButton).toHaveTextContent(/sending/i);
    });

    jest.advanceTimersToNextTimer();

    await waitFor(() => {
      expect(sendRequestButton).toHaveTextContent(/send/i);
    });

    const okButton = screen.getByRole('button', { name: 'Ok' });
    expect(okButton).toBeInTheDocument();

    userEvent.click(okButton);

    await waitFor(() => {
      expect(okButton).not.toBeInTheDocument();
    });
  });

  it('should show an error message when the post fails', async () => {
    server.use(
      rest.post(`${API_URL}/fakeAuth`, (req, res, ctx) =>
        res(
          ctx.status(400),
          ctx.json({
            errorMessage: 'This email address is already registered',
          })
        )
      )
    );

    render(<Home />);

    const requestButton = screen.getByRole('button', { name: /request/i });
    userEvent.click(requestButton);

    const sendRequestButton = screen.getByRole('button', { name: /send/i });
    const nameInput = screen.getByPlaceholderText('Full name');
    const emailInput = screen.getByPlaceholderText('Email', { exact: true });
    const confirmEmailInput = screen.getByPlaceholderText('Confirm email', { exact: true });

    userEvent.type(nameInput, 'Dewaun Ayers');
    userEvent.type(emailInput, 'usedemail@blinq.app');
    userEvent.type(confirmEmailInput, 'usedemail@blinq.app');

    await waitFor(() => {
      expect(sendRequestButton).toBeEnabled();
    });

    userEvent.click(sendRequestButton);
    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(sendRequestButton).toHaveTextContent(/sending/i);
    });

    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(sendRequestButton).toHaveTextContent(/send/i);
    });

    jest.advanceTimersToNextTimer();
    expect(screen.getByText('This email address is already registered')).toBeInTheDocument();
  });

  it('should show validation messages when inputs invalid', async () => {
    const { debug } = render(<Home />);

    const requestButton = screen.getByRole('button', { name: /request/i });
    userEvent.click(requestButton);

    const sendRequestButton = screen.getByRole('button', { name: /send/i });
    const nameInput = screen.getByPlaceholderText('Full name');
    const emailInput = screen.getByPlaceholderText('Email', { exact: true });
    const confirmEmailInput = screen.getByPlaceholderText('Confirm email', { exact: true });

    // name validation
    fireEvent.blur(nameInput);
    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(screen.getByText('Full name is Required')).toBeInTheDocument();
    });

    userEvent.type(nameInput, 'D');
    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(screen.getByText('Your name needs to be at least 3 characters long')).toBeInTheDocument();
    });

    // email validation
    fireEvent.blur(emailInput);
    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(screen.getByText('Email address is Required')).toBeInTheDocument();
    });

    userEvent.type(emailInput, 'D');
    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument();
    });

    (emailInput as HTMLInputElement).value = '';
    // confirm email
    fireEvent.blur(confirmEmailInput);
    jest.advanceTimersToNextTimer();
    await waitFor(() => {
      expect(screen.getByText('Email confirmation is Required')).toBeInTheDocument();
    });

    userEvent.type(emailInput, 'mail@mail.com');
    userEvent.type(confirmEmailInput, 'mail.com');
    jest.advanceTimersToNextTimer();

    await waitFor(() => {
      expect(screen.getByText('Emails must match')).toBeInTheDocument();
    });

    expect(sendRequestButton).toBeDisabled();
    // then could write more tests to assert that the
  });
});
