import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const Review = () => {
  const [value, setValue] = React.useState(5);
  const [serviceName, setServiceName] = useState("");
    const [feedback, setFeedback] = useState("");

    const handleServiceName = (event) => {
      const name = event;
      setServiceName(name);

  };
  const handleServiceInfo = (event) => {
      const description = event;
      setFeedback(description);

  };

  const handleServiceData = () => {
      const serviceDetails = {
          serviceName: serviceName,
          description: feedback,
          rate: value
         
      };

       const url = 'http://localhost:5000/addReview';
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


  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Label>Service Name</Form.Label>
        <Form.Control onBlur={(event) => handleServiceName(event.target.value)} type="text" placeholder="Service Name" />
      </Form.Group>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Feedback</Form.Label>
        <Form.Control onBlur={(event) => handleServiceInfo(event.target.value)} as="textarea" rows={3} />
      </Form.Group>

      <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Rate Us</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      </div>

      <Button onClick={handleServiceData} className="btn btn-brand text-white">Submit</Button>
    </Form>
  );
};

export default Review;