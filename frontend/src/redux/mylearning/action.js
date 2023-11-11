import axios from "axios";
import { url } from "../../api";

const addMyLearning=(data)=>(dispatch)=>{
    console.log(data,"aaaaa")
    dispatch({
        type:"LOADING"
    })
    axios.post(`${url}/courses/addtopurchased`,data)
    .then((res)=>{console.log(res)
        dispatch({
            type:"success"
        })
    })
    .catch((err)=>{console.log(err)
        dispatch({
            type:"FAIL_COURSEADDING"
        })
    })

}

const getMyLearning=(userId)=>(dispatch)=>{
    const param={userId}
    console.log("param",param);
    dispatch({
        type:"LOADING"
    })
    axios.get(`${url}/courses/getcoursesformylearning?userId=${userId}`)
    .then((res)=>{ console.log("cou",res)
        dispatch({
            type:"GET_MYLEARNING",
            payload:res.data
        })  
    })
    .catch((err)=>console.log(err))
}

export {addMyLearning,getMyLearning}

