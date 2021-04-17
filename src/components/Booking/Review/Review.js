
import React from "react";
import { Form } from "react-bootstrap";

const Review = () => {
  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Your Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Your Address</Form.Label>
        <Form.Control type="text" placeholder="Address or Country Name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <button className="btn btn-brand text-white">Submit</button>
    </Form>
  );
};

export default Review;