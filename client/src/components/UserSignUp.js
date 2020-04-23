import React, { Component } from 'react';
import axios from 'axios';

export default class UserSignUp extends Component {
  constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();    
    
    axios.post('http://localhost:5000/register', this.state)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response));
    
    this.setState = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
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

    return (
      <div className="bounds">
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
