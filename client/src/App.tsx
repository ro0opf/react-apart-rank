// src/App.tsx
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'
import AreaPage from './pages/AreaPage'
import RankingPage from './pages/RankingPage'
import InfoPage from './pages/InfoPage'
import RealEstatePage from './pages/RealEstatePage'
import theme from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/area" component={AreaPage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/info" component={InfoPage} />
        <Route path="/real-estate" component={RealEstatePage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
