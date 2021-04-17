import React, { useEffect, useState } from 'react';
import {CardDeck, Container } from 'react-bootstrap';
import BookingCard from './BookingCard';

const BookingList = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
      fetch('http://localhost:5000/orders')
          .then(res => res.json())
          .then(data =>{
              setOrders(data);
              console.log(data);
          })
  }, [])

  return (
    <Container>
      <CardDeck>
          {
            orders?.map(order => <BookingCard order={order}></BookingCard>)
          }
      </CardDeck>
    </Container>
  );
};

export default BookingList;