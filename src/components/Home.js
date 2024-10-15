import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import protein_couch from '../assets/protein_couch.png';
import protein from '../assets/protein.png';
import mark from '../assets/mark.png';
import join from '../assets/join.png';
import top from '../assets/top.gif';
import why1 from '../assets/why1.png';
import why2 from '../assets/why2.png';
import why3 from '../assets/why3.png';
import why4 from '../assets/why4.png';
import why5 from '../assets/why5.png';
import why6 from '../assets/why6.png';
import wave from '../assets/wave.svg';
import wave1 from '../assets/wave1.png';
import lock from '../assets/lock.png';
import dumbell1 from '../assets/dumbell1.png';
import dumbell2 from '../assets/dumbell2.png';
import side_1 from '../assets/side_1.png';
import side_2 from '../assets/side_2.png';
import story from '../assets/story.png';
import chart from '../assets/chart.png';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import tick from '../assets/tick.png';
import copy from '../assets/copy.png';
import bubbles from '../assets/bubbles.png';
import dumbell3 from '../assets/dumbell3.png';
import token1 from '../assets/token1.png';
import gym from '../assets/gym.png';
import window from '../assets/window.png';
import weight from '../assets/weight.png';
import clock from '../assets/clock.svg';
import clock1 from '../assets/clock1.png';
import video from '../assets/video.png';
import Accordion from './Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Steps from './Steps';
import Slide from './Slide';


