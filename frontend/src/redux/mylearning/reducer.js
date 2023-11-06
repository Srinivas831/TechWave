const initialState={
    courseArray:[],
    loading:false,
    isError:false
}

const reducer=(state=initialState,action)=>{
switch(action.type){
    case "LOADING":{
        return {...state,loading:true};
    }
    case "ADD_MYLEARNING":{
        return {...state,courseArray:[...action.payload],loading:false}
    }
    case "FAIL_COURSEADDING":{
        return {...state,isError:true,loading:false}
    }
    default:return state
}
}

export {reducer}