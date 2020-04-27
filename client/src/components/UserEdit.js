import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';


export default class UserEdit extends Component {
	constructor(props) {
	    super(props)
	    console.log(localStorage.getItem('user'));
	    this.state = { user: JSON.parse(localStorage.getItem('user')) };
	    console.log(this.state.user);
	    console.log(this.state.user.username);
	    console.log('cat');

	    this.onSubmit = this.onSubmit.bind(this);
	    this.onChange = this.onChange.bind(this);
	}

	onSubmit = (e) => {
    e.preventDefault();    
    
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      /*confirmPassword: this.state.confirmPassword*/
    }

    axios.post('http://localhost:5000/profile', user)
    .then((res) => {
      if (res.status === 200) {
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

		return(
			<div className="container">
	        <div className="grid-33 centered">
	          <h1>Update your profile {this.state.user.username}</h1>
	          <form onSubmit={this.onSubmit}>
	            <div className="form-group">
	              <input
	                type="text"
	                id="username"
	                className="form-control"
	                name="username"
	                value={this.state.user.username}
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
	                value={this.state.user.email}
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
	                value={this.state.user.password}
	                onChange={this.onChange}
	                placeholder="password"
	                required />
	            </div>


	            <input
	              type="submit"
	              className="btn btn-primary"
	              value="Update Profile" />
	          </form>
	        </div>
      </div>
			)
	}
}