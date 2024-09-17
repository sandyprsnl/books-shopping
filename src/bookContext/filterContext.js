import { useContext, useReducer } from "react";
import filterReducers from "./filterReducers";

const { createContext } = require("react")

const filterInitState = {
    products: [],
    sortBy: null,
    onlyInStock: false,
    bestSellerOnly: false,
    rating: null

}

const filterContext = createContext(filterInitState);

export const FilterProvider = ({ children }) => {
    const [state, dispatch] = useReducer(filterReducers, filterInitState);
    function initProductList(products) {
        dispatch(
            {
                type: 'PRODUCT_LIST',
                payload:{
                    products:products
                }

            })
    }
    
    const bestSellerOnly = (products)=>{
       return (state.bestSellerOnly)? products.filter((product)=>product.best_seller===true ):products;
    }
    const onlyInStock=(products)=>{
        return (state.onlyInStock)?products.filter((product)=>product.in_stock===true):products;
    }
    const sortBy=(products)=>{
        if(state.sortBy==="lowToHigh"){
            return products.sort((a,b)=>a.price-b.price);
        }
        if(state.sortBy==="heighToLow"){
            return products.sort((a,b)=>b.price-a.price);
        }
        return products;
    }
    const filteredList = sortBy(onlyInStock(bestSellerOnly(state.products)));
    const value = {
        products: filteredList,
        initProductList,
        state,
        dispatch
    }
    return (
        <filterContext.Provider value={value}>
            {
                children
            }
        </filterContext.Provider>
    )
}
export const useFilter = () => {
    return useContext(filterContext);
}