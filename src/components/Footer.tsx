import React from 'react'
import { dataProps } from '../types/type'
// import { GoArrowDownRight } from "react-icons/go";
import {COLOR} from "../assets/assets"
import Title from './Title';

interface props {
  // navDatas: dataProps[]
  contactDatas: dataProps[]
  socialDatas: dataProps[]
}

const Footer: React.FC<props> = ({ contactDatas, socialDatas}) => {
  // console.log(navData)

  return (
    <footer className=' md:px-16 px-10 ' id='footer'>
     <div className='md:flex justify-between'>
      <div className='md:flex justify-start gap-x-16'>
        {/* <div className=''>
          <img src={WHITE} alt="" className='w-36 hover:w-40 transition-all duration-500 cursor-pointer ' />
        </div> */}
        {/* <div className='md:flex border-2 uppercase gap-x-8 my-16 md:my-0'>
          <p className='opacity-30 mb-4 md:mb-0'>menu</p>
          <div className='flex flex-col gap-y-8 font-bold '>
            {navDatas.map((item, i) => (
              <a href={`#${item.link}`} key={i} className="button-styles group">
              {item.nav}
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
              </a>
            ))}
          </div>
        </div> */}
        <div className='md:flex uppercase gap-x-8 mb-16 md:mb-0'>
          {/* <p className='opacity-30 mb-4 md:mb-0'>Contact</p> */}
          <div className='flex flex-col w-1/2 gap-y-8  '>
            {contactDatas.map((item, i) => (
              <a target='_blank' href={item.link} key={i} className=" button-styles group">
              {item.nav}
              <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
              </a>
            ))}
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3959.7719336810014!2d110.469849!3d-7.0360695!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f50067b80bab%3A0x95a21b475de95bb0!2sXedia%20Media!5e0!3m2!1sen!2sid!4v1733216219258!5m2!1sen!2sid"   loading="lazy"  className='h-[10rem]'></iframe>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:w-[30rem] justify-between'>
        {/* <a href="https://wa.me/6282328713200" target="_blank" className="mb-8 md:mb-0 button-styles group  flex justify-between items-center w-full text-xl">
          Contact Us
          <GoArrowDownRight className='text-3xl'/>
          <div className="div-underline group-hover:opacity-100 group-hover:w-[100%]"/>
        </a> */}
        <img src={COLOR} alt="" />
          <div className='grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8 '>
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