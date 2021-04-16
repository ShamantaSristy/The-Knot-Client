import React from 'react';
import { Card } from 'react-bootstrap';

const ServiceDetail = ({service}) => {
    return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={service.img} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                   </Card.Text>
                   <button className="btn btn-brand text-white">Get Appointment</button>
                </Card.Body>
            </Card>
    );
};

export default ServiceDetail;