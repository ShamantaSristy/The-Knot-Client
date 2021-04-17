import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import ManageData from './ManageData';

const ManageService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
                console.log(data);
            })
    }, [])


    return (
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Service Name</th>
                        <th>Description</th>
                        <th>Manage</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        services?.map(service => <ManageData service={service}></ManageData>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageService;