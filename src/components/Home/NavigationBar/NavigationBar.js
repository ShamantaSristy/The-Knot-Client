import React from 'react';
import { Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">The Knot</Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link> <Link style={{ color:'#16213e'}} to="/home">Home</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color:'#16213e'}} to="/booking">Booking</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color:'#16213e'}} to="/admin">Admin</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color:'#16213e'}} to="/login">Login</Link> </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    );
};

export default NavigationBar;