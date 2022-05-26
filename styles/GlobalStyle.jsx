import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  :root {
    --color: #9c37b3;
    --border-radius: 26px;

  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: hsl(266, 100%, 98%);
    font-family: 'Roboto';
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    letter-spacing: 1px;

  }

  ul {
    padding-left: 0;
    list-style: none;
    line-height: 1.5rem;
    letter-spacing: 0.5px;

  }
  
`;

export default GlobalStyle;
