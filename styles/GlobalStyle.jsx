import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  :root {
    --color: #9c37b3;
    --color-a: #6F47FF;
    --color-button: ${({ theme }) => theme.button};
    --color-button-theme: ${({ theme }) => theme.themebutton};
    --color-button-sort: ${({ theme }) => theme.sortbutton};
    --color-button-caught: ${({ theme }) => theme.caughtbutton};
    --color-button-caught-active: ${({ theme }) => theme.caughtbuttonactive};
    --color-button-donated: ${({ theme }) => theme.donatedbutton};
    --color-button-donated-active: ${({ theme }) => theme.donatedbuttonactive};
    --color-button-neighbor: ${({ theme }) => theme.neighborbutton};
    --color-button-neighbor-active: ${({ theme }) =>
      theme.neighborbuttonactive};
    --color-button-favorite: ${({ theme }) => theme.favoritebutton};
    --color-button-favorite-active: ${({ theme }) =>
      theme.favoritebuttonactive};


    --color-headline: ${({ theme }) => theme.headline};
    --color-navigation: ${({ theme }) => theme.navigationtext};
    --color-navigation-icon: ${({ theme }) => theme.navigationicons};

    --background-color: ${({ theme }) => theme.bodybg};
    --background-color-button: ${({ theme }) => theme.buttonbg};
    --background-color-button-theme: ${({ theme }) => theme.themebuttonbg};
    --background-color-button-sort: ${({ theme }) => theme.sortbuttonbg};
    --background-color-button-caught: ${({ theme }) => theme.caughtbuttonbg};
    --background-color-button-caught-active: ${({ theme }) =>
      theme.caughtbuttonbgactive};
    --background-color-button-donated: ${({ theme }) => theme.donatedbuttonbg};
    --background-color-button-donated-active: ${({ theme }) =>
      theme.donatedbuttonbgactive};
    --background-color-button-neighbor: ${({ theme }) =>
      theme.neighborbuttonbg};
    --background-color-button-neighbor-active: ${({ theme }) =>
      theme.neighborbuttonbgactive};
    --background-color-button-favorite: ${({ theme }) =>
      theme.favoritebuttonbg};
    --background-color-button-favorite-active: ${({ theme }) =>
      theme.favoritebuttonbgactive};


    --background-color-header: ${({ theme }) => theme.headlinebg};
    --background-color-navigation: ${({ theme }) => theme.navigationbg};
    --background-color-overlay: ${({ theme }) => theme.overlaybg};
    --background-color-fishspan: hsl(50, 100%, 65%);
    --background-color-seacreaturespan: hsl(140, 100%, 65%);
    --background-color-bugspan: hsl(30, 100%, 65%);
    --background-color-activewrapper: ${({ theme }) => theme.navigationactive};
    --fu-safari: ${({ theme }) => theme.schrollshadowbg};;

    --border-radius: 26px;
    --border-radius-inner: 20px;

  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: var(--background-color);
    font-family: 'Roboto', sans sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    letter-spacing: 1px;
  }

  h1 {
    font-weight: 300;
    font-size: 1.5rem;
    text-align: center;
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
    font-size: 0.9rem;
  }

  h3 {
    font-weight: 700;
    font-size: 1rem;
    color: var(--color);
  }

  p {
    color: var(--color);
    text-align: center;
  }

  a {
    text-decoration: none;
    color: var(--color-a);
  }



`;

export default GlobalStyle;
