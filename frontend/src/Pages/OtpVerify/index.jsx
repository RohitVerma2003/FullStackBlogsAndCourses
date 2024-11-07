import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Components/Loader';

const OtpVerify = () => {
    const [otp, setOtp] = useState(0);
    const [show, setShow] = useState(true);
    const params = useParams();

    const navigate = useNavigate();

    const {email , courseId} = params;

    const handleChange = (e) => {
        setOtp(e.target.value);
    }

    const handleSubmit = async (e) => {
        setShow(false);
        e.preventDefault();
        console.log(email);

        await fetch('http://localhost:4000/verifyOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "otp": otp,
                "email" : email,
                "courseId" : courseId
            }),
        }).then(async (response) => {
            const resData = await response.json();
            if (response.ok) {
                toast.success(resData.message);
                console.log(resData.message)
                navigate('/courses');
            } else {
                toast.error(resData.error);
            }
            setShow(true);
        }).catch(error => {
            console.error('Error:', error);
            toast.error(error);
            setShow(true);
        });
    }

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className='w-[80%] md:w-[30%] h-[30%] border border-black p-3'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="otp" className='cursor-pointer'>Enter OTP <small className='text-red-700'>*</small></label><br />
                    <input type='number' name="otp" id="otp" required className='border border-black w-full mt-2 h-10 focus:outline-0 p-2' onChange={handleChange} />

                    {show ? <button type='submit' disabled={!show} className='w-full border border-black text-center my-3 p-2'>Submit</button> : 
                    <button disabled={!show} className='w-full border border-black text-center my-3 p-2 flex justify-center'><Loader /></button>}
                </form>
            </div>
        </div>
    )
}

export default OtpVerify
