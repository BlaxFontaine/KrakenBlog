import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import UserSignUp from './components/Auth/UserSignUp';
import UserLogIn from './components/Auth/UserLogIn';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import NavBar from './components/NavBar';
import MessageCreate from './components/Message/MessageCreate';
import MessageList from './components/Message/MessageList';

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
          <Route path="/list" component={UserList} />
          <Route path="/messagecreate" component={MessageCreate} />
          <Route path="/messagelist" component={MessageList} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
