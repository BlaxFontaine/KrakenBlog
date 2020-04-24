import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class UserProfile extends Component {
	constructor(props) {
    super(props)
    
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      redirect: false
    }
}
    
	render() {
		const {
	      username,
	      email,
	      password,
	      confirmPassword,
	    } = this.state;

		return (
			<div className="container">
        	<div className="grid-33 centered">
        	<h1>Welcome to your Profile {username}</h1>
        	</div>
        	</div>
			)
	}

}