import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState([]);


    const handleEmailUpload = (event) => {
        const adminInfo = {
            email : event
        };
        setAdminEmail(adminInfo);

    };

    const handleAddAdmin = () => {
        const url = 'https://fast-savannah-37591.herokuapp.com/addAdmin';
        // console.log(orderData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminEmail)
        })
            .then(res => alert('Admin Added Successfully'))
    }
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Admin Email address</Form.Label>
                    <Form.Control onBlur={(event) => handleEmailUpload(event.target.value)} type="email" placeholder="name@example.com" />
                </Form.Group>
                <Button  onClick={handleAddAdmin} className="btn btn-brand text-white">Add Admin</Button>
            </Form>
        </div>
    );
};

export default MakeAdmin;