const filterReducers = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'PRODUCT_LIST':
            return { products: payload.products }
        case 'SORT_BY':
            return {...state,sortBy:payload.sortBy}
        case 'RATINGS':
            return
        case 'BEST_SELLER_ONLY':
            return  {...state ,bestSellerOnly: payload.bestSellerOnly }

        case 'ONLY_IN_STOCK':
            return  {...state ,onlyInStock: payload.onlyInStock }

        default:
            break;
    }
}

export default filterReducers
