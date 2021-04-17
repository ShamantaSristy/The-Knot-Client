import React from 'react';
import { Form } from 'react-bootstrap';

const MakeAdmin = () => {
    return (
        <div>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Admin Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <button className="btn btn-brand text-white">Add Admin</button>
            </Form>
        </div>
    );
};

export default MakeAdmin;