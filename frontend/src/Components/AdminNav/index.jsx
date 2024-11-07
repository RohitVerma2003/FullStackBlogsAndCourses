import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='w-full bg-[#0f172a] h-12 flex justify-center items-center'>
      <div className='w-full text-white flex justify-center items-center'>
        <Link to={'/admin'} className='w-fit p-2 px-5 hover:border cursor-pointer rounded-full'>Add Blog</Link>
      </div>
      <div className='w-full text-white flex justify-center items-center'>
      <Link to={'/admin/scheduled'} className='w-fit p-2 px-5 hover:border cursor-pointer rounded-full'>Scheduled</Link>
      </div>
    </div>
  )
}

export default AdminNav
