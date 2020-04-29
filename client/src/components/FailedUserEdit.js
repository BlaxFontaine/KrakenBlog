import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class UserEdit extends Component {
	constructor(props) {
	    super(props)
	    console.log(localStorage.getItem('user'));
	    this.state = { user: JSON.parse(localStorage.getItem('user')), isInEdit: false };
	    console.log(this.state.isInEdit);

	    this.handleSubmit = this.handleSubmit.bind(this);

		this.onChangeEdit = this.onChangeEdit.bind(this);
	    this.updateValue = this.updateValue.bind(this);
	    this.renderEditView = this.renderEditView.bind(this);
	    this.renderDefaultView = this.renderDefaultView.bind(this);
	}


	handleSubmit(event) {
		event.preventDefault();

		const user = {
	      username: this.state.username,
	      email: this.state.email,
	      password: this.state.password,
	      
	    }

	    axios.put('http://localhost:5000/edit/' +this.state.user.id, user)
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


	onChangeEdit = () => {
	    this.setState({
	      isInEdit: !this.state.isInEdit
	    });
  	}

  	updateValue = () => {
  		this.setState({
  			isInEdit:false,
  			value: this.refs.theTextInput.value,
  		})
  	}

  	

  	renderEditView = () => {
  		return(
  			
  			<div className="container">
	        <div className="grid-33 centered">
	          <h1>Update your profile {this.state.user.username}</h1>
	          <form onSubmit={this.handleSubmit}>
	            <div className="form-group">
	              <input
	                type="text"
	                id="username"
	                className="form-control"
	                name="username"
	                defaultValue={this.state.value}
	                ref="theTextInput"
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
	                defaultValue={this.state.value}
	                ref="theTextInput"
	                placeholder="email"
	                required />
	            </div>

	            <div className="form-group">
	              <input
	                type="password"
	                id="password"
	                className="form-control"
	                name="password"
	                defaultValue={this.state.value}
	                ref="theTextInput"
	                placeholder="password"
	                required />
	            </div>
	          </form>

	            <Link to="/profile">
	            <button onClick={this.onChangeEdit}>Cancel</button>                	
				</Link>
				<input
	              type="submit"
	              className="btn btn-dark"
	              value="Save" />
	        </div>
      		</div>

  		)
  	}


  	renderDefaultView = () => {
  		return(
		<div className="container">
	        <div className="grid-33 centered">
	          <h1>Update your profile {this.state.user.username}</h1>
	          <form onDoubleClick={this.onChangeEdit}>
	            <div className="form-group">
	              <input
	                type="text"
	                id="username"
	                className="form-control"
	                name="username"
	                value={this.state.user.username}
	                ref="theTextInput"
	                placeholder="username"
	                minLength="5"
	                maxLength="20"
	                onDoubleClick={this.onChangeEdit}
	                required />
	            </div>

	            <div className="form-group">
	              <input
	                type="email"
	                id="email"
	                className="form-control"
	                name="email"
	                value={this.state.user.email}
	                onDoubleClick={this.onChangeEdit}
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
	                onDoubleClick={this.onChangeEdit}
	                placeholder="password"
	                required />
	            </div>
	          </form>

	          	<Link to="/profile">
	            <button onClick={this.onChangeEdit}>Cancel</button>                	
				</Link>
				
				<input
	              type="submit"
	              className="btn btn-dark"
	              value="Save" />

	        </div>
      		</div>

  		)
  	}

	render() {
		console.log(this.state.isInEdit);
    	if (this.state.isInEdit) {

    	return (this.renderEditView()
    	)
    	} else {
    		return( this.renderDefaultView()
    		)
    	}	
	}
}