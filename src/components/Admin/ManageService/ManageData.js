import React from 'react';
import { Button } from 'react-bootstrap';

const ManageData = ({service}) => {
    const deleteItem = id => {

        fetch(`http://localhost:5000/deleteItem/${id}`,{
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log('delete item', result)
        })

        console.log(id);
    }

    return (
        <tr>
      <td>{service.serviceName}</td>
      <td>{service.description}</td>
      <td><Button  onClick={() => deleteItem(service._id)}>Delete Service</Button></td>
    </tr>
    );
};

export default ManageData;