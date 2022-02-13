import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body, #root {
    font-family: Optima, Arial, sans-serif;
    font-size: 1rem;
    height: 100%;
  }

  h1 {
    font-size: 2.5em;
    line-height: 2;
  }
`;

export default GlobalStyle;
