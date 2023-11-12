import { useEffect, useState } from 'react'
import SingleCourseExt from './SingleCourseExt';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { url } from '../api';

const SingleCoursePage = () => {

    const url = "https://tech-wave-backend-server.onrender.com"
    
    const { id } = useParams();
    const [data, setData] = useState({});
    const[loading,setLoading]=useState(false);

    const fetchData = async () => {
        try {

            setLoading(true);
            const res = await axios.get(`${url}/courses/${id}`)
           .then((res)=>{
            setLoading(false)
            setData(res.data.course)
        })


        }
        catch (err) {
            console.log(err);
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    
   

    console.log("singel",data);

    return (
        <>
            {
                loading ? <div style={{display:"flex", justifyContent:"center", height:"50vh",alignItems:"center"}}>
                    <img src="https://media.tenor.com/JBgYqrobdxsAAAAi/loading.gif" alt="Girl in a jacket" width="150" height="150" style={{textAlign:"center"}}/>
                </div> :
                data && <SingleCourseExt key={data.id} {...data} />
            }
        </>
    )
}

export default SingleCoursePage