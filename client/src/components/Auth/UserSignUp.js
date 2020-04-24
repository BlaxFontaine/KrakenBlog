import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class UserSignUp extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirect: false
    }
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onSubmit = (e) => {
    e.preventDefault();    
    
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }

    axios.post('http://localhost:5000/register', user)
    .then((res) => {
      if (res.status === 200) {
        console.log(this.state.redirect);
        this.setState({ redirect: true });
      }
    })
    .catch(function (err) {
        console.log(err)
    });
    
}

  onChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState(() => {
      return {
        [name]: value
      };
    });
  }

  render() {
    
    const {
      username,
      email,
      password,
      confirmPassword,
    } = this.state;

    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }

    return (
      <div className="container">
        <div className="grid-33 centered">
          <h1>Register</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="username"
                className="form-control"
                name="username"
                value={username}
                placeholder="username"
                minLength="5"
                maxLength="20"
                onChange={this.onChange}
                required />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                value={email}
                onChange={this.onChange}
                placeholder="email"
                required />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                value={password}
                onChange={this.onChange}
                placeholder="password"
                required />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                name="confirmPassword"
                value={confirmPassword}
                onChange={this.onChange}
                placeholder="password confirmation"
                required />
            </div>

            <input
              type="submit"
              className="btn btn-primary"
              value="Sign up" />
          </form>
        </div>
      </div>
    )
  }
}
