import React from 'react';
import './App.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import SwiperContainer from './Components/SwiperContainer';

function App() {
  const showSkills = () => {
    window.scrollTo({
      top: 700,
      behavior: 'smooth',
    });
  };

  return (
    <div className='App w-full font-[Lato] text-accentBlack bg-bgWhite'>
      <div className={`bg-stone-800 fixed w-full h-full transition-all`}></div>
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
      <header className='md:pt-1/8 pt-2/3 h-screen text-center'>
        <div className='mb-5 text-white'>
          <p className='font-semibold animate-moveTextDown textShadow text-2xl md:text-5xl'>
            Lode Van Beneden
          </p>
          <div
            className={`bg-white relative animate-expandLineSmall md:animate-expandLine left-1/2 -translate-x-1/2 opacity-0 my-3 p-[1.5px] md:my-5 `}
            id='movingLine'></div>
          <p
            className={`animate-moveTextUp mx-6 opacity-0 text-md md:text-2xl`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={`flex gap-4 justify-center`}>
          <a
            className='bg-white md:p-5 p-3 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#0A66C2] hover:text-white animate-showSocial group'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/lodevanbeneden/'>
            <FaLinkedinIn
              className={`md:w-10 md:h-10 w-6 h-6 group-hover:animate-rotateLogo`}
            />
          </a>
          <a
            className='bg-white md:p-5 p-3 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#EA3B52] hover:text-white animate-showSocial group'
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/lodevb_/'>
            <FaInstagram
              className={`md:w-10 md:h-10 w-6 h-6 group-hover:animate-rotateLogo`}
            />
          </a>
          <a
            className='bg-white md:p-5 p-3 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#1479BD] hover:text-white animate-showSocial group'
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/Lodeehhh'>
            <FaFacebookF
              className={`md:w-10 md:h-10 w-6 h-6 group-hover:animate-rotateLogo`}
            />
          </a>
        </div>
        <div className='flex justify-center animate-showSocial opacity-0 transition-all duration-500 cursor-pointer'>
          <div
            className='rounded-full border-2 bg-white border-bgWhite transition-all duration-500 md:py-3 py-2 w-36 md:w-52 text-center md:mt-16 mt-8 animate-showPulse text-sm md:text-base'
            onClick={() => showSkills()}>
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
      <SwiperContainer />
      {/* <div className='relative flex justify-center bg-bgWhite'>
        <div className='rounded-full border-2 bg-white border-textAccent py-3 w-52 text-center my-16 cursor-pointer'>
          <p className='font-semibold text-textAccent'>Contact me!</p>
        </div>
      </div> */}
    </div>
  );
}

export default App;
