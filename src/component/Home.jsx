import React from 'react'
import About from './About'
export default function Home() {
  return (
    <div className='bg-slate-900 '>
      <section id='home' className='flex flex-col md:flex-row justify-between items-center pt-10 px-6 md:px-20 gap-10 md:gap-40'>
        <div className='text-center md:text-left'>
            <h2 className='text-3xl md:text-5xl text-white font-bold mb-4'>Hi, I'm NITHA K M</h2>
            <p className='font-bold text-gray-600 max-w-md'>I'm a MERN full stack developer,build modern web applications using </p>
              <h6 className='text-gray-500 mt-4'> MongoDB | Express | React | Angular | Node.js | TailwindCSS </h6>
        </div>
        <div className='w-full max-w-xs'>
            <About/>
        </div>
      </section>
    </div>
  )
}
