import React from 'react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <div className='flex flex-col space-y-16 items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
        <motion.h1 
        initial='hidden' animate='visible' variants={{
            hidden: {
                scale: .9,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1.0
                }
            }
        }}   className='font-michroma text-4xl md:text-5xl px-4'>Hello there, I&apos;m Aaron.</motion.h1>
        <motion.h2 
        initial='hidden' animate='visible' variants={{
            hidden: {
                scale: .9,
                opacity: 0
            },
            visible: {
                scale: 1,
                opacity: 1,
                transition: {
                    duration: 1.0
                }
            }
        }}   className='font-michroma font-bold text-md text-black md:text-xl tracking-[5px] md:tracking-[6px]'>SOFTWARE ENGINEER</motion.h2>
    </div>
  )
}

export default Hero