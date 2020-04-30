import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import MessageEdit from './MessageEdit';
import MessageDelete from './MessageDelete';
import Button from 'react-bootstrap/Button';

export default class Message extends Component {

  render() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{this.props.content}</Card.Title>
                <Card.Text>{this.props.username}</Card.Text>
                <p>
                <Button onClick={this.MessageEdit} size="sm" variant="info">Modify message</Button>
                </p>
                <p>
                <Button onClick={this.MessageDelete} size="sm" variant="danger">Delete</Button>
                </p>
            </Card.Body>
        </Card>
    )
   }
}