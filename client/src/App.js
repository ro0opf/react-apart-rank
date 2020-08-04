import React from 'react';
import { Wrapper } from './App.css.js';
import Home from './page/Home.js';
import ApartInfo from './page/ApartInfo.js';
import {Route, Switch} from 'react-router-dom';

function App(props) {
  return (
    <Wrapper>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/apartInfo" component={ApartInfo} />
        </Switch>
    </Wrapper>
  );
}

export default App;
