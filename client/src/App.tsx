// src/App.tsx
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import MainPage from './pages/MainPage'
import AreaPage from './pages/AreaPage'
import RankingPage from './pages/RankingPage'
import CalendarPage from './pages/CalendarPage'
import theme from './styles/theme'
import CalculatorPage from './pages/CalculatorPage'
import ApartInfoPage from './pages/ApartInfoPage'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/area" component={AreaPage} />
        <Route path="/ranking" component={RankingPage} />
        <Route path="/calculator" component={CalculatorPage} />
        <Route path="/calendar" component={CalendarPage} />
        <Route path="/apart-info/:serial_num" component={ApartInfoPage} />
      </Switch>
    </ThemeProvider>
  )
}

export default App
