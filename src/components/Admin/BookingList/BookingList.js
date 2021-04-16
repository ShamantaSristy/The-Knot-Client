import React from 'react';
import { Container, Table } from 'react-bootstrap';
import OrderData from './OrderData';

const bookingData = [
    {
        _id: '5e8df50be6e8231764dc23de',
        name: "Aliza",
        service: 'Bridal Makeup',
        email: 'kolmilota@gmail.com',
        paymentMethod: 'Card',
        status: 'Done'

    },
    {
        _id: '5e8df578e6e8231764dc23df',
        name: "Aliza",
        service: 'Bridal Makeup',
        email: 'kolmilota@gmail.com',
        paymentMethod: 'Card',
        status: 'Done'
    },
    {
        _id: '5e8df5aee6e8231764dc23e0',
        name: "Aliza",
        service: 'Bridal Makeup',
        email: 'kolmilota@gmail.com',
        paymentMethod: 'Card',
        status: 'Pending'
    },
    {
        _id: '5e8df63be6e8231764dc23e1',
        name: "Aliza",
        service: 'Haldi',
        email: 'kolmilota@gmail.com',
        paymentMethod: 'Cash',
        status: 'Done'
    },
    {
        _id: '5e8df68de6e8231764dc23e2',
        name: "Aliza",
        service: 'Bridal Mehendi',
        email: 'kolmilota@gmail.com',
        paymentMethod: 'Card',
        status: 'Done'
    },
    {
        _id: '5e8df6a0e6e8231764dc23e3',
        name: "Aliza",
        service: 'Bridal Wear',
        email: 'kolmilota@gmail.com',
        paymentMethod: 'Card',
        status: 'Pending'
    }
]

const BookingList = () => {
    return (
        <Container>
            <Table striped bordered hover>
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
                        bookingData.map(booking => <OrderData booking={booking}></OrderData>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default BookingList;