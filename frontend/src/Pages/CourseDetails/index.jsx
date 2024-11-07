import React from 'react'
import CourseCard from '../../Components/CourseCard'
import { Link, useLocation } from 'react-router-dom'

const CourseDetails = () => {
    const location = useLocation();
    const data = location.state.data;

    return (
        <div className='flex flex-wrap-reverse justify-center my-5 gap-10'>
            <div className='w-[90%] md:w-[60%] ps-5'>
                <div className='text-xl md:text-3xl font-extrabold'>{data.title}</div>
                <div className='mt-2'>{data.description}</div>
                <div className='font-thin mt-2'>{data.mentor}</div>
                <div className='mt-2 flex gap-2 items-center'>
                    <div className='text-sm'>{data.rating}</div>
                    <div className='w-3'><img src="./images/star.png" alt="star" /></div>
                    <div className='text-sm text-gray-600'>({data.votes})</div>
                </div>
                <div className='mt-10 p-5 border border-black'>
                    <div className='text-xl md:text-2xl font-bold border-b border-black'>What you'll learn</div>
                    <ul className='mt-5 list-disc list-inside'>
                        {JSON.parse(data.learn)?.map((ele, index) => (
                            <li key={index} className='text-sm'>{ele}</li>
                        ))}
                    </ul>
                </div>
                <div className='mt-10 p-5 border border-black'>
                    <div className='text-xl md:text-2xl font-bold border-b border-black'>This course includes:</div>
                    <ul className='mt-5 list-disc list-inside'>
                        {JSON.parse(data.includes)?.map((ele, index) => (
                            <li key={index} className='text-sm'>{ele}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='w-[80%] md:w-[35%] flex flex-col items-center'>
                <div className='w-full md:w-[80%]'>
                    <img className='w-full object-cover' src={`./images/${data.image}`} alt="..." />
                </div>
                <div className='mt-3 border border-black w-[80%] text-center p-3 hover:scale-105 transition-all cursor-pointer'>
                    <Link to={`/purchase/${data.id}`}>Buy For ${data.amount}</Link>
                </div>
            </div>
        </div>
    )
}

export default CourseDetails
