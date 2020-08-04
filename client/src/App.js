import React from 'react';
import "./App.css";
import Home from './page/Home.js';
import ApartInfo from './page/ApartInfo.js';
import { Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/apartInfo" component={ApartInfo} exact/>
      </Switch>
    </div>
  );
}

export default App;
