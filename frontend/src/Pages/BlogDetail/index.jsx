import React from 'react'
import Blogs from '../Blogs'
import { useLocation } from 'react-router-dom'

const BlogDetail = () => {
    const location = useLocation();
    const data = location.state.ele;
    const { heading, time, thumbnail, blog } = data;
    return (
        < div className='w-full flex justify-center my-5' >
            <div className='w-[90%] md:w-[50%]'>
                <div className='text-2xl md:text-4xl font-extrabold'>{heading}</div>
                <div className='font-thin mt-3'>Admin</div>
                <div className='font-thin text-sm'>{Date(time).toString().substring(4 , 15) || Date().toString().substring(4, 15)}</div>
                <div className='mt-5 flex justify-center'>
                    <img className='w-[75%] object-contain' src={`./images/${thumbnail}`} alt="..." />
                </div>
                <div className='mt-3 text-justify'>
                    {blog}
                </div>
                <div className='mt-8 w-[100%]'>
                    <Blogs width={"100%"} id={data.id}/>
                </div>
            </div>
        </div >
    )
}

export default BlogDetail
