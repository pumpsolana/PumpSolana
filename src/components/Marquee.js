import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";





export default function Top() {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        pauseOnHover: false,
        cssEase: 'linear',
        slidesToScroll: -1,
        arrows: false,

        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                centerMode: true
            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }]
    };
    return (
        <Slider {...settings}>
            <p className='md:text-2xl text-xl'>$PUMP FOR CRYPTO GAINS</p>
            <p className='md:text-2xl text-xl'>$PUMP FOR CRYPTO GAINS</p>
            <p className='md:text-2xl text-xl'>$PUMP FOR CRYPTO GAINS</p>
        </Slider>
    );
}