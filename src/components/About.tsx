import React from 'react'
import Title from './Title'
import { ArrowRight } from 'phosphor-react'

const About: React.FC = () => {
  return (
    <>
    <div className='p-16 grid grid-cols-1 gap-y-8 md:grid-cols-3 z-10 relative' id='about'>
      <div>
        <p className='flex justify-start gap-x-2 items-center'>
          About Us
          <ArrowRight/>
        </p>
      </div>
      <div className='font-semibold text-2xl md:text-5xl col-span-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores nam consequuntur ut inventore voluptatum assumenda rerum doloribus ab dolore neque.
      </div>
    </div>
    <div className='mt-16'>
      <Title variant={''}/>
    </div>
    </>
    
  )
}

export default About