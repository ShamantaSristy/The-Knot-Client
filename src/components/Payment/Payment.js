import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Booking from '../Booking/Booking/Booking';

const Payment = () => {
    const [order, setOrder] = useState([]);
    const [paymentDone, setPaymentDone] = useState(false);
    const [orderDone, setOrderDone] = useState(false);


    const handleConfirmOrder = () => {

        const url = 'https://fast-savannah-37591.herokuapp.com/addOrder';
        // console.log(orderData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => console.log('server side response', res))

        console.log("Order saved on database", order);
        setOrderDone(true);
    }

    return (
        <Container style={{ backgroundColor: '#48426d' }}>
            <h1 className="pb-5 text-center" style={{ color: '#fff' }}>Pay Here</h1>

            {
                paymentDone ? <h1 className="pb-5 text-center" style={{ color: '#fff' }}>Your Payment has been done. <br /> Click Order Done</h1> : <div>
                    <Booking setOrder={setOrder} setPaymentDone={setPaymentDone}></Booking>
                </div>
            }

            {
                orderDone ? <h1 className="pb-5 text-center" style={{ color: '#fff' }}>Thank You For Choosing Us. <br/> You May Check Your Orders on Booking List</h1> : <div className="text-center mb-3 pb-3">
                    <Button onClick={handleConfirmOrder}>Order Done</Button>
                </div>
            }


        </Container>
    );
};

export default Payment;