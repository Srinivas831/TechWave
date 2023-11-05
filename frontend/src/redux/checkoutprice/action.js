export const setoriginalPrice=(originalPrice)=>{
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