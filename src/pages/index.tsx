import React from 'react';
import Head from 'next/head';

import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Main } from '../components/Main';
import { Modal } from '../components/Modal';
import { RequestForm } from '../components/RequestForm';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Broccoli &amp; Co.</title>
        <meta name="description" content="Request an invite to Broccoli & Co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
              }}
            />
          )}
        </Modal>
      </Main>
      <Footer />
    </Container>
  );
}
