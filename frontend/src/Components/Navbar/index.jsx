import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-[#0f172a] h-12 flex justify-center items-center'>
      <div className='w-full text-white flex justify-center items-center'>
        <Link to={'/'} className='w-fit p-2 px-5 hover:border cursor-pointer rounded-full'>Blogs</Link>
      </div>
      <div className='w-full text-white flex justify-center items-center'>
      <Link to={'/courses'} className='w-fit p-2 px-5 hover:border cursor-pointer rounded-full'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar
