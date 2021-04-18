import React, { useContext, useEffect, useState } from 'react';
import {CardColumns, CardDeck, Container } from 'react-bootstrap';
import { UserContext } from '../../../App';
import BookingCard from './BookingCard';

const BookingList = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
      fetch('https://fast-savannah-37591.herokuapp.com/orders?email='+loggedInUser.email,{
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
      })
          .then(res => res.json())
          .then(data =>{
              setOrders(data);
              // console.log(data);
          })
  }, [])

  return (
    <Container>
      <CardColumns>
          {
            orders?.map(order => <BookingCard order={order}></BookingCard>)
          }
      </CardColumns>
    </Container>
  );
};

export default BookingList;