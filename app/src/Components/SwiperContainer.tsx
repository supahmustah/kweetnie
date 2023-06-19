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
    <div className='bg-bgWhite relative w-full slide-container m-auto'>
      <Swiper
        className='sm:w-[1300px] w-full'
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
        }}
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
            <div className='relative bg-white p-6 rounded-3xl sm:w-56 w-24 my-9 shadow-xl'>
              <div
                className={` text-white flex items-center absolute rounded-full sm:p-4 p-3 shadow-xl ${skill.color} sm:left-4 sm:-top-6 left-2 -top-3`}>
                {createElement(skill.icon.type, {
                  className: `sm:w-8 sm:h-8 h-4 w-4 `,
                })}
              </div>
              <div className='sm:mt-8'>
                <p className='sm:text-xl text-s font-semibold my-2'>
                  {skill.title}
                </p>
                <StarContainer knowledge={skill.knowledge} />
              </div>
              <div className='sm:border-t-2'></div>
              <div className='italic mt-3'>
                <p>{skill.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className='swiper-pagination'></div>
    </div>
  );
}
