import React from 'react'
import './Banner.css'

import {
  Carousel
} from 'react-bootstrap';

const Banner = () => (
  <div className="Banner">
    <Carousel>
      <Carousel.Item>
        <img
          src={'http://via.placeholder.com/1920x700/000'}
          className="d-block w-100"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={'http://via.placeholder.com/1920x700/ff0000'}
          className="d-block w-100"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
  </div>
)

export default Banner;