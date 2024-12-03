import React from 'react'

interface dataProps {
  variant: string
}

const Title: React.FC<dataProps> = ({variant}) => {
  return (
    <div className='mt-10 text-[10px] opacity-30'>
        <div className={`${variant === 'hero' ? 'w-[70%]' : 'w-full'} h-[1px] bg-white`}/>
        <div className='flex justify-between mt-10 uppercase'>
          <p>x</p>
          <p>e</p>
          <p>d</p>
          <p>i</p>
          <p>a</p>
          <p>m</p>
          <p>e</p>
          <p>d</p>
          <p>i</p>
          <p>a</p>
          <p>x</p>
          <p>e</p>
          <p>d</p>
          <p>i</p>
          <p>a</p>
          {/* <p>m</p>
          <p>e</p>
          <p>d</p>
          <p>i</p>
          <p>a</p> */}
        </div>
      </div>
  )
}

export default Title