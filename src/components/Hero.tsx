import React from 'react'
// import Title from './Title'
import { HERO, WHITE, D_3 } from '../assets/assets'
// import { GoArrowDownRight } from 'react-icons/go'
// import About from './About'
// import { LOGO } from '../assets/assets'

const Hero: React.FC = () => {
  return (
    <>
      <section className='relative h-screen overflow-hidden' id='about'>
        <img src={D_3} alt="" className='absolute top-0 right-0 w-40 md:-right-12 z-10 md:w-96  animate-custom-bounce' />
        <img src={HERO} alt="" className='absolute inset-0   ' />
        <div className='absolute inset-0 bg-gradient-to-b z-0 from-black/5 to-black flex justify-center items-center '>
          <div className=' max-w-2xl  relative z-10 '>
            <img src={WHITE} data-aos="fade-up" data-aos-duration="1500" className='md:w-[100rem] w-[20rem] mx-auto'/>
            <div className='text-center px-10' data-aos="fade-up" data-aos-duration="2500">
            <p className='md:text-xl text-sm font-extrabold mb-4 '>Tentang Kami</p>
            <p className='md:text-xl text-sm'>Kami membangun kepercayaan melalui transparansi dan kejujuran, terus berinovasi untuk mencapai hasil terbaik, dan meyakini bahwa kesuksesan klien adalah kesuksesan kami</p>  
            </div>
          </div>
        </div>
        <div className='absolute inset-0 flex justify-center items-center bg-gradient-to-b from-black/50 to-none'>
          {/* <div className=' w-full '> */}
          {/* <di className='mb-16 grid grid-cols-1 md:grid-cols-5 px-10 md:px-16 border-2 '>
            <div data-aos="zoom-in-right" data-aos-duration="1500" className=' col-span-3 mb-4 md:mb-0 flex justify-start md:justify-center font-medium'>
              Siapa Kita ?
            </div>
            <div data-aos="zoom-in" data-aos-duration="1800" className='bg-white h-[1px] md:w-1/4'/>
            <div data-aos="zoom-in-left" data-aos-duration="2100" className='font-medium '>
              <p>Xedia Media adalah agensi digital kreatif yang lahir di Semarang, berfokus pada solusi inovatif untuk membantu bisnis tumbuh dan terhubung dengan pelanggan secara efektif</p>
            </div>
          </di> */}
          {/* <div className=''>
            <Title variant={'hero'}/>
          </div> */}
          {/* <di className='border-2 px-10 pt-16 md:px-16 md:pt-16 md:pb-24 md:flex justify-between items-center'>
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
          </di> */}
          {/* </div> */}
        </div>
      </section>
      {/* <About/> */}
    </>
   
  )
}

export default Hero