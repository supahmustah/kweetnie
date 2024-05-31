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
      <header className='pt-24 h-screen text-center'>
        <div className='mb-5 text-white'>
          <p className='font-semibold animate-moveTextDown textShadow text-2xl md:text-5xl'>
            Lode Van Beneden
          </p>
          <div
            className={`bg-white relative animate-expandLineSmall md:animate-expandLine left-1/2 -translate-x-1/2 opacity-0 my-3 p-[1.5px] md:my-5 `}
            id='movingLine'></div>
          <p
            className={`animate-moveTextUp opacity-0 text-md md:text-2xl w-4/5 md:w-1/3 text-justify mx-auto`}>
            Hi, I'm Lode, a passionate full-stack developer. With a solid
            foundation in both front-end and back-end technologies, I specialize
            in creating seamless, user-friendly web applications. My expertise
            spans from crafting intuitive user interfaces to designing robust
            server-side architectures, ensuring a comprehensive and high-quality
            digital experience.
          </p>
        </div>
        <div className={`flex gap-4 justify-center`}>
          <a
            className='bg-white p-3 md:p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#0A66C2] hover:text-white animate-showSocial group'
            target='_blank'
            rel='noreferrer'
            href='https://www.linkedin.com/in/lodevanbeneden/'>
            <FaLinkedinIn
              className={`w-6 h-6 md:w-10 md:h-10 group-hover:animate-rotateLogo`}
            />
          </a>
          <a
            className='bg-white p-3 md:p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#EA3B52] hover:text-white animate-showSocial group'
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/lodevb_/'>
            <FaInstagram
              className={`w-6 h-6 md:w-10 md:h-10 group-hover:animate-rotateLogo`}
            />
          </a>
          <a
            className='bg-white p-3 md:p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#1479BD] hover:text-white animate-showSocial group'
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com/Lodeehhh'>
            <FaFacebookF
              className={`w-6 h-6 md:w-10 md:h-10 group-hover:animate-rotateLogo`}
            />
          </a>
        </div>
        <div className='flex justify-center animate-showSocial opacity-0 transition-all duration-500 cursor-pointer mt-8 md:mt-16'>
          <div
            className='rounded-full border-2 bg-white border-bgWhite transition-all duration-500 py-2 md:py-3 w-36 md:w-52 text-center animate-showPulse text-sm md:text-base'
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
      <div className='bg-bgWhite relative w-full font-[Lato] text-accentBlack pt-5 pb-10'>
        <h1 className='text-4xl font-semibold mb-5'>Projects</h1>
        <div className='projectGrid flex w-1/2 gap-5 justify-center mx-auto'>
          <div className='bg-white rounded-3xl w-72 shadow-xl pt-4 pb-5 relative'>
            <h1 className='text-2xl font-medium'>Portfolio</h1>
            <div
              className={`bg-accentBlack relative left-1/2 -translate-x-1/2 w-[50%] my-3 p-[1.5px] md:my-5 `}></div>
            <p className='px-5 pb-7 text-justify'>
              This portfolio is handmade by myself. It utilized React combined
              with TypeScript and Tailwind for the CSS aspect. Further
              development is still under construction.
            </p>
          </div>
          <div className='bg-white rounded-3xl shadow-xl w-72 pt-4 pb-5 relative'>
            <h1 className='text-2xl font-medium'>League Android App</h1>
            <div
              className={`bg-accentBlack relative left-1/2 -translate-x-1/2 w-[50%] my-3 p-[1.5px] md:my-5 `}></div>
            <p className='px-5 pb-7 text-justify'>
              This is an Android application that is intended to give you some
              information about the different champions in the Riot game League
              of Legends. Every champion comes with its own unique lore and
              spells.
            </p>
            <a
              href='https://github.com/lodeevb/android_league'
              className='text-accentBlack italic font-bold hover:underline absolute bottom-5 -translate-x-1/2'>
              Repository
            </a>
          </div>
          <div className='bg-white rounded-3xl w-72 shadow-xl pt-4 pb-5 relative'>
            <h1 className='text-2xl font-medium'>DevOps Project</h1>
            <div
              className={`bg-accentBlack relative left-1/2 -translate-x-1/2 w-[50%] my-3 p-[1.5px] md:my-5 `}></div>
            <p className='px-5 pb-7 text-justify'>
              This was a school project that required me, along with others, to
              create both a website and mobile application to be able to get
              information about certain diseases of the eye and to make
              appointments for a certain eye doctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
