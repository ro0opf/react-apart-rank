// src/App.tsx
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'
import AreaPage from './pages/AreaPage'
import RankingPage from './pages/RankingPage'
import RealEstatePage from './pages/RealEstatePage'
import theme from './styles/theme'
import SalesInfoPage from './pages/SalesInfoPage'
import ApartInfoPage from './pages/ApartInfoPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/area" component={AreaPage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/sales-info" component={SalesInfoPage} />
        <Route path="/real-estate" component={RealEstatePage} />
        <Route path="/apart-info/:serial_num" component={ApartInfoPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
