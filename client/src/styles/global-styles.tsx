// src/styles/global-styles.tsx
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import AppleSDGothicNeoB from './fonts/AppleSDGothicNeoB.ttf';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'AppleSDGothicNeoB';
    src: url(${AppleSDGothicNeoB}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: auto;
  }

  html,
  body {
    overflow: hidden;
  }

  * {
    font-family: 'AppleSDGothicNeoB', Helvetica;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
