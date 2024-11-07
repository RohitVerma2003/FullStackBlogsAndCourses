import React, { useState } from 'react'
import toast from 'react-hot-toast';

const AddBlog = () => {
    const [formData, setFormData] = useState({
        heading: "",
        description: "",
        time: "",
        thumbnail: "",
        blog: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        await fetch('http://localhost:4000/addBlog', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then(async (response) => {
            const resData = await response.json();
            if (response.ok) {
                toast.success(resData.message);
            } else {
                toast.error(resData.error);
            }
        })
            .catch(error => {
                console.error('Error:', error);
                toast.error('Failed to submit blog');
            });
    }
    return (
        <div className='flex justify-center'>
            <div className='w-[90%] md:w-[70%] my-8'>
                <div className='text-xl md:text-3xl font-bold border-b border-black pb-2 ps-2'>Add blog...</div>
                <div className='p-3 w-full'>
                    <form className='w-full' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="heading" className='cursor-pointer'>Heading <sup className='text-red-700'>*</sup></label><br />
                            <input type="text" name="heading" id="heading" required className='border border-black w-full mt-2 h-10 focus:outline-0 p-2' onChange={handleChange} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="description" className='cursor-pointer'>Description <sup className='text-red-700'>*</sup></label><br />
                            <input type="text" name="description" id="description" required className='border border-black w-full mt-2 h-10 focus:outline-0 p-2' onChange={handleChange} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="time" className='cursor-pointer'>Time to publish <small> (Leave blank if want to publish now)</small></label><br />
                            <input type='datetime-local' name="time" id="time" className='border border-black w-full mt-2 h-10 focus:outline-0 p-2' onChange={handleChange} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="thumbnail" className='cursor-pointer'>Thumbnail <sup className='text-red-700'>*</sup></label><br />
                            <input type='text' name="thumbnail" id="thumbnail" required className='border border-black w-full mt-2 h-10 focus:outline-0 p-2' onChange={handleChange} />
                        </div>

                        <div className='mt-5'>
                            <label htmlFor="blog" className='cursor-pointer'>Blog <sup className='text-red-700'>*</sup></label><br />
                            <textarea name="blog" id="blog" required className='border border-black w-full mt-2 focus:outline-0 p-2' onChange={handleChange} />
                        </div>

                        <button type='submit' className='w-full border border-black text-center my-3 p-2'>Submit</button>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
