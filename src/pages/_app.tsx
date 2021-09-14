import React from 'react';
import Head from 'next/head';
import ThemeProvider from '../providers/ThemeProvider';
import { baseTheme } from '../styles/baseTheme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Broccoli &amp; Co.</title>
        <meta name="description" content="Request an invite to Broccoli & Co" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={baseTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
