import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class UserEdit extends Component {
    constructor(props) {
        super(props)

        this.onChangeUserName = this.onChangeUserName.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = { user: JSON.parse(localStorage.getItem('user')) };
    }

    componentDidMount() {
        const URL = 'http://localhost:5000/edit/' + this.state.user.email
        
        axios.get(URL)
            .then(res => {
                console.log(res.data[0]);
                const user = res.data[0];
                this.setState({
                    username: user.username,
                    email: user.email,
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeUserName(e) {
        this.setState({ username: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            username: this.state.username,
            email: this.state.email,
        };

        console.log(user);

        axios.put('http://localhost:5000/update/' + this.state.user.email, user)
            .then((res) => {
                console.log(res.data)
                console.log('User successfully updated')
                const newUser = JSON.stringify(user);
                localStorage.setItem('user', newUser);
                this.setState({ redirect: true });
            }).catch((error) => {
                console.log(error)
            })

            //Redirect to profile
            // this.state.user.history.push('/profile')

        
            
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/profile" />
          }
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.username} onChange={this.onChangeUserName}/>
                </Form.Group>

                <Form.Group controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={this.state.email} onChange={this.onChangeUserEmail}/>
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit">
                    Save Changes
                </Button>

            </Form>
        </div>)
    }
}