import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary: #E66767;
    --background: #FFF8F2;
    --background-alt: #FFEBD9;
    --background-dark: #E66767;
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
