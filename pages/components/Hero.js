import React from 'react'
import { motion } from 'framer-motion'
import { GrNext} from 'react-icons/gr'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='flex flex-col space-y-10 items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
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
        }}   className='font-michroma text-4xl text-slate-900 md:text-5xl px-4'>Hello there, I&apos;m Aaron.</motion.h1>
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
        }}   className='font-michroma font-bold text-md text-slate-900 md:text-xl tracking-[6px] md:tracking-[8px] px-4'>SOFTWARE ENGINEER</motion.h2>

        <motion.button initial='hidden' animate='visible' variants={{
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
        }} 
        className='py-2 px-4  border-2 border-slate-900 rounded-md text-slate-900 tracking-widest hover:bg-slate-900  hover:text-white hover:border-transparent transition duration-300'>
            <a className='font-michroma' href='/AaronResume.pdf' download>RESUME</a>
        </motion.button>

        

        <div className='absolute bottom-10 right-6'>
            <Link href='/about' className='flex items-center space-x-2 md:space-x-4'>
               <p className='font-michroma text-lg md:text-2xl'>About</p>
               <GrNext size={25} color='#0f172a'/>
            </Link>
            
        </div>
    </div>
  )
}

export default Hero