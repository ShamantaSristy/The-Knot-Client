import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookingCard = ({ order }) => {
  
  return (
    <Card>
      <Card.Header as="h5"><strong>{order.serviceName}</strong></Card.Header>
      <Card.Body>
        {/* <Card.Title> <h4><strong>{order.serviceName}</strong></h4> </Card.Title> */}
        <Card.Text>
          <b>Customer Name: </b> <p>{order.name}</p>
          <b>Phone: </b> <p>{order.phone}</p>
          <b>Payment Method : </b> <p>{order.type}</p>
          <b>Card Type : </b> <p>{order.card.brand}</p>
          <b>Order Date: </b> <p>{order.date}</p>

        </Card.Text>
        {/* <Card.Footer className="text-muted"></Card.Footer> */}
      </Card.Body>
    </Card>
  );
};

export default BookingCard;