import { rest } from 'msw';

const API_URL = 'https://us-central1-blinkapp-684c1.cloudfunctions.net';

const handlers = [
  rest.post(`${API_URL}/fakeAuth`, (req, res, ctx) => {
    // doesn't really matter what is returned since we don't care about the response message. only the status.
    return res(ctx.json({ message: 'success' }));
  }),
];

export { API_URL, handlers };
