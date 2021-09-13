import React from 'react';
import { Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import GlobalStyles from './GlobalStylesProvider';

interface IThemeProvider {
  theme: Theme;
}

const ThemeProvider: React.FC<IThemeProvider> = ({ theme, children }) => {
  return (
    <EmotionThemeProvider theme={theme}>
      <GlobalStyles theme={theme} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
