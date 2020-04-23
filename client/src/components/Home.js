import React, { Component } from 'react';
import { Container, Image } from 'react-bootstrap';


export default class Home extends Component {
    render() {
        return (
            <Container centered>
                <h1>Welcome to the Kraken Blog</h1>
                <Image src="kraken.jpg" rounded />
            </Container>
        )
    }
}