export default function Home() {

    useEffect(() => {
        Aos.init({
            duration: 600,
            once: false,
            easing: 'ease',
            delay: 350
        });
        Aos.refresh();
    }, [])

    const [copySuccess, setCopySuccess] = useState('');

    const copyToClipBoard = async copyMe => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const accordionData = [
        {
            title: 'How do I buy $PUMP?',
            content: `You can purchase $PUMP on leading decentralized exchanges (DEXs) that
                       support Ethereum tokens. Ensure you have a compatible wallet and some
                       Ethereum (ETH) to cover transaction fees.`
        },
        {
            title: 'What can I use $PUMP for?',
            content: `$PUMP enables seamless transactions on both decentralized and centralized
                      exchanges, easily converting into popular cryptocurrencies. It also supports
                      fitness-related initiatives and partnerships.`
        },
        {
            title: 'How does $PUMP support the fitness community?',
            content: `Partnering with renowned global fitness brands, $PUMP gains market credibility.
                      As it grows in popularity, $PUMP will also support smaller fitness brands, boosting
                      their visibility with community involvement. Additionally, $PUMP will promote
                      fitness culture through these partnerships.`
        },
        {
            title: 'What makes the Ethereum blockchain special for $PUMP?',
            content: `The Ethereum blockchain is known for its high-performance capabilities, offering
                       fast transaction speeds and low fees. This ensures a seamless and enjoyable user
                       experience for all $PUMP holders.`
        },
        {
            title: 'What are the future plans for $PUMP?',
            content: `$PUMP plans to build a loyal community through strategic planning and
                      transparency, leveraging this strength for advantageous brand`
        }
    ];

    const items = [
        { title: 'Item 1', content: 'Content for item 1' },
        { title: 'Item 2', content: 'Content for item 2' },
        { title: 'Item 3', content: 'Content for item 3' },
    ];

    return (
        <div className="font-sniglet overflow-hidden text-black-100">

            {/* top section */}

            <div className='pt-2 pb-1 bg-blue-50 text-white-100 font-wedges'>
                <marquee scrollamount="10" direction="right">
                    <div className=' flex items-center justify-between'>
                        <p className='md:text-2xl text-xl'>$PUMP FOR CRYPTO GAINS</p>
                        <p className='md:text-2xl text-xl'>$PUMP FOR CRYPTO GAINS</p>
                        <p className='md:text-2xl text-xl'>$PUMP FOR CRYPTO GAINS</p>
                    </div>
                </marquee>
            </div>

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>

                    <div className='py-5'>
                        <Menu />
                    </div>

                    <div className="lg:flex block justify-center items-start pb-8 lg:space-y-0 space-y-6">

                        <div className='text-center -rotate-30 lg:w-1/2'>
                            <div className='md:text-8xl text-6xl text-center text-blue-50 font-wedges md:space-y-8 space-y-6 lg:mt-32 text-outline text-outline'>
                                <h1 className=''>
                                    <span className='text-yellow-100'>$</span>PUMP
                                </h1>
                                <h2 className='md:text-8xl text-6xl'>
                                    COIN
                                </h2>
                            </div>

                            <div className='space-y-2 mt-2 text-shine uppercase'>
                                <p className='md:text-3xl text-2xl outline-2 outline-white-100'>
                                    Pump your
                                    portfolio
                                </p>

                                <p className='md:text-3xl text-2xl outline-2 outline-white-100'>
                                    with
                                    $PUMP
                                </p>
                            </div>

                            <div className='flex items-center justify-center gap-6 mt-5 '>
                                <a href='https://x.com/pumpbysol'>
                                    <button className='bg-blue-200 rounded-full py-2.5 px-4 hover:bg-blue-50 duration-150 hover:scale-110 shadow-btn1 w-24 border-4 border-yellow-100 hover:border-black-100'>
                                        <svg className='block mx-auto' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><path fill="#fff" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z" /></svg>
                                    </button>
                                </a>

                                <a href='https://t.me/pumpbysol'>
                                    <button className='bg-blue-200 rounded-full py-2.5 px-4 hover:bg-blue-50 duration-150 hover:scale-110 shadow-btn1 w-24 border-4 border-yellow-100 hover:border-black-100'>
                                        <svg className='block mx-auto' xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" viewBox="0 0 24 24"><g fill="#fff" fillRule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="#fff" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z" /></g></svg>
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div>
                            <img src={top} alt='top' className='lg:w-10/12 flex mx-auto'></img>
                        </div>

                    </div>
                </div>
            </div>

            {/* get you daily protein section */}

            <img src={wave} alt="Logo" className='left-0 right-0 absolute w-full xl:-translate-y-32 lg:-translate-y-28 md:-translate-y-16 -translate-y-8' />

            <div className="lg:px-20 px-5 bg-blue-25 relative z-20 -mt-2">
                <div className='container mx-auto'>
                    <div className="lg:pb-20 py-6">

                        <div className='flex justify-between items-end -translate-y-6'>
                            <img src={side_1} alt='side' className='md:w-56 w-28 float'></img>
                            <img src={side_2} alt='side' className='md:w-56 w-24 float'></img>
                        </div>

                        <div className='lg:flex justify-center gap-16 items-center md:mb-24 mb-12 lg:space-y-0 space-y-8'>

                            <div className=''>
                                <h2 data-aos="fade-right" className='md:text-6xl text-4xl text-center text-white-100 font-wedges md:leading-relaxed lg:pt-0 pt-8 text-outline lg:block hidden'>
                                    Get <br></br> your <span className='text-yellow-100'>daily</span><br></br>
                                    <span className='text-yellow-100'>$</span>PUMP <br></br> in <span className='text-yellow-100'>one <br></br>click</span>
                                </h2>

                                <h2 data-aos="fade-right" className='md:text-6xl text-4xl text-center text-white-100 font-wedges md:leading-relaxed lg:pt-0 pt-8 text-outline lg:hidden block'>
                                    Get your <span className='text-yellow-100'>daily</span><br></br>
                                    <span className='text-yellow-100'>$</span>PUMP in <span className='text-yellow-100'>one click</span>
                                </h2>
                            </div>

                            <div data-aos="fade-left" className='lg:w-1/3'>
                                <iframe title='wallet' src="https://jup.ag/swap/SOL-USDC" height="550" scrolling="no" className=' rounded-xl border-4 border-white-100 flex mx-auto w-full'></iframe>
                            </div>
                        </div>

                        <div className='lg:flex justify-center items-start lg:space-y-0 space-y-8 lg:py-20 pt-6'>
                            <div className=''>

                                <h2 data-aos="fade-right" className='md:text-6xl text-4xl text-center text-white-100 font-wedges md:leading-relaxed lg:pt-0 pb-8 text-outline'>
                                    Who is   <span className='text-yellow-100'>$PUMP?</span>
                                </h2>

                                <img data-aos="zoom-in" src={story} alt='story' className='lg:w-9/12 block mx-auto rounded-md'></img>
                            </div>

                            <div data-aos="fade-left" className='lg:w-1/2 text-white-100'>

                                <img src={weight} alt='story' className='md:w-56 w-24 lg:-mt-12'></img>

                                <p className=''>
                                    $PUMP is the secret force behind the rise of all those famous dog and cat memecoins you know today. While Doge, Shiba, Neiro, and the rest were grabbing the headlines, it was $PUMP who trained them into shape, pushing them through late-night sessions in a hidden dojo in the mountains of Kyoto. Every green candle, every pump—$PUMP was there, building their strength and turning them into the market movers they are today.
                                </p>

                                <p className='mt-6'>
                                    Now, it’s time for $PUMP to step into the spotlight. The days of working behind the scenes are over. $PUMP isn’t just a token; it’s the trainer of the market, ready to flex for itself. Built on Solana, $PUMP is here to show that true gains come from hard work, discipline, and a relentless drive to pump the charts.
                                </p>

                                <p className='mt-6'>
                                    The world wondered why those dog and cat coins kept pumping—now they’ll know the truth. It’s time to reveal the trainer, the legend, the one who lifts markets and builds memes into muscle: $PUMP. Join the movement and let’s show everyone how real pumps are made.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div id='explore' className="lg:pb-16 py-6">

                        <h3 data-aos="fade-up" className='md:text-6xl text-4xl text-center text-white-100 font-wedges text-outline'>
                            GET STARTED WITH <span className='text-yellow-100'>$</span>PUMP
                        </h3>

                        <div className='md:pt-20 pt-8'>

                            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center gap-3'>

                                <div data-aos="fade-right" className='lg:col-span-2 py-3 px-12 bg-blue-50 border-2 border-black-100 rounded-2xl text-white-100'>
                                    <p className='text-center md:text-3xl text-xl lg:mt-12'>
                                        Use your Phantom wallet and connect to Raydium or Jupiter to buy <span className='text-yellow-100'>$</span>PUMP
                                    </p>
                                </div>

                                <div data-aos="fade-left" className='lg:col-span-1 py-4 rounded-2xl px-12 bg-white-100 border-2 border-black-100 text-center text-blue-100 space-y-3'>
                                    <p className='font-wedges text-xl'>Smart contract address:</p>
                                    <p>
                                        ED5wbeyAYtLM4WRGnohP
                                        xJEwniaikEFioVmJyZH6K31m
                                    </p>

                                    <div className="">
                                        <button onClick={() => copyToClipBoard('ED5wbeyAYtLM4WRGnohPxJEwniaikEFioVmJyZH6K31m')} className='bg-blue-200 rounded-full py-2 px-6 hover:bg-blue-200 shadow-btn border-4 border-yellow-100 hover:border-black-100 text-white-100 hover:text-yellow-100'>
                                            <i className='fa fa-copy text-3xl'></i>
                                        </button>

                                        <span className="text-black-100 absolute duration-300 ml-2 translate-y-4 text-sm">
                                            {copySuccess}
                                        </span>
                                    </div>
                                </div>

                            </div>

                            <div className='grid lg:grid-cols-3 grid-cols-1 justify-center gap-3 text-center mt-3'>

                                <div data-aos="fade-right" className='border-2 border-black-100 col-span-1 bg-white-50 rounded-2xl font-lilita'>
                                    <p className='text-2xl my-6'>Track $PUMP CHART:</p>

                                    <div className='space-y-6 block'>

                                        <div>
                                            <button className='bg-blue-200 rounded-full py-2 px-6 text-white-100 hover:text-yellow-100 duration-150 hover:scale-110 shadow-btn border-4 border-yellow-100 hover:border-black-100'>
                                                <a href='/'>
                                                    DEXTOOLS
                                                </a>
                                            </button>
                                        </div>

                                        <button className='bg-blue-200 rounded-full py-2 px-6 text-white-100 hover:text-yellow-100 duration-150 hover:scale-110 shadow-btn border-4 border-yellow-100 hover:border-black-100'>
                                            <a href='/'>
                                                DEXSCREENER
                                            </a>
                                        </button>

                                        <img src={chart} alt='' className='flex mx-auto rounded-b-xl pt-6 w-9/12'></img>
                                    </div>

                                </div>

                                <div data-aos="fade-left" className='lg:col-span-2 border-2 border-black-100 bg-white-200 rounded-2xl'>
                                    <Steps />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <img src={wave} alt="Logo" className='left-0 right-0 absolute w-full -translate-y-1 rotate-180' />

            {/* why protein section */}

            <div id='benefits' className="bg-white-200 text-white-100 why-bottom">

                <div className="lg:pt-48 lg:pb-24 pt-12 pb-8 lg:px-36 px-5 container mx-auto">
                    {/* <div className='text-center lg:flex flex-row-reverse items-center justify-center mx-auto bg-blue-50 p-3 border-2 border-black-100 rounded-3xl lg:space-y-0 space-y-6'>
                        <div className='lg:w-6/12'>
                            <img data-aos="zoom-in" src={protein} alt="protein" className='' />
                        </div>

                        <div className='lg:w-6/12 lg:space-y-8 space-y-6'>
                            <h3 className='md:text-7xl sm:text-5xl text-4xl font-lilita text-outline'>
                                WHY $PUMP?
                            </h3>

                            <p data-aos="fade-up" className='md:text-2xl text-lg leading-relaxed font-fredoka font-semibold md:px-16 px-6'>
                                $PUMP is the overconfident,
                                muscle-bound chart-mover whoflexes his way through the crypto
                                world. Sporting a purple bandana with his name emblazoned across it and a belt featuring the Solana
                                logo, $PUMP embodies pure energy and power. He’s not just
                                here to watch the market—he’s here to make the market move.  Whether it’s pulling off crazy stunts  or lifting entire resistance lines,  $PUMP is on a mission to send every chart to new all-time highs Backed by his loyal $Pump Bros, $PUMP does whatever it takes to drive the charts up, one flex at a time.
                            </p>
                        </div>
                    </div> */}

                    <h3 className='md:text-7xl sm:text-5xl text-4xl font-lilita text-outline text-center pt-8 uppercase'>
                        Pumpementals
                    </h3>

                    <div className='md:my-20 my-8'>
                        <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 items-top justify-center gap-5'>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why1} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 text-outline'>
                                        CEX LISTINGS:
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight'>
                                        We've secured pre-agreed listings on
                                        multiple CEXes to ensure $PUMP is
                                        tradable right on time.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why2} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 text-outline'>
                                        Our Unique PUMP NFTs
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight'>
                                        Our exclusive $PUMP-themed
                                        NFTs are more than just
                                        collectibles; they’re your gateway
                                        to unique perks within the $PUMP
                                        ecosystem. Each NFT embodies
                                        the power and momentum of the
                                        $PUMP community, serving as a
                                        symbol of your commitment to
                                        pushing the market higher. These
                                        NFTs aren’t just digital assets—
                                        they’re badges of honor for those
                                        who believe in $PUMP's ability to
                                        send the charts soaring!
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why3} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 text-outline'>
                                        PLAY 2 EARN
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight'>
                                        Challenge your skills and earn
                                        rewards with $PUMP mini-games.
                                        These games are designed to be
                                        engaging and rewarding, perfect
                                        for both casual and competitive
                                        players.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why4} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 text-outline'>
                                        PUMP 2 EARN
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight'>
                                        Get rewarded for helping boost the
                                        $PUMP ecosystem! Similar to
                                        social mining, every action you
                                        take—whether hyping up the
                                        charts, engaging in the community,
                                        or spreading the word on social
                                        media—earns you $PUMP tokens.
                                        The more you contribute, the
                                        higher the charts rise, and the
                                        more rewards you collect. Flex
                                        your market influence, $PUMP up
                                        the excitement, and watch those
                                        green candles soar. In the $PUMP
                                        world, every contribution fuels the
                                        movement!
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why5} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita text-outline'>
                                        GET REWARDED
                                    </h5>
                                    <h6 className='md:text-2xl text-xl font-lilita font-medium mb-5 text-outline'>
                                        Get Rewarded for Sharing the
                                        $PUMP
                                    </h6>
                                    <p className='font-fredoka font-semibold leading-tight'>
                                        Partner with $PUMP and help drive
                                        the excitement by sharing your
                                        journey with the community. Post
                                        about your experience with
                                        $PUMP on social media, hype up
                                        your followers, and earn $PUMP
                                        tokens for every update. This
                                        initiative strengthens the $PUMP
                                        movement and boosts your
                                        influence in the market—inside and
                                        outside the crypto world. Flex your
                                        impact, share the gains, and watch
                                        your rewards grow!

                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why6} alt='' className='rounded-3xl h-72 object-cover w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 text-outline'>
                                        GYM MERCH
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight'>
                                        Flex in the market with our
                                        exclusive $PUMP-themed merch
                                        that’s as strong as your portfolio!
                                        Rock our epic tees and beastmode gear, all emblazoned with
                                        $PUMP swag to power both your
                                        trades and your market moves. Get
                                        kitted, spread the hype, and let
                                        every $PUMP in the market feel
                                        like a bull run. It's not just fashion
                                        —it's a lifestyle for those who live
                                        to $PUMP!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* roadmap section */}

            <img src={bubbles} className='w-full'></img>

            <div className="">
                <div className="bg-roadmap lg:-mt-32 md:-mt-12 -mt-8">
                    <div className='lg:px-20 px-5 container mx-auto lg:pt-20 pt-6'>

                        <div className='lg:flex items-start justify-between lg:space-y-0 space-y-8'>

                            <div data-aos="fade-in" className='flex flex-col items-center lg:gap-y-12 gap-y-3 lg:w-3/12'>
                                <button className='bg-blue-100 border-4 border-yellow-50 py-3 px-12 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:-rotate-12'>
                                    "Whales might splash, but
                                    $PUMP’s out here bench-pressing
                                    the entire market!”
                                </button>

                                <button className='bg-blue-100 border-4 border-yellow-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:rotate-12 lg:ml-32'>
                                    $PUMP for Crypto Gains
                                </button>

                                <button className='bg-blue-100 border-4 border-yellow-50 py-3 px-8 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:-rotate-12'>
                                    $PUMP YOUR PORTFOLIO
                                </button>
                            </div>

                            <div data-aos="fade-up" className='lg:w-6/12'>
                                <img src={protein_couch} alt="Logo" className='flex mx-auto' />
                            </div>

                            <div data-aos="fade-in" className='flex flex-col items-center lg:gap-y-12 gap-y-3 lg:w-3/12'>
                                <button className='bg-blue-100 border-4 border-yellow-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight rotate-30 lg:-translate-x-12'>
                                    Don’t wait for the dip—#PUMP’s
                                    already out here benching the
                                    charts!
                                </button>

                                <button className='bg-blue-100 border-4 border-yellow-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:rotate-6'>
                                    Lifting $PUMP to the Moon
                                </button>

                                <button className='bg-blue-100 border-4 border-yellow-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:rotate-12'>
                                    Bear the weight, enjoy the $pump
                                </button>
                            </div>
                        </div>

                        <div id='roadmap' data-aos="zoom-in" className='text-center font-wedges text-white-100 lg:pt-32 pt-12 text-outline flex items-center justify-center'>
                            <div>
                                <h3 className='md:text-8xl text-5xl'>
                                    <span className='text-yellow-100'>$</span>PUMP
                                </h3>
                                <h3 className='md:text-8xl text-5xl'>
                                    Roadmap
                                </h3>
                            </div>

                            <img src={clock1} alt='' className='md:w-48 w-20'></img>
                        </div>

                        <div className="lg:flex block justify-center items-start gap-x-12 lg:pt-32 pt-12 pb-20 md:space-y-0 space-y-8">

                            <div className="lg:w-1/2 w-full space-y-12 flex flex-col justify-center items-center mx-auto">

                                <div data-aos="fade-up" className='text-white-100 space-y-6'>

                                    <div className='md:text-4xl text-3xl font-wedges text-center space-y-4 text-outline'>
                                        <h3 className=''>
                                            FOUNDATION PHASE
                                        </h3>
                                        <p className='text-yellow-100'>(PRE-LAUNCH)</p>
                                    </div>

                                    <div className='border-8 border-yellow-100 rounded-3xl p-5 bg-blue-200 md:w-96'>

                                        <ul className='list-disc pl-4'>
                                            <li>Presale: Launch $PUMP token with
                                                heavy presale limits (100 sol per
                                                wallet)</li>
                                            <li>List $PUMP on DEXes</li>
                                            <li>Huge Global Marketing Campaign</li>
                                            <li>CMC & CoinGecko Listing</li>
                                            <li>Onboarding KOLs (Key Opinion Leaders):
                                                Collaborate with influential figures in the
                                                fitness and crypto spaces.</li>
                                            <li>Audit by SolidProof</li>
                                        </ul>
                                    </div>
                                </div>

                                <div data-aos="fade-up" data-aos-delay="350" className='text-white-100 space-y-6'>
                                    <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 text-outline'>
                                        <h3 className=''>
                                            BULKING PHASE
                                        </h3>
                                        <p className='text-yellow-100 leading-snug'>
                                            (GROWTH AND<br></br>
                                            DEVELOPMENT)
                                        </p>
                                    </div>

                                    <div className='border-8 border-yellow-100 rounded-3xl p-5 bg-blue-200 md:w-96'>

                                        <ul className='list-disc pl-4'>
                                            <li>CEX Listings: List on mid-tier centralized exchanges to increase accessibility and
                                                liquidity.</li>
                                            <li>$PUMP Mini Game: Engaging game
                                                that rewards players with $PUMP
                                                tokens.</li>
                                            <li>Huge Global Marketing Campaign</li>
                                            <li>CMC & CoinGecko Listing</li>
                                            <li>NFT Collection</li>
                                        </ul>
                                    </div>
                                </div>

                                <div data-aos="fade-up" className='text-white-100 space-y-6'>

                                    <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 text-outline'>
                                        <h3 className=''>
                                            MR. OLYMPIA PHASE
                                        </h3>
                                        <p className='text-yellow-100'>(ULTIMATE DOMINATION)</p>
                                    </div>

                                    <div className='border-8 border-yellow-100 rounded-3xl p-6 bg-black-100 box-shine'>

                                        <img src={lock} alt='lock' className='flex mx-auto mb-5 w-20'></img>

                                        <h3 className='md:text-4xl text-3xl font-wedges text-center lg:leading-snug text-yellow-100 text-outline'>
                                            WILL BE UNLOCKED<br></br>
                                            AT 50M CAP
                                        </h3>
                                    </div>
                                </div>

                            </div>

                            <div className="lg:w-1/2 w-full space-y-16 flex flex-col justify-center items-center mx-auto">

                                <div data-aos="fade-up" data-aos-delay="350" className='text-white-100 space-y-6'>

                                    <img src={dumbell1} alt='dumbell' className='flex mx-auto w-1/2'></img>

                                    <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 text-outline'>
                                        <h3>  CUTTING PHASE</h3>
                                        <p className='text-yellow-100 leading-snug'>(OPTIMISATION AND<br></br>
                                            REFINEMENT)</p>
                                    </div>

                                    <div className='border-8 border-yellow-100 rounded-3xl p-5 bg-blue-200 md:w-96'>

                                        <ul className='list-disc pl-4'>
                                            <li>Tier-1 CEX Listings: Secure listings on
                                                Tier-1 centralized exchanges</li>
                                            <li>Huge Partnerships: Partner with
                                                major platforms and influencers to
                                                expand reach
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                                <div data-aos="fade-up" data-aos-delay="350" className='text-white-100 space-y-6'>

                                    <img src={dumbell2} alt='dumbell' className='flex mx-auto w-1/2'></img>

                                    <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 text-outline'>
                                        <h3>SHREDDING PHASE</h3>
                                        <p className='text-yellow-100 leading-snug'>(MARKET PENETRATION,<br></br>
                                            AND EXPANSION)</p>
                                    </div>

                                    <div className='border-8 border-yellow-100 rounded-3xl p-5 bg-blue-200 md:w-96 flex mx-auto'>

                                        <ul className='list-disc pl-4'>
                                            <li>$PUMP App Launch (Launch a
                                                comprehensive app with all features,
                                                including fitness tracking, rewards, and
                                                community engagement.)</li>
                                            <li>Airdrop Campaign: Conduct airdrop
                                                campaigns to reward early adopters and
                                                attract new users.</li>
                                            <li>Global Adoption: Drive global mass
                                                adoption of $PUMP</li>
                                            <li>Influencers: Engage the biggest world
                                                influencers to promote $PUMP</li>
                                        </ul>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            {/* tokenomics section */}

            <img src={cloud1} alt="Logo" className='left-0 absolute md:-mt-52 -mt-20 lg:block hidden' />
            <img src={cloud2} alt="Logo" className='right-0 absolute md:-mt-52 -mt-20 lg:block hidden' />


            <div id='tokenomics' className="bg-token -mt-4">
                <div className='lg:pr-20 px-5 lg:py-0 py-20 container mx-auto'>
                    <div className='lg:flex justify-between items-start lg:translate-y-44'>

                        <div className='lg:w-1/2 lg:flex hidden justify-between items-start'>
                            <div className=''>
                                <img src={window} alt='' className='w-full'></img>
                            </div>
                            <div className=''>
                                <img src={clock} alt='' className='w-40'></img>
                            </div>
                        </div>

                        <div className='lg:w-1/2 text-center'>
                            <h3 className='md:text-7xl text-4xl font-wedges text-yellow-100 text-outline'>
                                PUMPENOMICS
                            </h3>

                            <div className='space-y-8 md:mt-8 mt-5'>
                                <p className='md:text-6xl text-4xl font-wedges text-white-100 text-outline'>
                                    1,000,000,000
                                </p>
                                <p className='md:text-4xl text-2xl font-wedges text-black-100 '>
                                    Total Supply:
                                </p>
                            </div>

                            <div className='flex items-center justify-center mt-12 md:gap-x-16 gap-x-8'>
                                <div className='md:space-y-8 space-y-5'>
                                    <p className='md:text-5xl text-3xl font-wedges text-white-100 text-outline'>
                                        $PUMP
                                    </p>
                                    <p className='md:text-3xl text-xl font-wedges text-black-100 '>
                                        Token Ticker
                                    </p>
                                </div>

                                <div className='md:space-y-8 space-y-5'>
                                    <p className='md:text-5xl text-3xl font-wedges text-white-100 text-outline'>
                                        Solana
                                    </p>
                                    <p className='md:text-3xl text-xl font-wedges text-black-100 '>
                                        Network
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex hidden justify-between gap-x-12 items-end -mt-20 relative z-20'>
                        <div className='w-6/12'>
                            <img src={token1} alt='' className=''></img>
                        </div>
                        <div className='w-3/12 flex flex-col mx-auto justify-center items-center'>
                            <img src={dumbell3} alt=''></img>
                            <img src={dumbell1} alt='' className='w-28'></img>
                        </div>
                        <div className='w-3/12'>
                            <img src={gym} alt='' className='w-full'></img>
                        </div>
                    </div>
                </div>
            </div>

            <img src={wave1} alt="Logo" className='left-0 right-0 absolute w-full -mt-1' />
            <img src={tick} alt="Logo" className='absolute right-0 md:mr-44 -mt-12 md:w-64 w-32' />

            {/* join protein section */}

            <div id='join' className="">
                <div className='lg:px-20 px-5 lg:pt-52 pt-20 lg:pb-20 pb-12 container mx-auto'>

                    <div className='lg:flex items-start justify-between'>

                        <div className='md:space-y-12 space-y-6 lg:w-1/2'>
                            <h3 className='md:text-8xl text-4xl font-wedges text-blue-50 text-outline'>
                                JOIN <span className='text-yellow-100'>$</span>PUMP
                                NOW
                            </h3>

                            <div className='flex flex-wrap items-center gap-3 font-wedges'>
                                <a href=' https://t.me/pumpbysol'>
                                    <button className='shadow-btn hover:bg-white-100 bg-blue-200 border-4 border-yellow-50 hover:border-blue-200 py-2 px-4 text-white-100 hover:text-yellow-100 rounded-2xl md:tracking-wide md:text-base text-sm'>
                                        Telegram
                                    </button>
                                </a>
                                <button className='shadow-btn hover:bg-white-100 bg-blue-200 border-4 border-yellow-50 hover:border-blue-200 py-2 px-4 text-white-100 hover:text-yellow-100 rounded-2xl tracking-wide'>
                                    BUY $PUMP
                                </button>
                                <a href='https://x.com/pumpbysol'>
                                    <button className='shadow-btn hover:bg-white-100 bg-blue-200 border-4 border-yellow-50 hover:border-blue-200 py-2 px-4 text-white-100 hover:text-yellow-100 rounded-2xl md:tracking-wide md:text-base text-sm'>
                                        X | TWITTER
                                    </button>
                                </a>
                            </div>

                            <p>
                                RISK WARNING: Trading Cryptocurrencies is highly speculative, carries a level of risk and may not be suitable for all investors. You
                                may lose some or all of your invested capital, therefore you should not speculate with capital that you cannot afford to lose. The
                                content on this site should not be considered investment advice. Investing is speculative. When investing your capital is at risk.
                            </p>
                        </div>

                        <div className='lg:w-1/2'>
                            <img src={join} alt='' className='relative z-20'></img>
                        </div>
                    </div>

                    <div className='pt-6'>
                        <Slide />
                    </div>

                    <div>
                        <img src={video} alt='' className='flex mx-auto md:mt-12 mt-8 lg:w-8/12'></img>
                    </div>

                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="bg-faq">

                <div className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='lg:w-8/12 flex flex-col mx-auto'>
                        <div className='md:flex items-center justify-center'>
                            <h3 data-aos="fade-up" className='md:text-8xl text-4xl font-wedges text-blue-50 uppercase text-center text-outline'>
                                need some answers
                            </h3>

                            <img src={mark} alt="Logo" className='md:block hidden animate-bounce' />
                        </div>

                        <div className="accordion py-8">
                            {accordionData.map(({ title, content }) => (
                                <Accordion title={title} content={content} />
                            ))}
                        </div>
                    </div>

                </div>

                <Footer />
            </div>

        </div>
    )
}
