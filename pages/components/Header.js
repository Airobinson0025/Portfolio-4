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
        <div className=''>
            <Link href='/'>
               <h1 className='font-michroma text-xl sm:text-2xl md:text-3xl text-slate-900  bg-[rgba(0,0,0,0.09)] backdrop-blur-[10px] py-2 px-2 rounded-xl border-2 border-slate-900'>AR.</h1>
            </Link>
        </div>

        

            <div className='hidden sm:inline sm:text-[1.1rem] md:text-[1.3rem] pl-6'>
                <ul className='flex font-michroma text-md text-slate-900 space-x-12'>
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
            </div>

            <div className='sm:hidden'>
                <button onClick={handleClick} className='py-2 px-2  rounded-xl'>
                {dropMenu ? undefined : <AiOutlineMenu size={33} color='black'/>}
                </button>
            </div>

            <div className={dropMenu ? 'sm:hidden m-0 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center text-slate-900 w-full h-screen bg-[rgba(0,0,0,0.09)] backdrop-blur-[20px] ease-in-out duration-200 tracking-widest' : 'sm:hidden absolute top-0 bottom-0 left-[-800px] right-0 flex justify-center items-center text-center text-stone-800 w-full h-screen bg-white ease-out duration-300'}>

            <button onClick={handleClick} className='py-2 px-2 rounded-xl absolute top-[24px] right-[24px]'>
            {dropMenu ? <AiOutlineClose size={33} color='black'/> : null }
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