import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
          loggedIn: false
        }
        this.isLogged = this.isLogged.bind(this)

      }

    isLogged() {
        return localStorage.getItem('user')
    }

    render() {
        return (
            <Navbar className="color-nav" collapseOnSelect expand="lg" variant="dark">
            <Navbar.Brand href="/">
                <img
                    alt=""
                    src="/kraken-icon.jpg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}Kraken Blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/list">Users list</Nav.Link>
                    <Nav.Link href="/messagelist">Go with the flow</Nav.Link>
                </Nav>
                <Nav>
                    { this.isLogged() ?
                        <React.Fragment>
                            <Nav.Link href="/profile">Profile</Nav.Link>
                            <Nav.Link href="/logout">Log out</Nav.Link>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <Nav.Link href="/register">Sign up</Nav.Link>
                            <Nav.Link href="/login">Log in</Nav.Link>
                        </React.Fragment>
                    }
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}