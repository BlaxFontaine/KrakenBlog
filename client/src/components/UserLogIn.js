import React, { Component } from 'react';
import axios from 'axios';

export default class UserLogIn extends Component {
	constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      password: ''
    }
    
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  
  onSubmit(e) {
    e.preventDefault();    
    
    axios.post('http://localhost:5000/login', this.state)
    .then(res => console.log(res.data))
    .catch(err => console.log(err.response));
    
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

    return (
      <div className="bounds">
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