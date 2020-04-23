import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import UserSignUp from './components/UserSignUp';
import UserLogIn from './components/UserLogIn';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
