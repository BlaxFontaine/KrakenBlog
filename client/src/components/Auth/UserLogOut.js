import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class UserLogOut extends Component {

Logout() {
    return localStorage.removeItem('user');
}

render() {  
    return(
        <div>
            {this.Logout()}
            <Redirect to="/" />
        </div>
    )
  }
}