import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/slide1.png';
import slide2 from '../assets/slide2.png';
import slide3 from '../assets/slide3.png';
import slide4 from '../assets/slide4.png';
import slide5 from '../assets/slide5.png';
import slide6 from '../assets/slide6.png';





export default function Slide() {
    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false
    };
    return (
        <Slider {...settings}>
            <img src={slide1} alt='slide' className="w-1/2 p-3"></img>
            <img src={slide2} alt='slide' className="w-1/2 p-3"></img>
            <img src={slide3} alt='slide' className="w-1/2 p-3"></img>
            <img src={slide4} alt='slide' className="w-1/2 p-3"></img>
            <img src={slide5} alt='slide' className="w-1/2 p-3"></img>
            <img src={slide6} alt='slide' className="w-1/2 p-3"></img>
        </Slider>
    );
}