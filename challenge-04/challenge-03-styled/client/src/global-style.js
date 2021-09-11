import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: #000;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-color-swatch,
  ::-moz-color-swatch {
    border-color: transparent;
  }
`;

export default GlobalStyle;
