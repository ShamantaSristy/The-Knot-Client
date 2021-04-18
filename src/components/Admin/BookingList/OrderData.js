import React from 'react';

const OrderData = ({booking}) => {
  console.log(booking);
    return (

        <tr>
      <td>{booking.name}</td>
      <td>{booking.email}</td>
      <td>{booking.serviceName}</td>
      <td>{booking.type}</td>
      <td>Done</td>
    </tr>
    );
};

export default OrderData;