import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../assets/slideshow-imgs/img2.jpg';
import image2 from '../assets/slideshow-imgs/img3.jpg';
import image3 from '../assets/slideshow-imgs/img4.jpg';

const Slideshow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  const images = [
    image1, image2, image3
  ];

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ backgroundImage: `url(${image})` }} className="slick-slide"></div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
