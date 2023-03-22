import React from 'react'
import { SocialIcon } from 'react-social-icons'


const Socials = () => {
  return (
    <div className='flex flex-col items-center space-y-4'>
        <SocialIcon 
        url='https://www.linkedin.com/in/aaron-robinson-b3949425b/'
        target='_blank'
        bgColor='#0f172a'
         />
         <SocialIcon 
        url='https://github.com/Airobinson0025'
        target='_blank'
        bgColor='#0f172a'
         />
         
        
    </div>
  )
}

export default Socials