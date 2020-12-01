// src/styles/styled.d.tsx
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string

    color: {
      main: string
      sub: string
      background: string
      third: string
    }
  }
}
