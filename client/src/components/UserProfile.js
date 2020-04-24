import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
/*import DataTable from './data-table';*/

export default class UserProfile extends Component {
	
	constructor(props) {
	    super(props)
	    this.state = { user: '' };
	}

	componentDidMount() {
        axios.get('http://localhost:5000/profile')
            .then(res => {
                this.setState({ user: res.data });
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    /*dataTable() {
        return this.state.usersCollection.map((data, i) => {
            return <DataTable obj={data} key={i} />;
        });
    }*/

    
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
                                <td>Password</td>
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
				                    {this.state.user.password}
				                </td>
            				</tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

}