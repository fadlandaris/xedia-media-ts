import React from 'react';
import { dataProps } from '../types/type';
import { GoArrowDownRight } from "react-icons/go";

interface props {
  data: dataProps[];
}

const Services: React.FC<props> = ({ data }) => {
  return (
    <section className='py-16 md:py-32 px-10 md:px-16 relative'>
      <div className='md:flex grid justify-between items-center relative z-10' id='services'>
        <div className='text-3xl md:text-5xl font-extrabold w-[15rem] md:w-[25rem]'>
          <h2 data-aos="fade-up" data-aos-duration="1500">Why Affiliates</h2>
          <div data-aos="fade-up" data-aos-duration="2100" className='flex justify-end'>
            Choosen Us
          </div>
        </div>

        <div data-aos="zoom-in-left" data-aos-duration="2100" className='mt-8 md:mt-0 md:w-1/5 flex md:grid'>
          <p data-aos="fade-up" data-aos-duration="3000">Pilih Xedia Media dengan 10 layanan lengkap untuk mendukung semua kebutuhan bisnis Anda</p>
          <div data-aos="zoom-in-right" data-aos-duration="3000" className='mt-16 text-5xl'>
            <GoArrowDownRight />
          </div>
        </div>
      </div>

      <div className='mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-4'>
        <div/>
        <div className='md:col-span-3'>
          {data.map((item, i) => (
            <div key={i} className='hover:text-white/100 hover:scale-105 transition-all duration-500 cursor-pointer'>
              <div data-aos="fade-right" data-aos-duration="1500">
                <div className='h-[0.5px] w-full bg-white opacity-30' />
              </div>
              <div data-aos="fade-right" data-aos-duration="2000" className='grid md:flex justify-start md:gap-x-32 items-start my-16'>
                <h2 className='text-xl font-extrabold'>0{item.id}</h2>
                <h2 className='text-2xl mt-4 my-8 md:mt-0 md:my-0 font-extrabold md:w-1/4'>{item.title}</h2>
                <div className='md:w-1/3'>
                  <p>{item.desc}</p>
                  <div className='mt-8 '>
                    <span className='line-through text-red-400 block md:inline mb-4 md:mb-0'>
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(item.price ?? 0)} 
                    </span>
                    <span className='font-extrabold text-2xl md:text-xl  md:ml-6  text-green-400'>
                      {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format((item.price ?? 0) * 0.7)}
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