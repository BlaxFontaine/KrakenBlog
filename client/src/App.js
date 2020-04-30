import React from 'react';
// import { Provider } from './components/Context';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import UserSignUp from './components/Auth/UserSignUp';
import UserLogIn from './components/Auth/UserLogIn';
import UserLogOut from './components/Auth/UserLogOut';
import UserProfile from './components/UserProfile';
import UserList from './components/UserList';
import UserEdit from './components/UserEdit';
import NavBar from './components/NavBar';
import MessageCreate from './components/Message/MessageCreate';
import MessageList from './components/Message/MessageList';
import MessageEdit from './components/Message/MessageEdit';
import MessageDelete from './components/Message/MessageDelete';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={UserSignUp} />
          <Route path="/login" component={UserLogIn} />
          <Route path="/logout" component={UserLogOut} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/list" component={UserList} />
          <Route path="/edit/" component={UserEdit} />
          <Route path="/messagecreate" component={MessageCreate} />
          <Route path="/messagelist" component={MessageList} />
          <Route path="/messageedit/" component={MessageEdit} />
          <Route path="/messagedelete/" component={MessageDelete} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
