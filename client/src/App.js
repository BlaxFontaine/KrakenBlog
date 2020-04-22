import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import UserSignUp from './components/UserSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={UserSignUp} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
