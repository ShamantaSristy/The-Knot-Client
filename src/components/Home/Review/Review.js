import React from 'react';
import { Card } from 'react-bootstrap';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

const Review = (props) => {
    const { serviceName, description, rate } = props.review;
    return (

        <Card className="p-3">
            <blockquote className="blockquote mb-0 card-body">
                <p>
                    <strong style={{color: '#3282b8'}} >{serviceName}</strong>
                </p>
                <p className="text-secondary">
                    {description}
                </p>
                <div>
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Typography component="legend" style={{color: '#3282b8'}}>Ratings</Typography>
                        <Rating name="read-only" value={rate} readOnly />
                    </Box>
                </div>
                <footer className="blockquote-footer">
                    <small className="text-muted">
                        <cite title="Source Title">Wilson</cite>
                    </small>
                </footer>
            </blockquote>
        </Card>

    );
};

export default Review;