import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';

export default class UserProfile extends Component {
	
	constructor(props) {
	    super(props)
	    // console.log(localStorage.getItem('user'));
	    this.state = { user: JSON.parse(localStorage.getItem('user')) };
	    console.log(this.state.user);
	    console.log('cat');
	}
    
	render() {

		return (
			<div className="wrapper-users">
                <div className="container">
                    <h1>Welcome to your profile {this.state.user.username}</h1>

                    <table className="table table-striped table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <td>Username</td>
                                <td>Email</td>
                                <td>Action</td>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
				                <td>
				                    {this.state.user.username}
				                </td>
				                <td>
				                    {this.state.user.email}
				                </td>
				                <td>
				                	<Link to="/edit/">
				                	{ <EditIcon>Edit</EditIcon> }
				                	</Link>
				                </td>
            				</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}