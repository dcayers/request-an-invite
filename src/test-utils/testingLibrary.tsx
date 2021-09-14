import React from 'react';
import { render } from '@testing-library/react';
import ThemeProvider from '../providers/ThemeProvider';
import { baseTheme } from '../styles/baseTheme';

const Providers: React.FC = ({ children }) => {
  return <ThemeProvider theme={baseTheme}>{children}</ThemeProvider>;
};

const renderWithContext = (ui, options?: any) => render(ui, { ...options, wrapper: Providers });

export * from '@testing-library/react';
export { renderWithContext as render };
