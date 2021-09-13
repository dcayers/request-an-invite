import React from 'react';
import { Global, css } from '@emotion/react';

export default function GlobalStyles({ theme }) {
  return (
    <Global
      styles={css`
        html,
        body {
          height: 100%;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          max-width: 100vw;
          overflow-x: hidden;
          line-height: 1.618;
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
      `}
    />
  );
}
