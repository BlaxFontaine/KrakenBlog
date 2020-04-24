import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

export default class NavBar extends Component {

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
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                <Nav>
                    <Nav.Link href="/register">Sign up</Nav.Link>
                    <Nav.Link href="/login">Log in</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        )
    }
}