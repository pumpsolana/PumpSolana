import React, { useState } from 'react'
import logo from '../assets/logo.png';




export default function Menu() {

  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  }

  return (

    <header>

      <div className="px-5 bg-white-100 py-1 hidden font-lilita lg:flex justify-between items-center shadow-blue border-4 border-blue-50 rounded-2xl mx-auto">

        <div>
          <a href='/'>
            <img src={logo} alt='logo' className='w-20'></img>
          </a>
        </div>

        <nav>
          <ul className="text-xxl flex justify-center gap-16 items-center capitalize">
            <li><a href="#explore" className="duration-100 shadow-gold">Explore</a></li>
            <li><a href="#benefits" className="duration-100 shadow-gold">Benefits</a></li>
            <li><a href="#roadmap" className="duration-100  shadow-gold">Roadmap</a></li>
            <li><a href="#tokenomics" className=" duration-100 shadow-gold">Pumponomics</a></li>
          </ul>
        </nav>

        <button className='bg-blue-200 border-4 border-blue-50 py-2 px-5 text-white-100 rounded-2xl hover:bg-blue-50 hover:border-blue-200 duration-150 text-xxl shadow-btn'>
          BUY $PUMP
        </button>

      </div>

      <div className="lg:hidden flex items-center justify-between pb-6" onClick={ToggleSidebar} >
        <a href='/'>
          <img src={logo} alt='logo' className='w-20'></img>
        </a>

        <i className="fa fa-bars text-2xl"></i>
      </div>

      <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
        <div className='p-5'>
          <div className="lg:hidden flex items-center justify-between pb-6" onClick={ToggleSidebar}>
            <a href='/'>
              <img src={logo} alt='logo' className='w-20'></img>
            </a
            >
            <i className="fa fa-times text-2xl text-white-100"></i></div>

          <div className="sd-body mt-20 font-fredoka">
            <ul>
              <li><a onClick={ToggleSidebar} href='/' className="sd-link">Explore</a></li>
              <li><a onClick={ToggleSidebar} href='#benefits' className="sd-link">Benefits</a></li>
              <li><a onClick={ToggleSidebar} href='#roadmap' className="sd-link">Roadmap</a></li>
              <li><a onClick={ToggleSidebar} href='#tokenomics' className="sd-link">Pumponomics</a></li>
            </ul>
          </div>

        </div>
      </div>

      <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </header >
  )
}
