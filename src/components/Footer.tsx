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
              <a target='_blank' href={item.link} key={i} className="button-styles group">
              {item.nav}
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
              </a>
            ))}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.7719336810014!2d110.469849!3d-7.0360695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f50067b80bab%3A0x95a21b475de95bb0!2sXedia%20Media!5e0!3m2!1sen!2sid!4v1733216219258!5m2!1sen!2sid"   loading="lazy"  className='w-[15rem] h-[10rem]'></iframe>
          </div>
        </div>
      </div>
      <div className='flex flex-col w-[30rem] justify-between'>
        <a href="https://wa.me/6282328713200" target="_blank" className="button-styles group font-bold flex justify-between items-center w-full text-xl">
          Contact Us
          <GoArrowDownRight className='text-3xl'/>
          <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
        </a>
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