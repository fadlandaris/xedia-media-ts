import React from 'react'
import Title from './Title'
import { HERO } from '../assets/assets'
import { GoArrowDownRight } from 'react-icons/go'
import About from './About'

const Hero: React.FC = () => {
  return (
    <>
      <section className=' relative h-screen' id='about'>
        <img src={HERO} alt="" className='absolute  w-full h-[70rem] ' />
        <div className='absolute inset-0 flex justify-center items-end bg-gradient-to-b from-black/50 to-none'>
          <div className=' w-full '>
          <div className='mb-16 grid grid-cols-1 md:grid-cols-5 px-16'>
            <div className='col-span-3 flex justify-start md:justify-center font-medium'>
              Who We Are ?
            </div>
            <div className='bg-white h-[1px] md:w-1/4'/>
            <div className='font-medium '>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero, quam voluptatibus? Vitae soluta qui magni minima veniam suscipit maiores veritatis?</p>
            </div>
          </div>
          <div className=''>
            <Title variant={'hero'}/>
          </div>
          <div className='px-16 pt-16 md:p-16 md:flex justify-between items-center'>
            <div className='grid grid-cols-1 w-1/2 md:w-1/3 text-3xl md:text-5xl font-extrabold gap-y-'>
              <h2>Monetize your</h2>
              <div className=' flex justify-end'>
                <h2>Traffic to Affinity</h2>
              </div>
              <h2>& Beyond</h2>
            </div>
            <div className='flex justify-start md:justify-center items-center font-bold text-lg md:text-xl'>
            <button className="mt-8 md:mt-0 button-styles group flex justify-start items-center gap-x-8 hover:gap-x-16 transition-all duration-500">
              Contact Us
              <GoArrowDownRight/>
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
            </button>
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