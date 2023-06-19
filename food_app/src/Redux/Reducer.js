import { ADD_TO_CART, REMOVE_FROM_CART } from "./Constant";

const cart=[]

export const  productreducer=(state=cart,action)=>{
    const product=action.payload;
    switch(action.type){
        case ADD_TO_CART:
            const exist=state.find((i)=>i.id===product.id && JSON.stringify(i.extra)===JSON.stringify(action.extra));
            if(exist){
                //increase the quantity
                return state.map((i)=>
                    i.id===product.id ? {...i,qty:i.qty+action.count} : i
                );
            }
            else{
                //product not available in cart then add new product
                const product =action.payload;
                 return [
                    ...state,
                    {...product,qty:action.count,extra:action.extra}
                 ]
            }

        case REMOVE_FROM_CART:
            return state=[]
            
        default: return state

    }

}