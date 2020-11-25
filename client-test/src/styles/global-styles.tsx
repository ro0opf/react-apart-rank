// src/styles/global-styles.tsx
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import AppleSDGothicNeoB from './fonts/AppleSDGothicNeoB.ttf';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  @font-face {
    font-family: 'AppleSDGothicNeoB';
    src: local('AppleSDGothicNeoB'), url(${AppleSDGothicNeoB}) format('truetype');
  }

  html,
  body { 
    overflow: hidden;
  }

  * {
    font-family: 'AppleSDGothicNeoB';
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
