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

  h1, h2, h3, h4, h5, h6, p {
    line-height: 1.2;
  }
`;

export default GlobalStyle;
