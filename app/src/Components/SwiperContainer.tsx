import skills from '../Assets/skills';
import StarContainer from './StarContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import { createElement } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
export default function SwiperContainer() {
  return (
    <div className='bg-bgWhite relative w-full'>
      <div className='slide-container relative max-w-[1400px] m-auto'>
        <Swiper
          className='max-w-[1300px]'
          slidesPerView={5}
          speed={500}
          autoplay={{
            delay: 2500,
          }}
          modules={[Navigation, Pagination, Autoplay]}
          pagination={{
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
          }}>
          {skills.map((skill) => (
            <SwiperSlide
              key={skill.title}
              className='flex justify-center align-center h-screen'>
              <div className='relative bg-red py-6 px-6 rounded-3xl w-56 my-9 shadow-xl'>
                <div
                  className={` text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl ${skill.color} left-4 -top-6`}>
                  {createElement(skill.icon.type, {
                    className: `w-8 h-8`,
                  })}
                </div>
                <div className='mt-8'>
                  <p className='text-xl font-semibold my-2'>{skill.title}</p>
                  <StarContainer knowledge={skill.knowledge} />
                </div>
                <div className='border-t-2'></div>
                <div className='italic mt-3'>
                  <p>{skill.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='swiper-pagination'></div>
      </div>
    </div>
  );
}
