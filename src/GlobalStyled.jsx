import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
  }

  a{
    text-decoration: none;
  }

  html {
    width: auto;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    background-color: #f5f5f5;
  }
`;
