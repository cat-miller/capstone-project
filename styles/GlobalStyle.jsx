import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
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

  ul {
    padding-left: 0;
    list-style: none;
  }
  
`;

export default GlobalStyle;
