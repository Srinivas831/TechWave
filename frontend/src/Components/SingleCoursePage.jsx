import { useEffect, useState } from 'react'
import SingleCourseExt from './SingleCourseExt';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleCoursePage = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    const fetchData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/courses/${id}`)
           .then((res)=>setData(res.data.course))
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    console.log(data);

    return (
        <>
            {
                data && <SingleCourseExt key={data.id} {...data} />
            }
        </>
    )
}

export default SingleCoursePage