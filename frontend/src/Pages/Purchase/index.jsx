import React from 'react'
import toast from 'react-hot-toast'
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const params = useParams();
    const {courseId} = params;

    return (
        <div className='w-full h-[100vh] flex justify-center items-center'>
            <div className='w-[80%] md:w-[40%] border border-black p-8'>
                <div className='text-4xl border-b border-black mb-5 text-center'>Purchase</div>
                <div className='w-[100%] flex flex-col justify-center items-center'>
                    <div className='w-[80%]'>
                        <img className='w-full object-cover' src="../images/img1.jpg" alt="..." />
                    </div>
                    <div className='mt-3 w-[80%] text-center p-3'>
                        The Complete 2024 Web Development Bootcamp
                    </div>
                </div>
                <Link to={`/mailVerify/${courseId}`}><div className='border border-black p-2 mt-2 hover:scale-110 cursor-pointer transition-all'>Pay via UPI</div></Link>
                <Link to={`/mailVerify/${courseId}`}><div className='border border-black p-2 mt-2 hover:scale-110 cursor-pointer transition-all'>Pay via Credit Card</div></Link>
                <Link to={`/mailVerify/${courseId}`}><div className='border border-black p-2 mt-2 hover:scale-110 cursor-pointer transition-all'>Pay via Debit Card</div></Link>
            </div>
        </div>
    )
}

export default Purchase
