import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class UserLogIn extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }    
    
    axios.post('http://localhost:5000/login', user)
    .then((res) => {
      if (res.status === 200) {
        const user = JSON.stringify(res.data);
        localStorage.setItem('user', user);
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
      email,
      password,
    } = this.state;

    if (this.state.redirect) {
      return <Redirect to="/profile" />
    }

    return (
      <div className="container">
        <div className="grid-33 centered">
          <h1>Log In</h1>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="email"
                className="form-control"
                name="email"
                value={email}
                placeholder="email"
                minLength="5"
                maxLength="20"
                onChange={this.onChange}
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

            <input
              type="submit"
              className="btn btn-primary"
              value="Log In" />
          </form>
        </div>
      </div>
    )
  }
}