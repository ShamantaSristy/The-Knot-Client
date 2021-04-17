import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BookingCard = ({order}) => {
    return (
        <Card>
          <Card.Header as="h5">Featured</Card.Header>
          <Card.Body>
            <Card.Title>{order.serviceName}</Card.Title>
            <Card.Text>
              {order.description}
    </Card.Text>
            <Button variant="Light">Go somewhere</Button>
          </Card.Body>
        </Card>
    );
};

export default BookingCard;