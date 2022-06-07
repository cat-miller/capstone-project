import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/ThemeConfig';
import { useState } from 'react';
import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    theme === lightTheme ? setTheme(darkTheme) : setTheme(lightTheme);
  };

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component toggleTheme={toggleTheme} {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
