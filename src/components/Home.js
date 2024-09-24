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
import lock from '../assets/lock.svg';
import dumbell1 from '../assets/dumbell1.png';
import dumbell2 from '../assets/dumbell2.png';
import side_1 from '../assets/side_1.png';
import side_2 from '../assets/side_2.png';
import join_right from '../assets/join_right.png';
import join1 from '../assets/join1.png';
import join2 from '../assets/join2.png';
import join3 from '../assets/join3.png';
import join4 from '../assets/join4.png';
import join5 from '../assets/join5.png';
import chart from '../assets/chart.png';
import cloud1 from '../assets/cloud1.png';
import cloud2 from '../assets/cloud2.png';
import tick from '../assets/tick.png';
import copy from '../assets/copy.png';
import video from '../assets/video.png';
import Accordion from './Accordion';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Steps from './Steps';


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
            title: 'How do I buy $PROTEIN?',
            content: `lorem ipsum dolor`
        },
        {
            title: 'What can I use $PROTEIN for?',
            content: `lorem ipsum dolor`
        },
        {
            title: 'How does $PROTEIN support the fitness community?',
            content: `lorem ipsum dolor`
        },
        {
            title: 'What makes the Solana blockchain special for $PROTEIN?',
            content: `lorem ipsum dolor`
        },
        {
            title: 'What are the future plans for $PROTEIN?',
            content: `lorem ipsum dolor`
        }
    ];

    return (
        <div className="font-sniglet overflow-hidden text-black-100">

            {/* top section */}

            <div className='pt-2 pb-1 bg-blue-50 text-white-100 font-wedges'>
                <marquee scrollamount="10" direction="right">
                    <div className=' flex items-center justify-between'>
                        <p className='md:text-2xl text-xl'>$protein FOR CRYPTO GAINS</p>
                        <p className='md:text-2xl text-xl'>$protein FOR CRYPTO GAINS</p>
                        <p className='md:text-2xl text-xl'>$protein FOR CRYPTO GAINS</p>
                    </div>
                </marquee>

            </div>

            <div className="lg:px-20 px-5 bg-top">
                <div className='container mx-auto'>

                    <div className='py-5'>
                        <Menu />
                    </div>

                    <div className="lg:flex block justify-between items-start pb-8 lg:space-y-0 space-y-6">

                        <div className='text-center -rotate-30'>
                            <div className='md:text-8xl text-6xl text-center text-blue-50 font-wedges md:space-y-8 space-y-6 lg:mt-28 shadow-black shadow-black'>
                                <h1 className=''>
                                    <span className='text-yellow-100'>$</span>PROTEIN
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
                                    $protein
                                </p>
                            </div>

                            <div className='flex items-center justify-center gap-6 mt-5 '>
                                <a href='https://x.com/ProteinCoinSol'>
                                    <button className='bg-blue-200 rounded-full py-2 px-6 hover:bg-blue-50 text-white-100 duration-150 hover:scale-125 w-36'>
                                        Twitter
                                    </button>
                                </a>

                                <a href='https://t.me/ProteinPortal'>
                                    <button className='bg-blue-200 rounded-full py-2 px-6 hover:bg-blue-50 text-white-100 duration-150 hover:scale-125 w-36'>
                                        Telegram
                                    </button>
                                </a>
                            </div>

                        </div>

                        <div>
                            <img src={top} alt='top' className='lg:w-9/12 flex mx-auto'></img>
                        </div>

                    </div>
                </div>
            </div>

            {/* get you daily protein section */}

            <img src={wave} alt="Logo" className='left-0 right-0 absolute w-full md:-translate-y-32 -translate-y-8' />

            <div className="lg:px-20 px-5 bg-blue-25 bg-click relative z-20">
                <div className='container mx-auto'>

                    <div className="lg:pb-20 py-6">

                        <div className='flex justify-between items-end'>
                            <img src={side_1} alt='side' className='md:w-56 w-28'></img>
                            <img src={side_2} alt='side' className='md:-mt-24 -mt-12 md:w-48 w-24 float'></img>
                        </div>

                        <h2 data-aos="fade-up" className='md:text-6xl text-4xl text-center text-white-100 font-wedges md:leading-relaxed lg:pt-0 pt-8 shadow-black'>
                            Get your <span className='text-yellow-100'>daily</span><br></br>
                            <span className='text-yellow-100'>$</span>protein in <span className='text-yellow-100'>one click</span>
                        </h2>

                        <div className='mt-12'>
                            <iframe title='wallet' src="https://jup.ag/swap/SOL-USDC" height="550" scrolling="no" className=' rounded-xl border-4 border-white-100 flex mx-auto lg:w-4/12 md:w-6/12 w-full'></iframe>
                        </div>

                    </div>

                </div>

                <div id='explore' className="lg:pb-16 py-6">

                    <h3 data-aos="fade-up" className='md:text-6xl text-4xl text-center text-white-100 font-wedges shadow-black'>
                        GET STARTED WITH <span className='text-yellow-100'>$</span>PROTEIN
                    </h3>

                    <div className='md:pt-20 pt-8'>

                        <div className='grid lg:grid-cols-3 grid-cols-1 justify-center gap-3'>

                            <div data-aos="fade-right" className='lg:col-span-2 py-3 px-12 bg-blue-50 border-2 border-black-100 rounded-2xl text-white-100'>
                                <p className='text-center md:text-3xl text-xl lg:mt-12 shadow-black'>
                                    Use your Phantom wallet and connect to Raydium or Jupiter to buy <span className='text-yellow-100'>$</span>PROTEIN
                                </p>
                            </div>

                            <div data-aos="fade-left" className='lg:col-span-1 py-4 rounded-2xl px-12 bg-white-100 border-2 border-black-100 text-center text-blue-100 space-y-4'>
                                <p className='font-wedges text-2xl'>Smart contract address:</p>
                                <p>
                                    ED5wbeyAYtLM4WRGnohP
                                    xJEwniaikEFioVmJyZH6K31m
                                </p>

                                <div className="">
                                    <button onClick={() => copyToClipBoard('ED5wbeyAYtLM4WRGnohPxJEwniaikEFioVmJyZH6K31m')} className='bg-blue-200 rounded-full py-3 px-7 hover:bg-blue-50 hover:shadow-md hover:shadow-yellow-100'>
                                        <img src={copy} alt='copy' className=''></img>
                                    </button>

                                    <span className="text-black-100 absolute duration-300 ml-2 translate-y-4 text-sm">
                                        {copySuccess}
                                    </span>
                                </div>
                            </div>

                        </div>

                        <div className='grid lg:grid-cols-3 grid-cols-1 justify-center gap-3 text-center mt-3'>

                            <div data-aos="fade-right" className='border-2 border-black-100 col-span-1 bg-white-50 rounded-2xl font-lilita'>
                                <p className='text-2xl my-6'>Track $PROTEIN CHART:</p>

                                <div className='flex flex-col gap-y-6'>
                                    <a href='/'>
                                        <button className='bg-blue-200 rounded-full py-2 px-6 hover:bg-blue-50 text-white-100 duration-150 hover:scale-125'>
                                            DEXTOOLS
                                        </button>
                                    </a>

                                    <a href='/'>
                                        <button className='bg-blue-200 rounded-full py-2 px-6 hover:bg-blue-50 text-white-100 duration-150 hover:scale-125'>
                                            DEXSCREENER
                                        </button>
                                    </a>

                                    <img src={chart} alt='' className='mt-6 w-10/12 flex mx-auto'></img>

                                </div>

                            </div>

                            <div data-aos="fade-left" className='lg:col-span-2 border-2 border-black-100 bg-white-200 rounded-2xl'>
                                <Steps />
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <img src={wave} alt="Logo" className='left-0 right-0 absolute w-full -translate-y-1 rotate-180' />

            {/* why protein section */}

            <div id='benefits' className="bg-white-200 text-white-100 why-bottom">

                <div className="lg:pt-48 lg:pb-24 pt-12 pb-8 lg:px-36 px-5 container mx-auto">
                    <div className='text-center lg:flex flex-row-reverse items-center justify-center mx-auto bg-blue-50 p-3 border-2 border-black-100 rounded-3xl lg:space-y-0 space-y-6'>
                        <div className='lg:w-6/12'>
                            <img data-aos="zoom-in" src={protein} alt="protein" className='' />
                        </div>

                        <div className='lg:w-6/12 lg:space-y-8 space-y-6'>
                            <h3 className='md:text-7xl sm:text-5xl text-4xl font-lilita shadow-black'>
                                WHY $PROTEIN?
                            </h3>

                            <p data-aos="fade-up" className='md:text-2xl text-lg leading-relaxed font-fredoka font-semibold md:px-16 px-6 shadow-sm shadow-black'>
                                $PROTEIN isn't just another meme coin; it's your gym bro in the crypto world, supercharging your wallet gains. This token
                                pumps up your crypto game and flexes on the blockchain, not just as digital cash but as your secret powder for financial gains.
                                Rally your squad and get in on the $PROTEIN action, where gains and memes lift together!
                            </p>
                        </div>
                    </div>

                    <div className='md:my-20 my-8'>
                        <div className='grid md:grid-cols-3 grid-cols-1 md:grid-rows-2 grid-rows-1 items-top justify-center gap-5'>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why1} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 shadow-black'>
                                        CEX LISTINGS:
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight text-shadow'>
                                        We've secured pre-agreed listings on
                                        multiple CEXes to ensure $PROTEIN is
                                        tradable right on time.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why2} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 shadow-black'>
                                        NFT'S
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight text-shadow'>
                                        Our unique, fitness-themed NFTs are more
                                        than collectibles; they're keys to exclusive
                                        ecosystem perks. Each NFT is a symbol of
                                        strength and commitment, serving as a
                                        badge of honor for true $PROTEIN
                                        enthusiasts.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why3} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 shadow-black'>
                                        PLAY 2 EARN
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight text-shadow'>
                                        Challenge your skills and earn rewards
                                        with $PROTEIN mini-games. These games
                                        are designed to be engaging and
                                        rewarding, perfect for both casual and
                                        competitive players.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why4} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 shadow-black'>
                                        FIT 2 EARN
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight text-shadow'>
                                        Stay active and earn $PROTEIN tokens
                                        with our Fit 2 Earn challenges. Whether
                                        hitting the gym or meeting daily step goals,
                                        turn your fitness efforts into tangible
                                        rewards.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why5} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita shadow-black'>
                                        GET REWARDED
                                    </h5>
                                    <h6 className='md:text-2xl text-xl font-lilita font-medium mb-5 shadow-black'>
                                        FOR SHARING YOUR
                                        GAINS
                                    </h6>
                                    <p className='font-fredoka font-semibold leading-tight text-shadow'>
                                        Partner with $PROTEIN and our affiliated
                                        gyms to earn rewards for showcasing your
                                        fitness journey. Post about your workouts
                                        on social media, inspire your followers, and
                                        earn $PROTEIN tokens for each update.
                                        This initiative boosts your motivation and
                                        strengthens our community, enhancing
                                        your gains inside and outside the gym.
                                    </p>
                                </div>
                            </div>

                            <div className='bg-blue-50 p-1 border-2 border-black-100 rounded-3xl text-center duration-150 hover:scale-105'>
                                <img src={why6} alt='' className='w-full'></img>

                                <div className='px-5 py-5'>
                                    <h5 className='md:text-4xl text-2xl font-lilita mb-5 shadow-black'>
                                        GYM MERCH
                                    </h5>
                                    <p className='font-fredoka font-semibold leading-tight text-shadow'>
                                        Flex in the gym with our crypto-themed
                                        gym merch that’s as pumped as your
                                        portfolio! Rock our epic tees and beast-
                                        mode gear, all emblazoned with $PROTEIN
                                        swag to power both your pumps and your
                                        dumps. Get kitted, lift heavy, and let every
                                        rep drop gains like a crypto bull run!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* */}

            <div className="-mt-1 bg-bubbles">

                <div className="py-5 lg:px-20 px-5 container mx-auto">

                    <div className='lg:flex items-start justify-between lg:space-y-0 space-y-8'>

                        <div data-aos="fade-in" className='flex flex-col items-center lg:gap-y-12 gap-y-3 lg:w-3/12'>
                            <button className='bg-blue-100 border-4 border-blue-50 py-3 px-12 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:-rotate-12'>
                                Train like a Whale invest <br></br>
                                like one too with $protein
                            </button>

                            <button className='bg-blue-100 border-4 border-blue-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:rotate-12 lg:ml-32'>
                                $protein for Crypto Gains
                            </button>

                            <button className='bg-blue-100 border-4 border-blue-50 py-3 px-8 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:-rotate-12'>
                                MOON YOUR MUSCLES
                            </button>
                        </div>

                        <div data-aos="fade-up" className='lg:w-6/12'>
                            <img src={protein_couch} alt="Logo" className='flex mx-auto' />
                        </div>

                        <div data-aos="fade-in" className='flex flex-col items-center lg:gap-y-12 gap-y-3 lg:w-3/12'>
                            <button className='bg-blue-100 border-4 border-blue-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight rotate-30 lg:-translate-x-12'>
                                HODL your $protein for massive<br></br>
                                crypt gains
                            </button>

                            <button className='bg-blue-100 border-4 border-blue-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:rotate-6'>
                                Lifting $protein to the Moon
                            </button>

                            <button className='bg-blue-100 border-4 border-blue-50 py-3 px-5 text-white-100 rounded-full font-medium text-sm font-fredoka leading-tight lg:rotate-12'>
                                Bear the weight, enjoy the gains
                            </button>
                        </div>
                    </div>

                </div>

            </div>

            {/* roadmap section */}

            <div id='roadmap' className="bg-roadmap -mt-20">
                <div className='lg:px-20 px-5 container mx-auto'>

                    <div data-aos="zoom-in" className='text-center font-wedges text-white-100 pt-32 shadow-black'>
                        <h3 className='text-10xl'>
                            <span className='text-yellow-100'>$</span>protein
                        </h3>
                        <h3 className='text-10xl'>
                            Roadmap
                        </h3>
                    </div>

                    <div className="lg:flex block justify-center items-start gap-x-12 pt-32 pb-20 md:space-y-0 space-y-8">

                        <div className="lg:w-1/2 w-full space-y-8 flex flex-col justify-center items-center mx-auto">

                            <div className='text-white-100 space-y-8'>

                                <div className='md:text-4xl text-3xl font-wedges text-center space-y-4 shadow-black'>
                                    <h3 className=''>
                                        FOUNDATION PHASE
                                    </h3>
                                    <p className='text-yellow-100'>(PRE-LAUNCH)</p>
                                </div>

                                <div data-aos="slide-up" className='border-8 border-white-100 rounded-3xl p-5 bg-black-100 md:w-96'>

                                    <ul className='list-disc pl-4'>
                                        <li>Presale: Launch $PROTEIN token with
                                            heavy presale limits (100 sol per wallet)</li>
                                        <li>List $PROTEIN on DEXes</li>
                                        <li>Huge Global Marketing Campaign</li>
                                        <li>CMC & CoinGecko Listing</li>
                                        <li>Onboarding KOLs (Key Opinion Leaders):
                                            Collaborate with influential figures in the
                                            fitness and crypto spaces.</li>
                                        <li>Audit by SolidProof</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='text-white-100 space-y-8'>
                                <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 shadow-black'>
                                    <h3 className=''>
                                        BULKING PHASE
                                    </h3>
                                    <p className='text-yellow-100 leading-snug'>
                                        (GROWTH AND<br></br>
                                        DEVELOPMENT)
                                    </p>
                                </div>

                                <div data-aos="slide-up" className='border-8 border-white-100 rounded-3xl p-5 bg-black-100 md:w-96'>

                                    <ul className='list-disc pl-4'>
                                        <li>CEX Listings: List on mid-tier centralized exchanges to increase accessibility and
                                            liquidity.</li>
                                        <li>$PROTEIN Mini Game: Engaging game
                                            that rewards players with $PROTEIN
                                            tokens.</li>
                                        <li>Huge Global Marketing Campaign</li>
                                        <li>CMC & CoinGecko Listing</li>
                                        <li>NFT Collection</li>
                                    </ul>
                                </div>
                            </div>

                            <div className='text-white-100 space-y-8'>

                                <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 shadow-black'>
                                    <h3 className=''>
                                        MR. OLYMPIA PHASE
                                    </h3>
                                    <p className='text-yellow-100'>(ULTIMATE DOMINATION)</p>
                                </div>

                                <div data-aos="slide-up" className='border-8 border-yellow-100 rounded-3xl p-6 bg-black-100'>

                                    <img src={lock} alt='lock' className='flex mx-auto mb-5 w-24'></img>

                                    <h3 className='md:text-4xl text-3xl font-wedges text-center leading-loose text-yellow-100 shadow-black'>
                                        WILL BE UNLOCKED<br></br>
                                        AT 50M CAP
                                    </h3>
                                </div>
                            </div>

                        </div>

                        <div className="lg:w-1/2 w-full space-y-8 flex flex-col justify-center items-center mx-auto">

                            <div className='text-white-100 md:space-y-12 space-y-6'>

                                <img src={dumbell1} alt='dumbell' className='flex mx-auto w-1/2'></img>

                                <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 shadow-black'>
                                    <h3>  CUTTING PHASE</h3>
                                    <p className='text-yellow-100 leading-snug'>(OPTIMISATION AND<br></br>
                                        REFINEMENT)</p>
                                </div>

                                <div data-aos="slide-up" className='border-8 border-white-100 rounded-3xl p-5 bg-black-100 md:w-96'>

                                    <ul className='list-disc pl-4'>
                                        <li>Tier-1 CEX Listings: Secure listings on
                                            Tier-1 centralized exchanges</li>
                                        <li>Huge Partnerships: Partner with major
                                            fitness brands and platforms
                                            Celebrity Onboarding</li>
                                    </ul>
                                </div>
                            </div>


                            <div className='text-white-100 md:space-y-12 space-y-6'>

                                <img src={dumbell2} alt='dumbell' className='flex mx-auto w-1/2'></img>

                                <div className='md:text-4xl text-3xl font-wedges text-center space-y-3 shadow-black'>
                                    <h3>SHREDDING PHASE</h3>
                                    <p className='text-yellow-100 leading-snug'>(MARKET PENETRATION<br></br>
                                        AND EXPANSION)</p>
                                </div>

                                <div data-aos="slide-up" className='border-8 border-white-100 rounded-3xl p-5 bg-black-100 md:w-96 flex mx-auto'>

                                    <ul className='list-disc pl-4'>
                                        <li>  $PROTEIN App Launch (Launch a
                                            comprehensive app with all features,
                                            including fitness tracking, rewards, and
                                            community engagement.)</li>
                                        <li>Airdrop Campaign: Conduct airdrop
                                            campaigns to reward early adopters and
                                            attract new users.</li>
                                        <li>Global Adoption: Drive global mass
                                            adoption of $PROTEIN</li>
                                        <li>Influencers: Engage the biggest world
                                            influencers to promote $PROTEIN</li>
                                    </ul>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            {/* tokenomics section */}

            <img src={cloud1} alt="Logo" className='left-0 absolute md:-mt-52 -mt-20 lg:block hidden' />
            <img src={cloud2} alt="Logo" className='right-0 absolute md:-mt-52 -mt-20 lg:block hidden' />


            <div id='tokenomics' className="bg-token">
                <div className='lg:px-20 px-5 lg:py-12 py-20 container mx-auto'>
                    <div className='lg:flex justify-between'>
                        <div className=''>
                        </div>

                        <div className='lg:w-1/2 text-center lg:mt-28'>
                            <h3 className='md:text-7xl text-4xl font-wedges text-yellow-100 shadow-black'>
                                PROTEINOMICS
                            </h3>

                            <div className='space-y-8 md:mt-8 mt-5'>
                                <p className='md:text-6xl text-4xl font-wedges text-white-100 shadow-black'>
                                    1,000,000,000
                                </p>
                                <p className='md:text-4xl text-2xl font-wedges text-black-100 shadow-white'>
                                    Total Supply:
                                </p>
                            </div>

                            <div className='flex items-center justify-center mt-12 md:gap-x-16 gap-x-8'>
                                <div className='md:space-y-8 space-y-5'>
                                    <p className='md:text-5xl text-3xl font-wedges text-white-100 shadow-black'>
                                        $protein
                                    </p>
                                    <p className='md:text-3xl text-xl font-wedges text-black-100 shadow-white'>
                                        Token Ticker
                                    </p>
                                </div>

                                <div className='md:space-y-8 space-y-5'>
                                    <p className='md:text-5xl text-3xl font-wedges text-white-100 shadow-black'>
                                        Solana
                                    </p>
                                    <p className='md:text-3xl text-xl font-wedges text-black-100 shadow-white'>
                                        Network
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <img src={wave1} alt="Logo" className='left-0 right-0 absolute w-full -mt-1' />
            <img src={tick} alt="Logo" className='absolute right-0 md:mr-44 -mt-12 md:w-64 w-32' />

            {/* join protein section */}

            <div id='join' className="">
                <div className='lg:px-20 px-5 lg:pt-44 pt-20 lg:pb-20 pb-12 container mx-auto'>

                    <div className='lg:flex items-start justify-center'>

                        <div className='md:space-y-12 space-y-6 lg:w-8/12'>
                            <h3 className='md:text-8xl text-4xl font-wedges text-blue-50 shadow-black'>
                                JOIN <span className='text-yellow-100'>$</span>PROTEIN
                                NOW
                            </h3>

                            <div className='flex flex-wrap items-center gap-6 font-wedges'>
                                <a href='https://t.me/ProteinPortal'>
                                    <button className='shadow-gold hover:bg-blue-50 bg-blue-200 border-4 border-blue-50 hover:border-blue-200 py-2 px-5 text-white-100 rounded-2xl tracking-wide'>
                                        Telegram
                                    </button>
                                </a>
                                <button className='shadow-gold hover:bg-blue-50 bg-blue-200 border-4 border-blue-50 hover:border-blue-200 py-2 px-5 text-white-100 rounded-2xl tracking-wide'>
                                    BUY $protein
                                </button>
                                <a href='https://x.com/ProteinCoinSol'>
                                    <button className='shadow-gold hover:bg-blue-50 bg-blue-200 border-4 border-blue-50 hover:border-blue-200 py-2 px-5 text-white-100 rounded-2xl tracking-wide'>
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

                        <div>
                            <img src={join} alt='' className=''></img>
                        </div>
                    </div>

                    <img src={join_right} alt='' className='absolute right-0 z-30 -mt-48 lg:block hidden'></img>

                    <div className='lg:flex items-center gap-0 justify-center py-44 hidden'>
                        <img src={join1} alt='' className='absolute left-0 z-20'></img>
                        <img src={join2} alt='' className='absolute left-1/4 z-10 -mt-44'></img>
                        <img src={join3} alt='' className='absolute left-1/3 mt-64'></img>
                        <img src={join4} alt='' className='absolute right-0 mr-52 mt-44 z-40'></img>
                        <img src={join5} alt='' className='absolute right-0'></img>
                    </div>

                    <div>
                        <img src={video} alt='' className='flex mx-auto md:mt-56 mt-8 lg:w-8/12'></img>
                    </div>

                </div>
            </div>

            {/* faq section */}

            <div id='faq' className="bg-faq">

                <div className="lg:pt-20 py-5 lg:px-20 px-5 container mx-auto">

                    <div className='lg:w-8/12 flex flex-col mx-auto'>
                        <div className='md:flex items-center justify-center'>
                            <h3 data-aos="fade-up" className='md:text-8xl text-4xl font-wedges text-blue-50 uppercase text-center shadow-black'>
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

            </div>

            <Footer />
        </div>
    )
}
