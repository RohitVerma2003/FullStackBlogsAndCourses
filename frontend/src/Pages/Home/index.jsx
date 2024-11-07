import React from 'react'
import Navbar from '../../Components/Navbar'
import Blogs from '../Blogs'
import Courses from '../Courses'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Outlet/>
    </div>
  )
}

export default Home
