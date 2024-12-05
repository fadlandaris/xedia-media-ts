import React, { useRef } from 'react';
import { GoArrowRight, GoArrowLeft, GoArrowDownRight } from 'react-icons/go';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { dataProps } from '../types/type';
import { HERO } from '../assets/assets';
import { Link } from 'react-router-dom';
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
    <section className='md:py-32 py-16' id='portfolio'>
      <div className='md:flex justify-between px-10 md:px-16 items-center'>
        <div className='text-2xl md:text-5xl font-extrabold w-[17rem] md:w-[35rem]'>
          <div data-aos="fade-up" data-aos-duration="1500" className='flex justify-end'>
            Discover Our Brand
          </div>
          <p data-aos="fade-up" data-aos-duration="2100">and Keep in Touch</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2100" className='mt-8 md:mt-0 flex gap-x-16 text-5xl '>
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

      <div className='mt-8 md:mt-32'>
        <Swiper spaceBetween={32} style={{ paddingLeft: window.innerWidth < 768 ? '40px' : '64px', paddingTop: window.innerWidth < 768 ? '64px' : '32px',paddingBottom: window.innerWidth < 768 ? '64px' : '32px',paddingRight: window.innerWidth < 768 ? '40px' : '64px',}}
          onSwiper={(swiper) => { swiperRef.current = swiper; }} modules={[Autoplay]} autoplay={{ delay: 3000,  disableOnInteraction: false, }}loop={true} breakpoints={{ 640: {slidesPerView: 1, }, 768: { slidesPerView: 2, }, 1024: { slidesPerView: 3,},}}>
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <div className='relative hover:scale-105 transition-all duration-500 cursor-pointer h-[22rem]' style={{ backgroundImage: `url(${HERO})`, backgroundSize: 'cover', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}>
                <div className='w-full h-full bg-black/100 blur-xl absolute inset-0 opacity-30' />
                <div className='w-full h-full absolute inset-0 p-10'>
                  <div className='grid grid-cols-2'>
                    <p className='text-2xl font-extrabold'>0{item.id}</p>
                    <p className='text-xl font-extrabold'>{item.title}</p>
                  </div>
                  <div className='h-[0.5px] w-full bg-white mt-16 md:mb-32 mb-8 opacity-30' />
                  <div className='flex justify-end font-extrabold'>
                    <Link to={`/${item.link}`}>
                    <button className="button-styles group flex justify-start items-center gap-x-8 hover:gap-x-16 transition-all duration-500">
                      view Portfolio
                      <GoArrowDownRight />
                      <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]" />
                    </button>
                    </Link>
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
