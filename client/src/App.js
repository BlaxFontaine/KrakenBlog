import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import UserSignUp from './components/Auth/UserSignUp';
import UserLogIn from './components/Auth/UserLogIn';
import UserProfile from './components/UserProfile';
import MembersList from './components/MembersList';
import NavBar from './components/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/list" component={MembersList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
