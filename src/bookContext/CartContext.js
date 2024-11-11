import { createContext, useContext, useReducer } from "react"
import { CartReducers } from "../bookReducers/CartReducers";

const initCartList ={
    products:[],
    total:0
}

const cartContext = createContext(initCartList);

export const CartProvider=({children})=>{
    const [state,dispatch] = useReducer(CartReducers,initCartList);
    let value={
        products:state.products,
        state:state,
        dispatch:dispatch
    }
    return(
        <cartContext.Provider value={value}>
        {
            children
        }
        </cartContext.Provider>
    )

}

export const useCart=()=>{
    return useContext(cartContext);
}