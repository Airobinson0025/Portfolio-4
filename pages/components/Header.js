import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Header = () => {

    const [ dropMenu, setDropMenu ] = useState(false)

    const handleClick = () => {
        setDropMenu(!dropMenu)
    }



  return (
    <div className='flex justify-between items-center p-6 sm:p-6 w-full fixed'>
        <motion.div initial='hidden' animate='visible' variants={{
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
        }}  className=''>
            <Link href='/'>
               <h1 className='font-michroma text-xl sm:text-2xl text-slate-600  bg-[rgba(0,0,0,0.09)] backdrop-blur-[10px] py-2 px-2 rounded-xl shadow-lg shadow-slate-600'>AR</h1>
            </Link>
        </motion.div>

        

            <motion.div initial='hidden' animate='visible' variants={{
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
        }}  className='hidden sm:inline sm:text-[1.1rem] md:text-[1.3rem] pl-6'>
                <ul className='flex font-michroma text-md text-slate-600 space-x-12'>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <Link href='/about'>About</Link>
                    </li>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <Link href='/expertise'>Expertise</Link>
                    </li>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </motion.div>

            <div className='sm:hidden'>
                <button onClick={handleClick} className='py-2 px-2  rounded-xl'>
                {dropMenu ? undefined : <AiOutlineMenu size={33} color='#475569'/>}
                </button>
            </div>

            <div className={dropMenu ? 'sm:hidden m-0 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center text-slate-200 w-full h-screen bg-slate-400 ease-in-out duration-200 tracking-widest' : 'sm:hidden absolute top-0 bottom-0 left-[-800px] right-0 flex justify-center items-center text-center text-stone-800 w-full h-screen bg-white ease-out duration-300'}>

            <button onClick={handleClick} className='py-2 px-2 rounded-xl absolute top-[24px] right-[24px]'>
            {dropMenu ? <AiOutlineClose size={33} color='#e2e8f0'/> : null }
            </button>

                <ul className='font-michroma text-3xl space-y-14'>
                    <li onClick={handleClick}>
                        <Link href='/about'>About</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href='/expertise'>Expertise</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li onClick={handleClick}>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            


                
            </div>





        
    </div>
  )
}

export default Header