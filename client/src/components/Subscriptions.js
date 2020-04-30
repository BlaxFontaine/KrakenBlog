import React, { Component } from 'react';
import axios from 'axios';
import User from './User';

export default class Subscriptions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subscriptions: [],
      users: []
    }
    
    this.SetUsers = this.SetUsers.bind(this);
    // this.Subscriptions = this.Subscriptions.bind(this);

  }

  componentDidMount() {
    axios.get('http://localhost:5000/subscriptions')
    .then((res) => {
      this.setState({
        subscriptions: res.data
      })
      this.SetUsers()
    })
    .catch(function (err) {
        console.log(err)
    });
    
    }

  SetUsers() {
    this.state.subscriptions.forEach((sub) => {
        axios.get('http://localhost:5000/user', {
            params: sub
            }
        )
        .then((res) => {
            this.state.users.push(res.data)
        })
        .catch(function (err) {
            console.log(err)
        });
    })
  }
  
  Subscriptions() {      
    console.log(this.state.users)
    return this.state.users.map((user, index) => {
      return (
        <User
          id={user._id}
          username={user.username}
          key={index}
        />
      )
    })
  }

  render() {
    return (
      <div className="container">
          <h1>You subscribed to them!</h1>
          {/* {this.SetUsers()} */}
          {this.Subscriptions()}
          <ul>
            
          </ul>
      </div>
    )
  }
}
