import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  :root {
    --color: #9c37b3;
    --color-button: hsl(313, 100%, 65%);
    --border-radius: 26px;
    --border-radius-inner: 20px;
    --background-color:  hsl(266, 100%, 98%);
    --background-color-button: hsl(313, 100%, 95%)
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color:var(--background-color);
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
    font-weight: 300;
    font-size: 0.85rem;

  }

  h2 {
    font-weight: 700;
    font-size: 1.1rem;
  }
  
`;

export default GlobalStyle;
