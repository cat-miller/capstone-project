import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  :root {
    --color: #9c37b3;
    --color-button: hsl(313, 100%, 65%);
    --color-button-theme: ${({ theme }) => theme.themebutton};
    --color-headline: ${({ theme }) => theme.headline};
    --color-navigation: ${({ theme }) => theme.navigationtext};
   
    --background-color: ${({ theme }) => theme.bodybg};
    --background-color-button: hsl(313, 100%, 95%);
    --background-color-button-theme: ${({ theme }) => theme.themebuttonbg};
    --background-color-header: ${({ theme }) => theme.headlinebg};
    --background-color-navigation: ${({ theme }) => theme.navigationbg};
    --background-color-overlay: ${({ theme }) => theme.overlaybg};
    --background-color-fishspan: hsl(50, 100%, 65%);
    --background-color-seacreaturespan: hsl(140, 100%, 65%);
    --background-color-bugspan: hsl(30, 100%, 65%);
    --background-color-activewrapper: ${({ theme }) => theme.navigationactive};

    --border-radius: 26px;
    --border-radius-inner: 20px;

  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    


    font-family: 'Roboto';
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    letter-spacing: 1px;
  }

  h1 {
    font-weight: 300;
    font-size: 1.5rem;
  }

  

  ul {
    padding-left: 0;
    list-style: none;
    line-height: 1.5rem;
    letter-spacing: 0.5px;
    font-weight: 400;
    font-size: 0.85rem;

  }

  h2 {
    font-weight: 700;
    font-size: 1.1rem;
  }
  
`;

export default GlobalStyle;
