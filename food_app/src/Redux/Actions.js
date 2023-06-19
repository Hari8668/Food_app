import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constant"


//addtocart function
export const addTocart=(product,count,extraitems)=>{
    return {
        type:ADD_TO_CART,
        payload:product,
        count:count,
        extra:extraitems
    }
}


//empty cart when checkout function
export const emptycart=()=>{
    return {
        type:REMOVE_FROM_CART,
    }
}

