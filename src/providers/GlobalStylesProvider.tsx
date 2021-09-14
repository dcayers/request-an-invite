import React from 'react';
import { Global, css } from '@emotion/react';

export default function GlobalStyles({ theme }) {
  return (
    <Global
      styles={css`
        ${theme.fonts.src && `@import url(${theme.fonts.src});`}

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
          font-family: ${theme.fonts.body};
        }

        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }

        h1,
        h2 {
          font-family: ${theme.fonts.headings};
        }

        h3 {
          font-size: 2vmin;
        }

        h1,
        h2,
        p,
        button {
          color: ${theme.colors.text.default};
        }

        .primary {
          color: ${theme.colors.primary};
        }

        .secondary {
          color: ${theme.colors.secondary};
        }

        /* Large desktop */
        @media (min-width: 1024px) {
          h3 {
            font-size: 2vmin;
          }
        }

        /* Portrait tablet to landscape and desktop */
        @media (min-width: 768px) and (max-width: 1024px) {
          h3 {
            font-size: 4vmin;
          }

          input,
          button[type='submit'] {
            font-size: 3vmin !important;
          }
        }

        /* Landscape phone to portrait tablet */
        @media (max-width: 767px) {
          h3 {
            font-size: 4vmin;
          }

          input,
          button[type='submit'] {
            font-size: 3vmin !important;
          }
        }

        /* Landscape phones and down */
        @media (max-width: 480px) {
          h3 {
            font-size: 5vmin;
          }

          input,
          button[type='submit'] {
            font-size: 4vmin !important;
          }
        }
      `}
    />
  );
}
