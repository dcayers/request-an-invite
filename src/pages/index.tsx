import React from 'react';
import { Container } from '../components/primitives/Container';
import { Header } from '../components/layout/Header';
import { Main } from '../components/layout/Main';
import { Modal } from '../components/modules/Modal';
import { RequestForm } from '../components/modules/RequestForm';
import { Footer } from '../components/layout/Footer';
import { useModal } from '../utils/hooks/useModal';
import { ButtonOutline } from '../components/primitives/Button';

export default function Home() {
  const [toggleConfirmation, ComfirmationModal] = useModal({
    title: 'All done!',
    content: function ConformationContent(closeModal) {
      return (
        // This is on purpose just to show inline styling
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            width: '80%',
            margin: '0 auto',
            gap: '2rem',
          }}
        >
          <p style={{ textAlign: 'center' }}>
            You will be one of the first to experience Broccoli &amp; Co. when we launch.
          </p>
          <ButtonOutline width={1} onClick={closeModal} style={{ marginBottom: '1rem' }}>
            Ok
          </ButtonOutline>
        </div>
      );
    },
  });
  return (
    <Container>
      <Header />
      <Main>
        <h2>
          A better way <br /> to enjoy every day.
        </h2>
        <p>Be the first to know when we launch.</p>
        <Modal buttonText="Request an invite" title="Request an invite">
          {({ closeModal }) => (
            <RequestForm
              onSuccess={(reset) => {
                reset();
                closeModal();
                toggleConfirmation(true);
              }}
            />
          )}
        </Modal>
        {ComfirmationModal}
      </Main>
      <Footer />
    </Container>
  );
}
