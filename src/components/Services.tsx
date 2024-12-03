import React from 'react'
import { dataProps } from '../types/type'
import { GoArrowDownRight } from "react-icons/go";


interface props {
  data: dataProps[]
}

const Services: React.FC<props> = ({ data }) => {
  return (
    <section className='px-16 py-32'>
      <div className='md:flex grid justify-between items-center' id='services'>
        <div className='text-5xl font-extrabold w-[25rem] '>
          <h2>Why Affiliates</h2>
          <div className='flex justify-end'>
            Choosen Us
          </div>
        </div>

        <div className='w-1/2 mt-16 md:w-1/5 flex '>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, magni.
          <div className='mt-16 text-5xl'>
            <GoArrowDownRight/>
          </div>
        </div>
      </div>

      <div className='mt-32 grid grid-cols-1 md:grid-cols-4'>
        <div/>
        <div className='md:col-span-3'>
          {data.map((item, i) => (
            <div key={i} className='hover:text-white/100 hover:scale-105 transition-all duration-500 cursor-pointer '>
              <div className='h-[0.5px] w-full bg-white opacity-30'/>
              <div className='grid gap-y-4 md:flex justify-start gap-x-32 items-start my-16'>
                <h2 className='text-xl font-extrabold'>0{item.id}</h2>
                <h2 className='text-lg font-extrabold w-1/4 '>{item.title}</h2>
                <p className='w-1/3'>{item.desc}</p>
              </div>
            </div>
          ))}
          <div className='h-[0.5px] w-full bg-white opacity-30'/>
        </div>
      </div>
    </section>
  )
}

export default Services