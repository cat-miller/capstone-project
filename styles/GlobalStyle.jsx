import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  :root {
    --color: #9c37b3;
    --color-button: hsl(313, 100%, 65%);
    --color-headline: hsl(248, 89%, 60%);
    --color-navigation: white;
   
    --background-color: hsl(266, 100%, 98%);
    --background-color-button: hsl(313, 100%, 95%);
    --background-color-navigation: hsl(248, 89%, 69%);
    --background-color-overlay: hsla(0, 0%, 100%, 0.7);
    --background-color-fishspan: hsl(50, 100%, 65%);
    --background-color-seacreaturespan: hsl(140, 100%, 65%);
    --background-color-bugspan: hsl(30, 100%, 65%);
    --background-color-activewrapper: hsl(248, 89%, 60%);

    --color-dark: #9c37b3;
    --color-button-dark: hsl(313, 100%, 65%);
    --color-headline-dark: hsl(9, 89%, 60%);
    --color-navigation-dark: hsl(253, 100%, 64%);
   
    --background-color-dark: hsl(253, 100%, 64%);
    --background-color-button-dark: hsl(313, 100%, 95%);
    --background-color-navigation-dark: hsl(19, 89%, 69%);
    --background-color-overlay-dark: hsla(273, 100%, 100%, 0.7);
    --background-color-fishspan-dark: hsl(50, 100%, 65%);
    --background-color-seacreaturespan-dark: hsl(140, 100%, 65%);
    --background-color-bugspan-dark: hsl(30, 100%, 65%);
    --background-color-activewrapper-dark: hsl(9, 89%, 60%);

    --border-radius: 26px;
    --border-radius-inner: 20px;

  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
   
    


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
