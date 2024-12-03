import React, { useRef } from 'react';
import { GoArrowRight, GoArrowLeft, GoArrowDownRight } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataProps } from '../types/type';
import { HERO } from '../assets/assets';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

interface props {
  data: dataProps[];
}

const Portfolio: React.FC<props> = ({ data }) => { 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section className='py-32' id='portfolio'>
      <div className='flex justify-between px-16 items-center'>
        <div className='text-5xl font-extrabold w-[35rem]'>
          <div className='flex justify-end'>
            Discover Our Brand
          </div>
          and Keep in Touch
        </div>
        <div className='flex gap-x-16 text-5xl '>
          <button className="button-styles group-hover:mr-8 group opacity-30 hover:opacity-100 transition-all duration-500" onClick={handlePrev}>
            <GoArrowLeft />
            <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]" />
          </button>
          <button className="button-styles group opacity-30 hover:opacity-100 transition-all duration-500" onClick={handleNext}>
            <GoArrowRight />
            <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]" />
          </button>
        </div>
      </div>

      <div className='mt-32 '>
        <Swiper
          slidesPerView={3}
          spaceBetween={32}
          style={{ paddingLeft: '64px', paddingTop: '32px', paddingBottom: '32px', paddingRight: '64px' }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='relative hover:scale-105 transition-all duration-500 cursor-pointer h-[22rem]' style={{ backgroundImage: `url(${HERO})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
                <div className='w-full h-full bg-black/100 blur-xl absolute inset-0 opacity-30' />
                <div className='w-full h-full absolute inset-0 p-10'>
                  <div className='grid grid-cols-2'>
                    <p className='text-2xl font-extrabold'>0{item.id}</p>
                    <p className='text-xl font-extrabold'>{item.title}</p>
                  </div>
                  <div className='h-[0.5px] w-full bg-white mt-16 mb-32 opacity-30' />
                  <div className='flex justify-end font-extrabold'>
                    <button className="button-styles group flex justify-start items-center gap-x-8 hover:gap-x-16 transition-all duration-500">
                      view Portfolio
                      <GoArrowDownRight />
                      <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]" />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Portfolio;
