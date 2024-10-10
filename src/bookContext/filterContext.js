import { useContext, useReducer } from "react";
import filterReducers from "../bookReducers/filterReducers";

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
    const rating = (products)=>{
            if(state.rating==="1STARANDABOVE"){
                return products.filter((product)=>product.rating>=1);
            }
            if(state.rating==="2STARANDABOVE"){
                return products.filter((product)=>product.rating>=2);
            }
            if(state.rating==="3STARANDABOVE"){
                return products.filter((product)=>product.rating>=3);
            }
            if(state.rating==="4STARANDABOVE"){
                return products.filter((product)=>product.rating>=4);
            }
        return products;
    }
    const filteredList = rating(sortBy(onlyInStock(bestSellerOnly(state.products))));
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