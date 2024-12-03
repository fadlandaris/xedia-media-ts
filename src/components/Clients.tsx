import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { clients } from '../data/data';

const Clients: React.FC = () => {
  const [clientsData] = useState(clients);

  return (
    <section className='px-16 md:py-32 py-16' id='clients'>
      <div className='flex justify-between items-center text-2xl md:text-5xl font-extrabold'>
        <h2>Trusted Clients</h2>
        {/* <div className='h-[2px] w-[5rem] bg-white opacity-30'/> */}
        <h2 className='uppercase opacity-30 '>xedia media</h2>
      </div>
      <div className='md:mt-32 mt-8 grid grid-cols-1 gap-y-4 cursor-pointer'>
        <Marquee autoFill={true} pauseOnHover={true}  >
        {clientsData.slice(0, 1).map((item, i) => (
          <div key={i} className='flex'>
            {item.images.map((img, i) => (
              <img key={i} src={img} alt={img} className='w-36 mx-8 ' />
            ))}
          </div>
        ))}
        </Marquee>
      
        <Marquee autoFill={true} pauseOnHover={true} direction='right' >
        {clientsData.slice(1, 2).map((item, i) => (
          <div key={i} className='flex'>
            {item.images.map((img, i) => (
              <img key={i} src={img} alt={img} className='w-36 mx-8 ' />
            ))}
          </div>
        ))}
        </Marquee>

      <Marquee autoFill={true} pauseOnHover={true} >
        {clientsData.slice(2, 3).map((item, i) => (
          <div key={i} className='flex'>
            {item.images.map((img, i) => (
              <img key={i} src={img} alt={img} className='w-36 mx-8 ' />
            ))}
          </div>
        ))}
        </Marquee>

      </div>
    </section>
  );
};

export default Clients;
