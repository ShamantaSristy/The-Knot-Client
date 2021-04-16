import React from 'react';
import { Card, CardDeck, Container } from 'react-bootstrap';
import venue2 from '../../../images/venue2.jpg'
import venue3 from '../../../images/venue3.jpg'
import venue5 from '../../../images/venue5.jpg'
import venue6 from '../../../images/venue6.jpg'

const Gallery = () => {
    return (
        <Container className="mt-5 mb-5">
            <h1>Some of our Works</h1>
            <CardDeck>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={venue5} />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={venue2} />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={venue3} />
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={venue6} />
                </Card>
            </CardDeck>
        </Container>
    );
};

export default Gallery;