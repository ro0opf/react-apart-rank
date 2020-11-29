// src/styles/global-styles.tsx
import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  html,
  body { 
    overflow: auto;
  }

  * {
    box-sizing: border-box;
  }

  div {
    display : block;
    position : relative;
  }
`

export default GlobalStyle
