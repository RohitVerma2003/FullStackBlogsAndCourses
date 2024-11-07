import React, { useEffect, useState } from 'react'
import BlogCard from '../../Components/BlogCard';
import { Link } from 'react-router-dom';

const ScheduledBlog = ({width = '50%'}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/blogs')
            .then(res => res.json())
            .then((data) => { setData(data); console.log(data) })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='w-full flex justify-center my-5'>
            <div className={`w-[90%] md:w-[${width}]`}>
                <div className='text-xl md:text-3xl font-bold border-b py-2 border-black'>Scheduled Blogs</div>
                {data.map((ele) => {
                    if (Date.parse(ele.time.toString()) > Date.parse(Date().toString())) return <Link key={ele.id} to={'/blogDetail'} state={{ ele }}><BlogCard data={ele} /></Link>
                })}
            </div>
        </div>
    )
}

export default ScheduledBlog
