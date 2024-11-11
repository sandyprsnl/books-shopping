
export const CartReducers=(state,action)=>{
    var {type,payload} = action;
    switch(type){
        case "ADD_TO_CART":
            let products = state.products.concat(payload.product);
            return {...state, products:products , total:state.total+payload.product.price};
        case 'REMOVE_FROM_CART':
             let updatedProductsList = state.products.filter((product)=>product.id !==payload.product.id);
            return {...state,products:updatedProductsList,total:state.total-payload.product.price}
        case 'CLEAR_CART':
          return {...state, products:[],total:0};
        default:
            throw new Error('No action found');
    }
}