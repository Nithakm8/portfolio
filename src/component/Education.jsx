import React from 'react'

export default function Education() {
  return (
    <div>
        <h1 className='text-left text-blue-900 pl-10 font-bold text-3xl pt-10'>EDUCATION</h1>
        <ul className='text-white pl-20 pt-5 text-md list-disc '>
            <li className='hover:text-blue-900'>MERN Stack Internship</li>
                <p className='text-sm text-gray-600'>Currently doing an internship in MERN stack development.</p>
                <p className='text-sm text-gray-600'>Organization : Synnefo Solutions</p>
            <li className='hover:text-blue-900'>Master of Computer Applications(MCA)
                <p className='text-sm text-gray-600'>Studied advanced computer applications and software development concepts.</p>
                <p  className='text-sm text-gray-600'>University : Mahatma Gandhi University</p>
                <p className='text-sm text-gray-600'>Year : 2014-2017</p>
                <p className='text-sm text-gray-600'>Percentage : 61.07%</p>
            </li>
            <li className='hover:text-blue-900'>Bachelor of Computer Applications(BCA)
                <p className='text-sm text-gray-600'>Learned the fundamentals of programming and web development.</p>
                <p  className='text-sm text-gray-600'>University : Amrita Vishwa Vidyapeetham University University</p>
                <p className='text-sm text-gray-600'>Year : 2011-2014</p>
                <p className='text-sm text-gray-600'>Percentage : 57.10%</p>
            </li>
      </ul>
    </div>
  )
}
