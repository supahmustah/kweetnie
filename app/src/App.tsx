import React, { createElement, useEffect, useState } from 'react';
import './App.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import skills from './Assets/skills';

function App() {
  return (
    <div className='App w-full font-[Lato] text-accentBlack'>
      <div className='area'>
        <ul className='circles'>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <header className='pt-1/8 h-screen text-center'>
        <div className='mb-5 text-white'>
          <p className='font-semibold animate-moveTextDown textShadow text-2xl lg:text-5xl'>
            Lode Van Beneden
          </p>
          <div
            className={`bg-white relative animate-expandLine left-1/2 -translate-x-1/2 opacity-0 my-3 p-[1.5px] lg:my-5 `}
            id='movingLine'></div>
          <p
            className={`animate-moveTextUp mx-2 opacity-0 text-lg lg:text-2xl`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={`flex gap-4 justify-center`}>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#0A66C2] hover:text-white animate-showSocial group'>
            <FaLinkedinIn className={`w-10 h-10`} />
          </span>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#EA3B52] hover:text-white animate-showSocial'>
            <FaInstagram className={`w-10 h-10`} />
          </span>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#1479BD] hover:text-white animate-showSocial'>
            <FaFacebookF className={`w-10 h-10`} />
          </span>
        </div>
        <div className='flex justify-center animate-showSocial opacity-0 transition-all duration-500 cursor-pointer'>
          <div className='rounded-full border-2 bg-white border-bgWhite transition-all duration-500 py-3 w-52 text-center mt-16 animate-showPulse'>
            <p className='font-semibold'>Click to see more</p>
          </div>
        </div>
      </header>
      <div className='custom-shape-divider-bottom-1676931458'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'>
          <path
            d='M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z'
            className='shape-fill'></path>
        </svg>
      </div>
      <div className='w-full bg-bgWhite'>
        <div className='w-1/2 grid grid-rows-3 gap-10 grid-cols-3'>
          {skills.map((skill, index) => (
            <div className='p-5'>
              {createElement(skill.icon.type, { className: 'w-20 h-20' })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
