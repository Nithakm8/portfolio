import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export default function Contacts() {
  return (
      <div id='contact'>
        <h1 className=' text-left text-blue-900  pl-10 font-bold text-3xl pt-10'>CONTACTS</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center pt-20 pr-10  gap-10 '>
          <div className='w-sm h-30 flex  flex-col items-center justify-center items-center text-white  cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
          <FaPhoneAlt className='max-w-full block w-25 h-25 pr-7 pl-10 pl-5  rounded-md shadow-lg shadow-blue-900 text-white'/>+919446539042
          </div>
          <div className='w-sm h-30 flex  flex-col justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
          <a href="https://www.linkedin.com/in/nitha-k-m-6585862b9" target='_blank' rel=''><FaLinkedin className='max-w-full block w-25 h-25 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white' />   </a> 
          </div>
          <div className='w-sm h-30 flex flex-col justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
          <a href="mailto:nithakm8@gmail.com" target='_blank' rel=''><SiGmail className='max-w-full block w-25 h-25 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/> </a> 
          </div>
          <div className='w-sm h-30 flex flex-col justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
          <a href="https://github.com/Nithakm8" target='_blank' rel=''><FaGithub className='max-w-full block w-25 h-25 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>  </a>
          </div>
        </div>
        <br />
    </div>
    
  )
}
