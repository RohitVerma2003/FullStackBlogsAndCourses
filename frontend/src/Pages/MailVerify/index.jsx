import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from '../../Components/Loader';

const MailVerify = () => {
    const [email, setEmail] = useState("");
    const [show, setShow] = useState(true);
    const params = useParams();
    const { courseId } = params;
    const navigate = useNavigate();

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = async (e) => {
        setShow(false);
        e.preventDefault();

        await fetch('http://localhost:4000/generateOtp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "email": email,
            }),
        }).then(async (response) => {
            const resData = await response.json();
            if (response.ok) {
                toast.success(resData.message);
                navigate(`/optVerify/${email}/${courseId}`)
            } else {
                toast.error(resData.error);
            }
            setShow(true);
        })
            .catch(error => {
                console.error('Error:', error);
                toast.error(error);
                setShow(true);
            });
    }

    return (
        <div className='w-full h-[80vh] flex justify-center items-center'>
            <div className='w-[80%] md:w-[30%] h-[30%] border border-black p-3'>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email" className='cursor-pointer'>Enter Email <small className='text-red-700'>*</small></label><br />
                    <input type="email" name="email" id="email" required className='border border-black w-full mt-2 h-10 focus:outline-0 p-2' onChange={handleChange} />

                    {show ? <button type='submit' disabled={!show} className='w-full border border-black text-center my-3 p-2'>Submit</button> :
                        <button disabled={!show} className='w-full border border-black text-center my-3 p-2 flex justify-center'><Loader /></button>}
                </form>
            </div>
        </div>
    )
}

export default MailVerify
