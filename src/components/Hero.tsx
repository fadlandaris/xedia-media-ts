import React from 'react'
import Title from './Title'
import { HERO } from '../assets/assets'
import { GoArrowDownRight } from 'react-icons/go'
import About from './About'

const Hero: React.FC = () => {
  return (
    <>
      <section className='relative h-screen' id='about'>
        <img src={HERO} alt="" className='absolute w-full h-[70rem] ' />
        <div className='absolute inset-0 flex justify-center items-end bg-gradient-to-b from-black/50 to-none'>
          <div className=' w-full '>
          <div className='mb-16 grid grid-cols-1 md:grid-cols-5 px-10 md:px-16 '>
            <div data-aos="zoom-in-right" data-aos-duration="1500" className='col-span-3 mb-4 md:mb-0 flex justify-start md:justify-center font-medium'>
              Siapa Kita ?
            </div>
            <div data-aos="zoom-in" data-aos-duration="1800" className='bg-white h-[1px] md:w-1/4'/>
            <div data-aos="zoom-in-left" data-aos-duration="2100" className='font-medium '>
              <p>Xedia Media adalah agensi digital kreatif yang lahir di Semarang, berfokus pada solusi inovatif untuk membantu bisnis tumbuh dan terhubung dengan pelanggan secara efektif</p>
            </div>
          </div>
          <div className=''>
            <Title variant={'hero'}/>
          </div>
          <div className='px-10 pt-16 md:px-16 md:pt-16 md:pb-24 md:flex justify-between items-center'>
            <div className='grid grid-cols-1 w-[80%] md:w-1/3 text-3xl md:text-5xl font-extrabold '>
              <h2 data-aos="fade-up" data-aos-duration="1500">Transform Ideas</h2>
              <div data-aos="fade-up" data-aos-duration="1800" className=' flex justify-end'>
                <h2>into Impact</h2>
              </div>
              <h2 data-aos="fade-up" data-aos-duration="2100" >the Xedia Way</h2>
            </div>
            <div className='flex justify-start md:justify-center items-center font-bold text-lg md:text-xl'>
            <a href="https://wa.me/6282328713200" data-aos="fade-up" data-aos-duration="2100" target="_blank" className="mt-8 md:mt-0 button-styles group flex justify-start items-center gap-x-8 hover:gap-x-16 transition-all duration-500">
              Contact Us
              <GoArrowDownRight/>
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
            </a>
            </div>
          </div>
          </div>
        </div>
      </section>
      <About/>
    </>
   
  )
}

export default Hero