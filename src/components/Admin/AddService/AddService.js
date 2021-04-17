import axios from 'axios';
import React, { useState } from 'react';
import { Form,Button } from 'react-bootstrap';

const AddService = () => {
    const [imageURL, setIMageURL] = useState(null);
    const [serviceName, setServiceName] = useState("");
    const [serviceInfo, setServiceInfo] = useState("");



    const handleServiceName = (event) => {
        const name = event;
        setServiceName(name);

    };
    const handleServiceInfo = (event) => {
        const description = event;
        setServiceInfo(description);

    };

    const handleServiceData = () => {
        const serviceDetails = {
            serviceName: serviceName,
            description: serviceInfo,
            imageURL: imageURL
           
        };

         const url = 'http://localhost:5000/addService';
        // console.log(orderData);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(serviceDetails)
        })
            .then(res => console.log('server side response', res))
        
        console.log(serviceDetails);
        alert("Service Added SuccessFully")
    }

    // const onSubmit = data => {
    //     const orderData = {
    //         itemName: data.name,
    //         imageURL: imageURL,
    //         // itemPrice: data.price
    //     };

    //     // const orderDetails = {...loggedInUser, ...orderData}

    //     const url = 'http://localhost:5000/addService';
    //     // console.log(orderData);
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-type': 'application/json'
    //         },
    //         body: JSON.stringify(orderData)
    //     })
    //         .then(res => console.log('server side response', res))
    // }

    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'a9e580f02052e7c8a890d464e6b6e112');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                console.log(response);
                setIMageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }




    return (
        <div>
            <Form >
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control onBlur={(event) => handleServiceName(event.target.value)} type="text" placeholder="Wedding Photography" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control onBlur={(event) => handleServiceInfo(event.target.value)} as="textarea" rows={3} />
                </Form.Group>
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Insert file" onChange={handleImageUpload} />
                </Form.Group>
                <Button onClick={handleServiceData} className="btn btn-brand text-white">Add Service</Button>
            </Form>
        </div>
    );
};

export default AddService;