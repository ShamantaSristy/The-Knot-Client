import React, { useEffect, useState } from 'react';
import { CardColumns, Container } from 'react-bootstrap';
import ServiceDetail from './ServiceDetail';
// import wear from '../../../images/wear.jpg';
// import makeup from '../../../images/makeup.jpg';
// import photographs from '../../../images/bride&groom.jpg';

// const serviceData = [
//     {
//         name: 'Bridal Wear',
//         img: wear
//     },
//     {
//         name: 'Bridal Makeup',
//         img: makeup
//     },
//     {
//         name: 'Bridal Photography',
//         img: photographs
//     }
// ]




const Services = () => {
    const [services, setServices] = useState([]);

useEffect(() => {
    fetch('https://fast-savannah-37591.herokuapp.com/services')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
            // console.log(data);
        })
}, [])
    return (
        <Container className="mt-5 pb-5">
            <h2 className="mt-5 pb-5 text-center" style={{color: '#3282b8'}} >Our Services</h2>

            <CardColumns>
            {
                services?.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </CardColumns>

    
        </Container>
    );
};

export default Services;