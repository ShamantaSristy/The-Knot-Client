import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import headerImg from '../../../images/homePage.jpg';

const Header = () => {
    return (
        <Container className="mt-3 text-center">
            <Row>
                <Col sm={7}>
                    <Image src={headerImg} fluid />
                </Col>
                <Col  sm={5}>
                    <div className="mt-8">
                    <h1 style={{color: '#3282b8'}} class="h1">Your Wedding, Your Way</h1>
                    <br/>
                    <p className="text-secondary">Find the best wedding vendors with thousands of trusted reviews</p>
                    <br />
                    <div className="mb-2">
                    <button className="btn btn-brand text-white">Get Appointment</button>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;