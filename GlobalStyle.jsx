import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    box-sizing: border-box;
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
