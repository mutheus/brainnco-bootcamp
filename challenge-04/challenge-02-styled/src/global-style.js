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
    font-family: 'Archivo', sans-serif;
    color: #333;
    margin: 0;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }
  
  ul {
    padding: 0;
  }
  
  li {
    list-style-type: none;
  }
`;

export default GlobalStyle;
