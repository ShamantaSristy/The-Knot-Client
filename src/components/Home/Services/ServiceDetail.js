import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const ServiceDetail = ({service}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleOrder = () => {
        const orderInfo = {
          ...loggedInUser,
          serviceName: service.serviceName,
          description: service.description 
        }
        setLoggedInUser(orderInfo);
        console.log(orderInfo);
      }

    return (
            <Card>
                <Card.Img variant="top" src={service.imageURL} />
                <Card.Body>
                    <Card.Title style={{color: '#3282b8'}}>{service.serviceName}</Card.Title>
                    <Card.Text className="text-secondary">
                       {service.description}
                   </Card.Text>

                   <Button onClick={handleOrder} className="btn btn-brand text-white" ><Link style={{ color: 'white' }} to='/checkout'>Book Now</Link></Button>
                   {/* <button className="btn btn-brand text-white">Book Now</button> */}
                </Card.Body>
            </Card>
    );
};

export default ServiceDetail;