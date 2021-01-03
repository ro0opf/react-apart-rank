// src/styles/global-styles.tsx
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'
import theme from './theme'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body { 
    overflow: auto;
  }

  * {
    box-sizing: border-box;
    font-style: normal /* em, dfn, var, cite, address */; 
    font-family: 'Noto Sans KR'
  } 

  div {
    display : block;
    position : relative;
  }

  ul, li {
    list-style : none;
    margin : 0;
    padding : 0;
  }
`

export default GlobalStyle
