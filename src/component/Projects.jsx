import React from 'react'

export default function Projects() {
  return (
    <div>
       <h1 className='text-left text-blue-900 pl-10 font-bold text-3xl pt-20'>PROJECTS</h1>
       <ul className='text-white pl-20 pt-5 text-md list-disc'>
        <li><a href="https://nithakm8.github.io/puma/" className='hover:text-blue-900'>Puma Site</a></li>
        <p className='text-sm text-gray-600'>This project is a recreation of the official Puma website,focuing on layout and user-friendly design.</p>
        <li className='hover:text-blue-900'><a href="">E-Commerce Site</a></li>
        <p className='text-sm text-gray-600'>An e-commerce website that allows users to browse products and shop online through a simple and user-friendly interface</p>
        <li className='hover:text-blue-900'><a href="">Doctor Appointment Management System</a></li>
        <p className='text-sm text-gray-600'>Doctor Appointment Management System is a web application that helps patients book appointments with doctors easily and allows doctors to manage their schedules efficiently.</p>
       </ul>

    </div>
  )
}
