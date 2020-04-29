import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button } from 'react-bootstrap';

export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: JSON.parse(localStorage.getItem('user'))
        }
        this.onFollow = this.onFollow.bind(this)
    }

    onFollow() {
        // console.log(this.state.user._id)
        // console.log(this.props.id)
        axios.put('http://localhost:5000/subscribe', {
            params: {
              user: this.state.user._id,
              subscription: this.props.id
                }
            })
            .then((res) => {
                console.log(res.data)
                console.log('Student successfully updated')
            }).catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <Card>
                <Card.Body>
                    <Card.Title>{this.props.username}</Card.Title>
                    <Button variant="primary" onClick={this.onFollow}><i className="fab fa-qq"></i>   Follow</Button>
                </Card.Body>
            </Card>
        )
    }
}

