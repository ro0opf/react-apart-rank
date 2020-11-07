import React from 'react'
import { Wrapper } from './App.css'
import HomePage from './page/HomePage'
import ApartInfoPage from './page/ApartInfoPage'
import RegionalAnalysisPage from './page/RegionalAnalysisPage'
import RankingPage from './page/RankingPage'
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Wrapper>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/apartInfo/:price" component={ApartInfoPage} />
          <Route path="/regionalAnalysis" component={RegionalAnalysisPage} />
          <Route path="/ranking" component={RankingPage} />
        </Switch>
    </Wrapper>
  )
}

export default App
