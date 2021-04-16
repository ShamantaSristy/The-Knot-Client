import React from 'react';
import { Nav, Navbar } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Dashboard</Nav.Link>
                    <Nav.Link href="#pricing">Admin</Nav.Link>
                    <Nav.Link href="#pricing">Login</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavigationBar;