import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { motion } from 'framer-motion'

const Header = () => {

    const [ dropMenu, setDropMenu ] = useState(false)

    const handleClick = () => {
        setDropMenu(!dropMenu)
    }



  return (
    <div className='flex justify-between items-center p-6 sm:p-6 w-full fixed'>
        <div className=''>
            <h1 className='font-michroma text-3xl '>AR.</h1>
        </div>

        

            <div className='hidden sm:inline sm:text-[1.2rem] md:text-[1.4rem] pl-6'>
                <ul className='flex font-michroma text-md space-x-12'>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <a href='#expertise'>Expertise</a>
                    </li>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <a href='#work'>Work</a>
                    </li>
                    <li className='tracking-wide link-underline link-underline-black'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>

            <div className='sm:hidden'>
                <button onClick={handleClick} className='py-2 px-2  rounded-xl'>
                {dropMenu ? undefined : <AiOutlineMenu size={33} color='black'/>}
                </button>
            </div>

            <div className={dropMenu ? 'sm:hidden m-0 absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center text-center text-black w-full h-screen bg-[rgba(0,0,0,0.09)] backdrop-blur-[20px] ease-in-out duration-200 tracking-widest' : 'sm:hidden absolute top-0 bottom-0 left-[-800px] right-0 flex justify-center items-center text-center text-stone-800 w-full h-screen bg-white ease-out duration-300'}>

            <button onClick={handleClick} className='py-2 px-2 rounded-xl absolute top-[24px] right-[24px]'>
            {dropMenu ? <AiOutlineClose size={33} color='black'/> : null }
            </button>

                <ul className='font-michroma text-3xl space-y-14'>
                    <li onClick={handleClick}>
                        <a href='#about'>About</a>
                    </li>
                    <li onClick={handleClick}>
                        <a href='#expertise'>Expertise</a>
                    </li>
                    <li onClick={handleClick}>
                        <a href='#work'>Work</a>
                    </li>
                    <li onClick={handleClick}>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            


                
            </div>





        
    </div>
  )
}

export default Header