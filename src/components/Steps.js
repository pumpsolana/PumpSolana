import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import step4 from '../assets/step4.png';
import solana from '../assets/solana.png';
import dog from '../assets/dog.png';
import ghost from '../assets/ghost.png';
import step3 from '../assets/step3.png';





export default function Steps() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 300,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <Slider {...settings}>

            <div className="text-center font-wedges text-black-100 space-y-8 p-6 my-auto">

                <h3 className="md:text-5xl text-2xl text-blue-25 shadow-black">Step 1</h3>
                <h3 className="md:text-4xl text-2xl mt-3">Get some solana</h3>
                <div className="lg:block hidden">
                    <img src={solana} alt="solana" className="lg:ml-96 w-12"></img>
                    <img src={solana} alt="solana" className="w-28 lg:-translate-y-8 -rotate-30 absolute"></img>
                </div>
                <p className="md:text-3xl text-xl">
                    You can get some $sol on<br></br>
                    exchanges or via moonpay
                </p>

                <div className="lg:block hidden">
                    <img src={solana} alt="solana" className="w-20 lg:float-right lg:-translate-y-12 mr-12"></img>
                </div>
            </div>

            <div className="text-center font-wedges text-black-100 p-6 lg:space-y-12 space-y-6 my-auto">

                <h3 className="md:text-5xl text-2xl text-blue-25 shadow-black">Step 2</h3>
                <div className="lg:block hidden">
                    <img src={dog} alt="" className="w-28 float-right"></img>
                </div>
                <h3 className="md:text-4xl text-2xl mt-3 leading-relaxed">Send it to your<br></br>
                    wallet</h3>
                <div className="lg:block hidden">
                    <img src={ghost} alt="" className="w-32 translate-y-16 absolute"></img>
                </div>
                <p className="md:text-3xl text-xl mt-28">
                    Download phantom or use a sniper
                    bot like Bonkbot
                </p>

            </div>

            <div className="text-center font-wedges text-black-100 p-6 lg:space-y-12 space-y-6 my-auto">

                <h3 className="md:text-5xl text-2xl text-blue-25 shadow-black">Step 3</h3>
                <h3 className="md:text-4xl text-2xl leading-relaxed">Swap to $protien</h3>
                <div className="lg:block hidden">
                    <img src={step3} alt="" className="w-28 float-right lg:block hidden"></img>
                </div>
                <p className="md:text-3xl text-xl">
                    Go to raydium or jupiter<br></br>
                    Paste $protien contract and do the
                    transaction
                </p>

            </div>

            <div className="text-center font-wedges text-black-100 space-y-5 p-6 my-auto">

                <h3 className="md:text-5xl text-2xl text-blue-25 shadow-black">Step 4</h3>
                <h3 className="md:text-4xl text-2xl leading-relaxed">You ready for some<br></br>
                    gains</h3>
                <div className="lg:block hidden">
                    <img src={step4} alt="" className="flex mx-auto"></img>
                </div>
                <p className="md:text-3xl text-xl">
                    Now that you grabbed some
                    $protien. Lets work our gains
                </p>

            </div>
        </Slider>
    );
}