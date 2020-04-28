import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Message extends Component {

  render() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{this.props.content}</Card.Title>
                <Card.Text>{this.props.username}</Card.Text>
            </Card.Body>
        </Card>
    )
   }
}