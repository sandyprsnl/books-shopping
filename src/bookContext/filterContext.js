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
    console.log(state);
    const value = {
        products: state.products,
        initProductList
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