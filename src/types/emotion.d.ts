import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme extends ClientTheme {
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      white: string;
      text: {
        default: string;
      };
    };
    fonts: {
      src: string;
      body: string;
      headings: string;
    };
    weight?: any;
  }
}
