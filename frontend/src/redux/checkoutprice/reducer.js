const initial={
    originalPrice:0,
    discountPrice:0
}
export const cartReducer=(state=initial,action)=>{
switch(action.type){
    case "original":{
        return {...state,originalPrice:action.payload}
    }
    case "discount":{
        return {...state,discountPrice:action.payload}
    }
    default:return state
}
}
