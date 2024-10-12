import React from 'react'
import logo1 from '../assets/logo.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';
import footer1 from '../assets/footer1.png';
import footer2 from '../assets/footer2.png';




export default function Footer() {
  return (
    <div className="py-5">

      <footer className='container mx-auto lg:px-20 px-5 pt-6'>

        <div className="flex flex-col gap-y-6 justify-center items-center">

          <div>
            <img src={logo1} alt='logo' className='w-40'></img>
          </div>

          <nav>
            <ul className="text-xl flex flex-wrap justify-center md:gap-16 gap-6 items-center capitalize font-lilita">
              <li><a href="#explore" className="">Explore</a></li>
              <li><a href="#benefits" className="">Benefits</a></li>
              <li><a href="#roadmap" className="">Roadmap</a></li>
              <li><a href="#tokenomics" className="">Pumpenomics</a></li>
            </ul>
          </nav>

          <div className='flex md:gap-x-16 gap-x-8 md:my-5 items-center'>
            <a href='https://x.com/pumpbysol'>
              <img src={twitter} alt='twitter' className=''></img>
            </a>

            <a href='https://t.me/pumpbysol'>
              <img src={telegram} alt='telegram' className=''></img>
            </a>
          </div>

        </div>

        <p className='text-center pt-5'> {new Date().getFullYear()}© PUMP</p>

      </footer>

    </div>

  )
}
