import React from 'react';

const OrderData = ({booking}) => {
    return (

        <tr>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.service}</td>
      <td>{booking.paymentMethod}</td>
      <td>{booking.status}</td>
    </tr>
    );
};

export default OrderData;