import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {

  }

  // removes default styling from link tags
  a:-webkit-any-link {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: #1D1B26;
  }
`;

export default GlobalStyle;
