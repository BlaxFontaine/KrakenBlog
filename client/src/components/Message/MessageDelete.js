import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';
import Message from './Message';


export default class MessageDelete extends Component {

    constructor(props) {
        super(props);
        this.MessageDelete = this.MessageDelete.bind(this);

        this.state = { message: JSON.parse(localStorage.getItem('message')) };
    }

    MessageDelete() {
        axios.delete('http://localhost:5000/students/messagedelete/' + this.state.message.id)
            .then((res) => {
                console.log('Message successfully deleted!')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.content}</Card.Title>
                    <Card.Text>{this.props.username}</Card.Text>
                    <input
                    type="submit"
                    className="btn btn-dark"
                    value="Modify message" />
                    {/* <Link className="edit-link" to={"/messageedit/" + this.props.obj._id}>
                        Edit
                    </Link> */}
                    <Button onClick={this.MessageDelete} size="sm" variant="danger">Delete</Button>
                </Card.Body>
            </Card>
        );
    }
}