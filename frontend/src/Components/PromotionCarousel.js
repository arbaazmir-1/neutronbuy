import React from 'react'
import {Row,Col,Image,Alert,Carousel}  from 'react-bootstrap'
import { Link } from 'react-router-dom'
import banner from '../banner.png'
const PromotionCarousel = () => {
  return (
    <>
    
    <Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Second slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner}
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    
    
    </>
  )
}

export default PromotionCarousel