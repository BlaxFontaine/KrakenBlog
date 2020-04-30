import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import axios from 'axios';

export default class MessageEdit extends Component {
    constructor(props) {
        super(props)

        this.onChangeMessage = this.onChangeMessage.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = { message: JSON.parse(localStorage.getItem('message')) };
    }

    componentDidMount() {
        const URL = 'http://localhost:5000/edit/' + this.state.message._id
        
        axios.get(URL)
            .then(res => {
                console.log(res.data[0]);
                const message = res.data[0];
                this.setState({
                    message: message.content
                });
            })
            .catch((error) => {
                console.log(error);
            })
    }

    onChangeMessage(e) {
        this.setState({ content: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const message = {
            content: this.state.content
        };

        console.log(message);

        axios.put('http://localhost:5000/update/' + this.state.message._id, message)
            .then((res) => {
                console.log(res.data)
                console.log('Message successfully updated')
                const newMessage = JSON.stringify(message);
                localStorage.setItem('message', newMessage);
                this.setState({ redirect: true });
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/messagelist" />
          }
        return (<div className="form-wrapper">
            
            <Card onSubmit={this.onSubmit}>
                <Card.Body>
                    <Card.Title>{this.props.content}</Card.Title>
                    <Card.Text>{this.props.username}</Card.Text>
                    <input
                    type="submit"
                    className="btn btn-dark"
                    value="Modify message" />
                </Card.Body>
            </Card>

                <Button variant="info" size="lg" block="block" type="submit">
                    Save Changes
                </Button>
        </div>)
    }
}