import React, { useEffect, useState } from 'react'
import BlogCard from '../../Components/BlogCard'
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Blogs = ({ width = "50%", id = -1 }) => {
    const [data, setData] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4000/blogs');
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
            <div className={` w-[80%] md:w-[${width}]`}>
                <div className='md:text-3xl text-xl font-bold border-b py-2 border-black'>Our Best Blogs For You</div>
                {data?.map((ele) => {
                    if (id !== ele.id && Date.parse(ele.time.toString()) < Date.parse(Date().toString())) return <Link to={'/blogDetail'} state={{ ele }} key={ele.id}><BlogCard key={ele.id} data={ele} /></Link>
                })}
            </div>
        </div>
    )
}

export default Blogs
