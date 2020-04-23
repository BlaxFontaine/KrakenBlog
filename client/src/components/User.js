import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class User extends Component {

  render() {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{this.props.username}</Card.Title>
                <Button variant="primary">Follow</Button>
            </Card.Body>
        </Card>
    )
   }
}

