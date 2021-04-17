import React, { useEffect, useState } from 'react';
// import wilson from '../../../images/wilson.png'
// import ema from '../../../images/ema.png'
// import aliza from '../../../images/aliza.png'
import Review from '../Review/Review';
import { CardDeck, Container } from 'react-bootstrap';

// const testimonialData = [
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Wilson Harry',
//         from: 'California',
//         img: wilson
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Ema Gomez',
//         from: 'California',
//         img: ema
//     },
//     {
//         quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
//         name: 'Aliza Farari',
//         from: 'California',
//         img: aliza
//     }
// ]


const Reviews = () => {
    const [reviews, setServices] = useState([]);

useEffect(() => {
    fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data =>{
            setServices(data);
            console.log(data);
        })
}, [])

    return (
        <Container className="mt-5 mb-5 pb-5 pt-5">
            <h1 className="mt-5 mb-5 text-center"style={{color: '#3282b8'}}>What Our Customers Says</h1>
            <CardDeck>
                {
                    reviews?.map(review => <Review review={review} />)
                }
            </CardDeck>
        </Container>
    );
};

export default Reviews;