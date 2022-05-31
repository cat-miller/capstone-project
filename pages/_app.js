import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/ThemeConfig';
import { useState } from 'react';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Component toggleTheme={toggleTheme} {...pageProps} />
      </ThemeProvider>
    </>
  );
}
