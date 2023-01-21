import React, { useEffect, useState } from 'react';
import './App.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import SkillSet from './Components/skillSet';

function App() {
  return (
    <div className='App h-screen relative w-full font-[Lato] text-accentBlack'>
      <header className='relative top-1/5'>
        <div className='mb-5'>
          <p className='font-semibold animate-moveTextDown textShadow text-2xl lg:text-5xl'>
            Lode Van Beneden
          </p>
          <div
            className={`bg-accentBlack relative animate-expandLine left-1/2 -translate-x-1/2 opacity-0 my-3 p-[1.5px] lg:my-5 `}
            id='movingLine'></div>
          <p
            className={`animate-moveTextUp mx-2 opacity-0 text-lg lg:text-2xl`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={`relative top-1/4 flex gap-4 justify-center`}>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#0A66C2] hover:text-white animate-showSocial'>
            <FaLinkedinIn className={`w-10 h-10`} />
          </span>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#EA3B52] hover:text-white animate-showSocial'>
            <FaInstagram className={`w-10 h-10`} />
          </span>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#1479BD] hover:text-white animate-showSocial'>
            <FaFacebookF className={`w-10 h-10`} />
          </span>
        </div>
      </header>
      <div className='relative top-1/3 w-2/3 left-1/2 -translate-x-1/2'>
        <SkillSet />
      </div>
    </div>
  );
}

export default App;
