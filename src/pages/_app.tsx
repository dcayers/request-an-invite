import React from 'react';
import ThemeProvider from '../providers/ThemeProvider';
import { baseTheme } from '../styles/baseTheme';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={baseTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
