import axios from "axios";

const addMyLearning=(data)=>(dispatch)=>{
    console.log(data,"aaaaa")
    dispatch({
        type:"LOADING"
    })
    axios.post("http://localhost:8080/courses/addtopurchased",data)
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
    axios.get(`http://localhost:8080/courses/getcoursesformylearning?userId=${userId}`)
    .then((res)=>{ console.log("cou",res)
        dispatch({
            type:"GET_MYLEARNING",
            payload:res.data
        })  
    })
    .catch((err)=>console.log(err))
}

export {addMyLearning,getMyLearning}

