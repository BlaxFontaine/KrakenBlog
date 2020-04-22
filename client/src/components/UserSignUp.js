import React, { Component } from 'react';
import axios from 'axios';

export default class UserSignUp extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword
    }

    axios.post('http://localhost:5000/register', user)
      .then(res => console.log(res.data));

    this.setState = {
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  render() {
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
                placeholder="username"
                minLength="5"
                maxLength="20"
                required />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                placeholder="email"
                required />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="password"
                className="form-control"
                name="password"
                placeholder="password"
                required />
            </div>

            <div className="form-group">
              <input
                type="password"
                id="confirmPassword"
                className="form-control"
                name="confirmPassword"
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
