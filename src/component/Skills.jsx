import React from 'react'
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { SiAngular } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

export default function Skills() {
  return (
    <div id='skills'>
      <h1 className=' text-left text-blue-900 pl-10 font-bold text-3xl pt-10'>SKILLS</h1>

      <div className='flex  gap-8  pt-20 pl-10'>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
        <TiHtml5 className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>
        </div>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
         <IoLogoCss3 className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white' />   
        </div>
         <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
           <FaJsSquare className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>  
        </div>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
          <FaNodeJs className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>  
        </div>
        </div>


        <div className='flex pt-30 pl-10'>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
          <SiMongodb className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>   
        </div>
        <div className='w-sm h-30 flex justify-center items-center  border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
            <SiExpress className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>

        </div>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
         <FaReact className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white' />   
        </div>
       <div className='w-sm h-30 flex justify-center items-center  border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
           <SiAngular className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>  
        </div>
      </div>
      <div  className='flex pt-30 pl-10'>
        <div className='w-sm h-30 flex justify-center items-center  border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
           <SiTailwindcss className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900 text-white'/>  
        </div> 
      </div>
    </div>
  )
}
