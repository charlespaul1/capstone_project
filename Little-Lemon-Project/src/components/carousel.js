import React from 'react'
import './carousel.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import chefPic  from '../assets/Mario and Adrian A.jpg'
import chefpic2 from '../assets/Mario and Adrian b.jpg'
import chefpic3 from '../assets/restaurant chef B.jpg'

const Carousel = () => {
    // image carousel with 3 images that have animation and transition
    const images = [chefPic, chefpic2, chefpic3]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        height: '300px'
    }
  return (
    <>
    <Slider {...settings}>
        {images.map((image, index) => (
            <div key={index}>
              <img src={images[index]} alt="chef" className="chefPic"/>
            </div>
        ))}
    </Slider>

    </>
  )
}

export default Carousel
