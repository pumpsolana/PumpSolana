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
              <li><a href="#explore" className="text-blue-50 hover:text-yellow-50">Explore</a></li>
              <li><a href="#benefits" className="text-blue-50 hover:text-yellow-50">Benefits</a></li>
              <li><a href="#roadmap" className="text-blue-50 hover:text-yellow-50">Roadmap</a></li>
              <li><a href="#tokenomics" className="text-blue-50 hover:text-yellow-50">Pumpenomics</a></li>
            </ul>
          </nav>

          <div className='flex gap-x-8 md:my-5 items-center'>
            <a href='https://x.com/pumpbysol' target='_blank'>
              <svg className='block mx-auto' xmlns="http://www.w3.org/2000/svg" width="2.5em" height="2.5em" viewBox="0 0 24 24"><path fill="#b558ff" d="M8 2H1l8.26 11.015L1.45 22H4.1l6.388-7.349L16 22h7l-8.608-11.478L21.8 2h-2.65l-5.986 6.886zm9 18L5 4h2l12 16z" /></svg>
            </a>

            <a href='https://t.me/pumpbysol' target='_blank'>
              <i className='fa fa-telegram text-5xl text-yellow-50 duration-100'></i>
            </a>
          </div>

        </div>

        <p className='text-center pt-5'> {new Date().getFullYear()}© PUMP</p>

      </footer>

    </div>

  )
}
