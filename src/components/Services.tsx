import React from 'react';
import { dataProps } from '../types/type';
import { GoArrowDownRight } from "react-icons/go";
import { D_1, HERO_1, D_2} from '../assets/assets';

interface props {
  data: dataProps[];
}

const Services: React.FC<props> = ({ data }) => {
  return (
    <section className='py-16 md:pb-32 px-10 md:px-16 relative'>
      <img src={D_2} alt="" className='absolute md:-bottom-72 -bottom-10 z-10 w-40 md:w-72 right-0 animate-custom-bounce' />
      <div className='absolute left-0 top-0 h-full w-full '>
        <img src={HERO_1} alt="" className='w-full h-full object-cover' />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black'/>
      {/* <div data-aos="zoom-in"> */}
      {/* <img src={D_1} alt="" className='absolute bottom-16 left-16 rotate-12 w-64 animate-custom-bounce' />
      <img src={D_8} alt="" className='absolute top-1/3 right-16 w-40 animate-custom-bounce '/> */}
      {/* <img src={D_6} alt="" className='absolute bottom-1/5 left-16 opacity-30 w-64 animate-custom-bounce' /> */}
      {/* <img src={D_3} alt="" className='absolute top-[30rem] left-16 w-96 animate-custom-bounce' />
      <img src={D_2} alt="" className='absolute bottom-1/4 left-1/2 z-10  w-32 rotate-45 ' />
      <img src={D_9} alt="" className='absolute top-[25rem] left-64 w-28 animate-custom-bounce' /> */}
      {/* </div> */}
      <div className='md:flex grid justify-between items-center relative z-10  ' id='services'>
        <img src={D_1} alt="" className='absolute  -top-[0rem] md:-top-72 md:left-16 w-32 md:w-64 rotate-180 animate-custom-bounce' />
        <div className='text-3xl md:text-7xl font-extrabold w-[15rem] md:w-[40rem] mt-64 '>
          <h2 data-aos="fade-up" data-aos-duration="1500">Produk terbaik</h2>
          <div data-aos="fade-up" data-aos-duration="2100" className='flex justify-end'>
            Xedia Media
          </div>
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="2100" className='mt-8 md:mt-0 md:w-1/5 flex md:grid'>
          <p data-aos="fade-up" data-aos-duration="3000">Pilih Xedia Media dengan 10 layanan lengkap untuk mendukung semua kebutuhan bisnis Anda</p>
          <div data-aos="zoom-in-right" data-aos-duration="3000" className='mt-16 text-5xl'>
            <GoArrowDownRight />
          </div>
        </div>
      </div>

      <div className='mt-16 md:mt-16 grid grid-cols-1 md:grid-cols-4'>
        <div/>
        <div className='md:col-span-3'>
          {data.map((item, i) => (
            <div key={i} className='hover:text-white/100 hover:scale-105 transition-all duration-500 cursor-pointer'>
              <div data-aos="fade-right" data-aos-duration="1500">
                <div className='h-[0.5px] w-full bg-white opacity-30' />
              </div>
              <div data-aos="fade-right" data-aos-duration="2000" className='grid md:flex justify-start md:gap-x-32 items-start my-16'>
                <p className='text-2xl font-extrabold'>{String(i + 1).padStart(2, '0')}</p>
                <h2 className='text-2xl mt-4 my-8 md:mt-0 md:my-0 font-extrabold md:w-1/4'>{item.title}</h2>
                <div className='md:w-1/3'>
                  <p>{item.desc}</p>
                  <div className='mt-8 '>
                    <span className='line-through text-red-400 block md:inline mb-4 md:mb-0'>
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price ?? 0)} 
                    </span>
                    <span className='font-extrabold text-2xl md:text-xl  md:ml-6  text-green-400'>
                      {/* <span className='text-green-400 text-[12px]'>start from  </span> */}
                      {` ${new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((item.price ?? 0) * 0.7)}`}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className='h-[0.5px] w-full bg-white opacity-30' />
        </div>
      </div>
    </section>
  );
};

export default Services;