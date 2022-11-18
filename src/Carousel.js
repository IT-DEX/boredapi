import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import imageOne from './background-one.jpg';
import imageTwo from './background-two.jpg';
import imageThree from './background-three.jpg';
import imageFour from './background-four.jpg';
import imageFive from './background-five.jpg';

function NoTransitionExample() {
    return (

        <div className="container">

      <Carousel  slide={false}>
        
        <Carousel.Item>
          <img
            className="d-block w-100" 
            src={imageOne}
            alt="First slide"
          />                
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageTwo}
            alt="Second slide"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageThree}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageFour}
            alt="Third slide"
          />
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src={imageFive}
            alt="Third slide"
          />
        </Carousel.Item>

      </Carousel>

      </div>
    );
  }
  
  export default NoTransitionExample;