import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import OrderData from './OrderData';

const BookingList = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('https://fast-savannah-37591.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                setOrders(data);
                // console.log(data);
            })
    }, [])

    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email ID</th>
                        <th>Service</th>
                        <th>Pay With</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(booking => <OrderData booking={booking}></OrderData>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default BookingList;