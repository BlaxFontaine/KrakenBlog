import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export default class UserList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users')
    .then((res) => {
      this.setState({
        users: res.data
      })
    })
    .catch(function (err) {
        console.log(err)
    });
  }

  Users() {
    return this.state.users.map((user, index) => {
      return (
        <User
          username={user.username}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
          <h1>Users list</h1>
          {this.Users()}
      </div>
    )
  }
}
