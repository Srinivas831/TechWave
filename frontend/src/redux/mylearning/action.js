import axios from "axios";

const addMyLearning=(data)=>(dispatch)=>{
    console.log(data,"aaaaa")
    dispatch({
        type:"LOADING"
    })
    axios.post("http://localhost:8080/courses/addtopurchased",data)
    .then((res)=>{console.log(res.data.courses)
        dispatch({
            type:"ADD_MYLEARNING",
            payload:res.data.courses
        })
    })
    .catch((err)=>{console.log(err)
        dispatch({
            type:"FAIL_COURSEADDING"
        })
    })

}

export {addMyLearning}
