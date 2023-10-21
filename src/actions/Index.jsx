export const incNum=(num)=>{
    return{
        type:"INC",
        payload:num
    }
}
export const decNum=(num)=>{
    return{
        type:"DEC",
        payload:num
    }
}