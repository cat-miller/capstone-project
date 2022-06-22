import GlobalStyle from '../styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { springTheme } from '../styles/ThemeConfig';
import { useState } from 'react';
import { store } from '../app/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState(springTheme);

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component setTheme={setTheme} {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
