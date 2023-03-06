import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Newsreader:opsz,wght@6..72,400;6..72,500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Newsreader", serif;
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
