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
    font-family: system-ui, sans-serif;
    color: #4F4F4F;
    margin: 0;
    text-transform: uppercase;
    background-color: #EBEBEB;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
`;

export default GlobalStyle;
