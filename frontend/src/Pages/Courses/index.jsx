import React, { useEffect, useState } from 'react'
import CourseCard from '../../Components/CourseCard'
import toast from 'react-hot-toast';

const Courses = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/getCourses');
                const result = await response.json();
                setData(result);
            } catch (error) {
                toast.error("Failed to fetch data");
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className='w-full flex justify-center my-5'>
            <div className='w-[70%]'>
                <div className='text-xl md:text-3xl font-bold border-b py-2 mb-3 border-black'>Our Best Courses For You</div>
                <div className='flex justify-start gap-5 flex-wrap'>
                    {data.map((ele) => (
                        <CourseCard data={ele} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses
