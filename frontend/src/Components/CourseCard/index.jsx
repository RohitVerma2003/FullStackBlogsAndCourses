import React from 'react'
import { Link } from 'react-router-dom'

const CourseCard = ({data}) => {
    return (
        <div className='border border-black p-3 w-[100%] md:w-[31%] hover:scale-105 transition-all cursor-pointer'>
            <Link to={`/courseDetail`} state={{data}}>
                <div className='w-full'><img className='object-cover' src={`/images/${data.image}`} alt="..." /></div>
                <div className='mt-2 font-bold'>{data.title}</div>
                <div className='mt-2 text-sm'>{data.mentor}</div>
                <div className='mt-2 flex gap-2 items-center'>
                    <div className='text-sm'>{data.rating}</div>
                    <div className='w-3'><img src="./images/star.png" alt="star" /></div>
                    <div className='text-sm text-gray-600'>({data.votes})</div>
                </div>
                <div className='mt-2 font-bold'>${data.amount}</div>
            </Link>
        </div>
    )
}

export default CourseCard
