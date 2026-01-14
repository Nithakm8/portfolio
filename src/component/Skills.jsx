import React from 'react'

export default function Skills() {
  return (
    <div>
      <h1 className='text-left text-blue-900 pl-10 font-bold text-3xl'>SKILLS</h1>

      <div className='flex gap-8  pt-10 pl-10'>
        <div className=' w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
            <img src="/HTML5.png" alt="html5" className='max-w-full block w-50 h-40 pr-7 pl-10 pl-5 rounded-md shadow-lg shadow-blue-900'/>
        </div>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
             <img src="/CSS3.webp" alt="css3" className='max-w-full block w-50 h-40 pr-7 pl-10  pl-5 rounded-md shadow-lg shadow-blue-900'/>
        </div>
         <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
             <img src="/javascript.png" alt="css3" className='max-w-full block w-50 h-40 pr-7 pl-10  pl-5 rounded-md shadow-lg shadow-blue-900'/>
        </div>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
             <img src="/node.png" alt="css3" className='max-w-full block w-50 h-40 pr-7 pl-10  pl-5 rounded-md shadow-lg shadow-blue-900'/>
        </div>
        </div>
        <div className='flex pt-30 pl-10'>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
             <img src="/express-js.png" alt="css3" className='max-w-full block w-50 h-40 rounded-md shadow-lg shadow-blue-900'/>
        </div>
        <div className='w-sm h-30 flex justify-center items-center  border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
             <img src="/react.js.png" alt="css3" className='max-w-full block w-50 h-40  rounded-md shadow-lg shadow-blue-900'/>
        </div>
        <div className='w-sm h-30 flex justify-center items-center border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg '>
             <img src="/Angular.png" alt="css3" className='max-w-full block w-50 h-40  rounded-md shadow-lg shadow-blue-900'/>
        </div>
       <div className='w-sm h-30 flex justify-center items-center  border cursor-pointer transform transition-all duration-200 hover:scale-105 hover:shadow-lg'>
             <img src="/tailwind.jpg" alt="css3" className='max-w-full block w-50 h-40  rounded-md shadow-lg shadow-blue-900'/>
        </div>
      </div>
    </div>
  )
}
