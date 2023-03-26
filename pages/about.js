import React from 'react'
import Image from 'next/image'
import { BsArrowDown } from 'react-icons/bs'

const about = () => {
  return (
    <div className='h-screen bg-fixed bg-center bg-cover custom-img'>
        <div className='flex flex-col '>
            <div className='flex flex-col items-center space-y-10 mt-40 sm:mt-50 md:mt-60'>
                <div className='rounded-xl'>
                   <Image src='/myface.jpg' alt='about-image' width={300} height={300}
                   className='rounded-lg shadow-lg shadow-slate-500/50' />
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default about