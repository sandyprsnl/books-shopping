const filterReducers = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'PRODUCT_LIST':
            return { products: payload.products }
        case 'SORT_BY':
            return
        case 'RATINGS':
            return
        case 'BEST_SELLER_ONLY':
            return

        case 'ONLY_IN_STOCK':
            return


        default:
            break;
    }
}

export default filterReducers
