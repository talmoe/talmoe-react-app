import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    
  }

  // removes default styling from link tags
  a:-webkit-any-link {
    color: inherit;
    text-decoration: none;
  }

  body {
    background: linear-gradient(180deg, #28283A -2.04%, rgba(32, 27, 33, 0.9) 102.12%, rgba(40, 40, 58, 0) 102.13%);
    //overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
  }
`;

export default GlobalStyle;