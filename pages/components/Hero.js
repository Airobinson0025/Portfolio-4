import React from 'react'
import { motion } from 'framer-motion'
import { BsArrowRightSquare } from 'react-icons/bs'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='h-screen bg-fixed bg-center bg-cover custom-img'>
    <div className='flex flex-col space-y-10 items-center justify-center h-screen'>
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
        }}   className='font-michroma text-4xl text-slate-600 md:text-5xl px-4'>Hello there, I&apos;m Aaron.</motion.h1>
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
        }}   className='font-michroma font-bold text-md text-sky-200 md:text-xl tracking-[6px] md:tracking-[8px] px-4'>SOFTWARE ENGINEER</motion.h2>

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
        }} whileHover={{ scale: 1.1, transition: { duration: 0.1 }}} whileTap={{ scale: 0.9 }}
        className='py-2 px-4 bg-slate-600 shadow-lg shadow-slate-600 rounded-md text-slate-200 tracking-widest hover:bg-[rgba(0,0,0,0.09)] hover:backdrop-blur-[10px] hover:shadow-sky-200 hover:text-sky-200 hover:border-transparent transition duration-75'>
            <a className='font-michroma' href='/AaronResume.pdf' download>RESUME</a>
        </motion.button>

        </div>

        

        <div className='absolute bottom-10 right-6 py-2 px-2'>
            <Link href='/about' className='flex items-center md:space-x-2'>
               <p className='font-michroma text-slate-600 hover:text-sky-200 text-xl md:text-2xl transition duration-300 hidden sm:inline'>Next</p>
               <BsArrowRightSquare size={45} fill='#475569'/>
            </Link>
            
        </div>
    
    </div>
  )
}

export default Hero