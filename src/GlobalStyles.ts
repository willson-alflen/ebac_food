import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #E66767;
    --secondary: #FFEBD9;
    --tertiary: #FFF;
    --background: #FFF8F2;
    --background-light: #FFF;
    --background-dark: #FFEBD9;
    --background-dark-alt: #E66767;
  }

  * {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-decoration: none;
    list-style: none;
  }

  body {
    background-color: var(--background);
    color: var(--primary);
  }
`
