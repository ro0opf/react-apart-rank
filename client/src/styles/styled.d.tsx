// src/styles/styled.d.tsx
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string

    color: {
      main: string
      sub: string
      background: string
      inputBackground: string
      border: string
      inputText: string
      normalText: string
      navText: string
      selectBackground: string
      normalUnderLine: string
      calculatorInputTitle: string
      skyBlue: string
      apartInfoBlue : string
      apartInfoYellow : string
    }
  }
}
