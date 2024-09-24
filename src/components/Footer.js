import React from 'react'
import logo1 from '../assets/logo1.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import footer1 from '../assets/footer1.png';
import footer2 from '../assets/footer2.png';




export default function Footer() {
  return (
    <div className="py-5">

      <div className='-mt-2'>
        <img src={footer1} alt='footer' className='absolute left-0'></img>
        <img src={footer2} alt='footer' className='absolute right-0'></img>
      </div>

      <footer className='container mx-auto lg:px-20 px-5 relative z-20 pt-6'>

        <div className="flex flex-col gap-y-6 justify-center items-center">

          <div>
            <img src={logo1} alt='logo' className=''></img>
          </div>

          <nav>
            <ul className="text-xl flex flex-wrap justify-center md:gap-16 gap-6 items-center capitalize font-lilita">
              <li><a href="#explore" className="">Explore</a></li>
              <li><a href="#benefits" className="">Benefits</a></li>
              <li><a href="#roadmap" className="">Roadmap</a></li>
              <li><a href="#tokenomics" className="">Proteinomics</a></li>
            </ul>
          </nav>

          <div className='flex md:gap-x-16 gap-x-8 md:my-5 items-center'>
            <a href='https://x.com/ProteinCoinSol'>
              <img src={twitter} alt='twitter' className=''></img>
            </a>

            <a href='https://t.me/ProteinPortal'>
              <img src={telegram} alt='telegram' className=''></img>
            </a>
          </div>

        </div>

        <p className='text-center pt-5'> {new Date().getFullYear()}© Protein Coin</p>

      </footer>

    </div>

  )
}
