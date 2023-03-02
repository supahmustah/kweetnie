import React, { createElement, useState } from 'react';
import './App.css';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import skills from './Assets/skills';
import StarContainer from './Components/StarContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <div className='App w-full font-[Lato] text-accentBlack bg-bgWhite'>
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
            <FaLinkedinIn
              className={`w-10 h-10 group-hover:animate-rotateLogo`}
            />
          </span>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#EA3B52] hover:text-white animate-showSocial group'>
            <FaInstagram
              className={`w-10 h-10 group-hover:animate-rotateLogo`}
            />
          </span>
          <span className='bg-white p-5 drop-shadow-2xl rounded-full opacity-0 transition-all duration-500 hover:bg-[#1479BD] hover:text-white animate-showSocial group'>
            <FaFacebookF
              className={`w-10 h-10 group-hover:animate-rotateLogo`}
            />
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
      <div className='slide-container bg-bgWhite relative max-w-[1300px] w-full m-auto overflow-hidden'>
        <Swiper
          className='overflow-hidden'
          spaceBetween={10}
          slidesPerView={5}
          speed={500}
          direction={'horizontal'}
          loop={true}
          centeredSlides={true}
          loopedSlides={5}
          roundLengths={true}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          }}>
          {skills.map((skill, index) => (
            <SwiperSlide className='flex justify-center align-center h-screen'>
              <div className='relative bg-white py-6 px-6 rounded-3xl w-56 my-9 shadow-xl'>
                <div
                  className={` text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${skill.color} left-4 -top-6`}>
                  {createElement(skill.icon.type, {
                    className: `w-8 h-8`,
                  })}
                </div>
                <div className='mt-8'>
                  <p className='text-xl font-semibold my-2'>{skill.title}</p>
                  <StarContainer enjoyment={skill.appreciation} />
                </div>
                <div className='border-t-2'></div>
                <div className='italic mt-3'>
                  <p>{skill.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-button-prev swiper-navBtn'></div>
        <div className='swiper-button-next swiper-navBtn'></div>
        <div className='swiper-pagination'></div>
      </div>
      <div className='bg-white pt-6 relative flex flex-col'>
        <div className='custom-shape-divider-top-1677783687'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'>
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'></path>
          </svg>
        </div>
        <div className='mt-32'>
          <h1 className='font-semibold text-2xl lg:text-5xl'>Projects</h1>
          <div className='grid grid-cols-3 grid-rows-3 pt-6 w-[55%] m-auto gap-10 place-content-center place-items-center'>
            <div className='bg-red-500 h-80 w-80 transition-all shadow-2xl peer'>
              &nbsp;
            </div>
            <div className='bg-blue-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-green-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-yellow-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-orange-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-pink-500 h-80 w-80  hover:h-[22rem] hover:w-[22rem] peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-lime-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-cyan-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
            <div className='bg-purple-500 h-80 w-80 peer-hover:opacity-70 transition-all'>
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
