import React from 'react';
import { Container } from 'react-bootstrap';
import Booking from '../Booking/Booking/Booking';

const Payment = () => {
    return (
        <Container style={{backgroundColor: '#48426d'}}>
            <h1 className="pb-5 text-center" style={{color: '#fff'}}>Pay Here</h1>
            <Booking></Booking>
        </Container>
    );
};

export default Payment;