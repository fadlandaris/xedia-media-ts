import React from 'react'
import { dataProps } from '../types/type'
import { GoArrowDownRight } from "react-icons/go";
import {LOGO} from "../assets/assets"
import Title from './Title';

interface props {
  navDatas: dataProps[]
  contactDatas: dataProps[]
  socialDatas: dataProps[]
}

const Footer: React.FC<props> = ({navDatas, contactDatas, socialDatas}) => {
  // console.log(navData)

  return (
    <footer className='pt-16 px-16' id='footer'>
     <div className='flex justify-between'>
      <div className='flex justify-start gap-x-16'>
        <div className=''>
          <img src={LOGO} alt="" className='w-24 filter grayscale brightness-50 hover:filter-none hover:w-28 transition-all duration-500 cursor-pointer' />
        </div>
        <div className='flex uppercase gap-x-8'>
          <p className='opacity-30'>/ menu</p>
          <div className='flex flex-col gap-y-8 font-bold '>
            {navDatas.map((item, i) => (
              <a href={`#${item.link}`} key={i} className="button-styles group">
              {item.nav}
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
              </a>
            ))}
          </div>
        </div>
        <div className='flex uppercase gap-x-8'>
          <p className='opacity-30'>/ Contact</p>
          <div className='flex flex-col gap-y-8 font-bold '>
            {contactDatas.map((item, i) => (
              <a href={item.link} key={i} className="button-styles group">
              {item.nav}
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[30rem] justify-between'>
        <button className="button-styles group font-bold flex justify-between items-center w-full text-xl">
          Contact Us
          <GoArrowDownRight className='text-3xl'/>
          <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
        </button>
          <div className='grid grid-cols-3 gap-x-8 gap-y-8 font-bold'>
            {socialDatas.map((item, i) => (
              <a href={item.link} target='_blank' key={i} className="button-styles group flex justify-start items-center gap-x-2">
              {item.icon && <item.icon weight="bold"/>}
              {item.nav}
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className='mt-32'>
        <Title variant={''}/>
      </div>
    </footer>
  )
}

export default Footer