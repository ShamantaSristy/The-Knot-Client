import React from 'react';
import { CardDeck, Container } from 'react-bootstrap';
import ServiceDetail from './ServiceDetail';
import wear from '../../../images/wear.jpg';
import makeup from '../../../images/makeup.jpg';
import photographs from '../../../images/bride&groom.jpg';

const serviceData = [
    {
        name: 'Bridal Wear',
        img: wear
    },
    {
        name: 'Bridal Makeup',
        img: makeup
    },
    {
        name: 'Bridal Photography',
        img: photographs
    }
]

const Services = () => {
    return (
        <Container className="mt-5 pb-5">
            <h2 className="mt-5 pb-5">Our Services</h2>

            <CardDeck>
            {
                serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
            }
            </CardDeck>

    
        </Container>
    );
};

export default Services;