import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../assets/1.png';
import slide2 from '../assets/2.png';
import slide3 from '../assets/3.png';
import slide4 from '../assets/4.png';
import slide5 from '../assets/5.png';
import slide6 from '../assets/6.png';
import slide7 from '../assets/7.png';
import slide8 from '../assets/8.png';
import slide9 from '../assets/9.png';
import slide10 from '../assets/10.png';
import slide11 from '../assets/11.png';
import slide12 from '../assets/12.png';
import slide13 from '../assets/13.png';
import slide14 from '../assets/14.png';
import slide15 from '../assets/15.png';







export default function Slide() {
    var settings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        pauseOnHover: false,
        cssEase: 'linear',
        arrows: false,

        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        }]
    };
    return (
        <Slider {...settings}>
            <div className="p-2">
                <img src={slide1} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide2} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide3} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide4} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide5} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide6} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide7} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide8} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide9} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide10} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide11} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide12} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide13} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide14} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

            <div className="p-2">
                <img src={slide15} alt='slide' className="border-4 border-yellow-100"></img>
            </div>

        </Slider>
    );
}