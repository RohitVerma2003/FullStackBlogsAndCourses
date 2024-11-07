import React from 'react'

const BlogCard = ({ data }) => {
    let { heading, description, time, thumbnail } = data;

    return (
        <div className='border border-black w-full p-3 my-3 flex justify-between items-center hover:scale-105 transition-all cursor-pointer'>
            <div>
                <p className='text-sm font-thin mt-2'>Admin</p>
                <div className='font-bold text-lg md:text-2xl mt-2'>{heading?.substring(0 , 40) + "..."}</div>
                <p className='text-gray-800 mt-2 text-sm md:text-base'>{description?.substring(0 , 70) + "..."}</p>
                <p className='text-xs md:text-sm font-thin mt-2'>{Date(time).toString().substring(4 , 15) || Date().toString().substring(4 , 15)}</p>
            </div>
            <div className='w-[100%] p-2 md:w-[25%] md:p-0'>
                <img className='object-contain' src={`../images/${thumbnail}`} alt="..." />
            </div>
        </div>
    )
}

export default BlogCard
