import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    background-color: #1A1A1F;

  }

  a {
    text-decoration:none;
    color: #000;
  }
`;
export default GlobalStyle;
