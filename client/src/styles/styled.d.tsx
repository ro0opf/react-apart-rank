// src/styles/styled.d.tsx
import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    basicWidth: string

    color: {
      sub: string
      inputText: string
      selectBackground: string
      normalUnderLine: string
      calculatorInputTitle: string
      sub2: string
      sub1: string
      black: string
      white: string
      gray1: string
      gray2: string
      gray3: string
      primary: string
      gradation1: string
    }
  }
}
