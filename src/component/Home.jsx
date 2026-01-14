import React from 'react'
import About from './About'
export default function Home() {
  return (
    <div>
      <section id='home' className='flex justify-left items-center pt-10 ml-10 rounded gap-80'>
        <div className='intro'>
            <h2 className='text-2xl text-white font-bold mb-4'>Hi, I'm NITHA K M</h2>
            <p className='font-bold text-gray-600'>I'm a MERN full stack developer,build modern web applications using </p>
              <h6 className='text-gray-500'> MongoDB | Express | React | Angular | Node.js | TailwindCSS </h6>
        </div>
        <div className='profile1'>
            <About/>
        </div>
      </section>
    </div>
  )
}
