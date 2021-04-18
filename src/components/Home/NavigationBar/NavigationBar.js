import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from "react-bootstrap"
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App'

const NavigationBar = () => {
    // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    // const [isAdmin, setIsAdmin] = useState(false);
    // const [adminEmail, setAdminEmail] = useState("");
    

    // useEffect(()=>{
    //     fetch('https://fast-savannah-37591.herokuapp.com/isAdmin', {
    //         method : 'POST',
    //         headers: { 'Content-Type': 'application/json'},
    //         body: JSON.stringify({email: loggedInUser.email})
    //     })
    //     .then(res => res.json())
    //     .then(data => console.log(data));
    //     // setIsAdmin(true)
    //     console.log(adminEmail);
    //     console.log(isAdmin);
    // },[])

    // useEffect(() => {
    //     fetch('https://fast-savannah-37591.herokuapp.com/admins')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             // console.log(data);
    //         })
    // }, [])

    return (
        <div>
            <Navbar bg="light" expand="lg" variant="light">
                <Navbar.Brand href="#home">The Knot</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/home">Home</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/booking">Booking</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/admin">Admin</Link> </Nav.Link>
                    <Nav.Link> <Link style={{ color: '#16213e' }} to="/login">Login</Link> </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>

        </div>
    );
};

export default NavigationBar;