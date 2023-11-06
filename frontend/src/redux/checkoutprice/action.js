export const setoriginalPriceaction=(originalPrice)=>{
return {
    type:"original",
    payload:originalPrice
}
}

export const setdiscountPrice=(discountPrice)=>{
    return {
        type:"discount",
        payload:discountPrice
    }
}

export const checkoutStore=(arr)=>{
    return{
        type:"checkoutStore",
        payload:arr
    }
}