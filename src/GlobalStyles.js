import { createGlobalStyle } from "styled-components";

import data from "./cyoadata";

const GlobalStyle = createGlobalStyle`
  @font-face{
    font-family: '${data.styling.themeing.fontName}';
    ${
      !data.styling.themeing.fontIsLink &&
      `src: url(${data.styling.themeing.font} ) format('truetype');`
    }
  }

  body {
    margin: 0;
    font-family: '${data.styling.themeing.fontName}', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
`;

export default GlobalStyle;
