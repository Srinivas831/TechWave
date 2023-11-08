const initialState={
    courseArray:[],
    loading:false,
    isError:false,
    flag:false
}

const reducer=(state=initialState,action)=>{
switch(action.type){
    case "LOADING":{
        return {...state,loading:true};
    }
    case "GET_MYLEARNING":{
        return {...state,courseArray:[...action.payload],loading:false}
    }
    case "FAIL_COURSEADDING":{
        return {...state,isError:true,loading:false}
    }
    case "success":{
        return {...state,isError:false,loading:false,flag:true}
    }
    default:return state
}
}

export {reducer}