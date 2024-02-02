import React from 'react'
import { useLocation } from 'react-router-dom'

const NofoundPage = () => {
  const some = useLocation()
  console.log(some.pathname)
  return (
    <div className='flex flex-col items-center justify-center h-[70vh]'>
      <div>
        <span className='text-base md:text-xl lg:text-2xl'>{some.pathname}</span>
        <p className='text-3xl sm:text-4xl lg:text-7xl font-bold text-neutral-700'>Not Found <span className='text-4xl sm:text-5xl lg:text-8xl'>404</span></p> 
      </div>
    </div>
  )
}

export default NofoundPage
