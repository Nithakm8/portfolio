import React from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

export default function Contacts() {
  return (
    <div id='contacts'>
         <h1 className='text-left text-blue-900 pl-10 font-bold text-3xl pt-10'>CONTACTS</h1>
        <div className=' rounded-md border-2  border-blue-800 w-7xl h-27 ml-10  shadow-30 mt-10 flex justify-center items-center'>
            <ul className=' flex justify-between items-center text-white pl-20 pt-5 text-md '>
                <FaPhoneAlt className='text-white pt-1'/><li className='hover:text-blue-900'>+91 9446539042</li>
                <li className='flex items-center'><a href="https://www.linkedin.com/in/nitha-k-m-6585862b9" target='_blank' rel=''><FaLinkedin className='text-white w-md h-7 hover:text-blue-900' /></a></li>
                <li className='flex items-center'><a href="mailto:nithakm8@gmail.com" target='_blank' rel=''><SiGmail className='w:lg h-25 text-white pt-1 hover:text-blue-900'/></a></li>
                <li className='flex items-center'><a href="https://github.com/Nithakm8" target='_blank' rel=''><FaGithub className='w:lg h-25 text-white ml-50 pt-1 hover:text-blue-900 '/></a></li>
            </ul>
        </div>
        <br />
    </div>
  )
}
