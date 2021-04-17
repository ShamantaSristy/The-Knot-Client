import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import featureImg from '../../../images/venue4.jpg';

const Featured = () => {
    return (
        <Container className="mt-3 text-center">
            <Row>
                <Col sm={7}>

                <div className="mt-8">
                        <h1 style={{ color: '#3282b8' }} class="h1">The Knot - Your Personal Wedding Planner</h1>
                        <br />
                        <p className="text-secondary">Plan your wedding with Us</p>
                        <br />
                        <p className="text-secondary">
                        The Knot is a Bangladeshi Wedding Planning Website and app where you can find the best wedding vendors, with prices and reviews at the click of a button. Whether you are looking to hire wedding planners in Bangladesh, or looking for the top photographers, or just some ideas and inspiration for your wedding. The Knot can help you solve your wedding planning woes through its unique features. With a checklist, detailed vendor list, inspiration gallery and blog - you won't need to spend hours planning a wedding anymore.</p>
                        <br />
                        <div className="mb-2">
                            <button className="btn btn-brand text-white">Book Now</button>
                        </div>
                    </div>


                   
                </Col>
                <Col sm={5}>
                <Image src={featureImg} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Featured;