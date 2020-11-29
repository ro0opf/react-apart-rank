// src/App.tsx
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
