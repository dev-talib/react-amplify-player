import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyCarousel.css'

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = ({ items }) => {
  return (
    <Carousel responsive={responsive} className="my-carousel">
    {items.map(item => (
      <Card key={item.id} className="carousel-card">
        <Card.Img variant="top" src={item.imgSrc} />
        <div className="card-overlay d-flex justify-content-center align-items-center">
          <div>
            <Card.Title>{item.title}</Card.Title>
            {/* <Card.Text>{item.text}</Card.Text> */}
          </div>
        </div>
      </Card>
    ))}
  </Carousel>
  );
};

export default MyCarousel;
