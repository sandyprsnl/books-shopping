import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../components/elments/Rating';
import { useCart } from '../bookContext/CartContext';
import { type } from '@testing-library/user-event/dist/type';

const ProductDetails = () => {
const {id} = useParams();
const [product,setProduct] = useState({});
const {products:cartProducts,dispatch} = useCart();
const { id:pid, name, overview, long_description, price, poster, rating, in_stock, size, best_seller } = product;
var [productIsInCart,setProductIsInCart] = useState(false);
useEffect(()=>{
  axios.get(`${process.env.REACT_APP_API_URL}products/${id}`).then((response)=>{setProduct(response.data)});
  let findProductInCart = cartProducts.find((cartProduct)=>{
    console.log(cartProduct,product);
    return cartProduct.id ===product.id;
  } );
  console.log(findProductInCart,cartProducts);
  if(findProductInCart){
    setProductIsInCart(true);
  }else{
    setProductIsInCart(false);
  }

},[id,cartProducts]);

  return (
    <main id={pid} className={in_stock?'':'grayscale'}>
        <section>
          <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{name}</h1>
          <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{overview}</p>
          <div className="flex flex-wrap justify-around">
            <div className="max-w-xl my-3 mx-3">
              <img className="rounded" src={poster} alt={name} />
            </div>
            <div className="max-w-xl my-3">
              <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                <span className="mr-1">$</span>
                <span className="">{price}</span>
              </p>
              <div className="my-3"> 
              <Rating rating={rating}/>
              </div>
              <p className="my-4 select-none">
              {best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
                  {in_stock ? ( <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>):(<span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>)} 
                <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{size} MB</span>
              </p>
              <p className="my-3">

              {! productIsInCart ?    <button disabled={in_stock?'':'disabled'} onClick={()=>{
                dispatch({
                  type:'ADD_TO_CART',
                  payload:{
                    product:product
                  }
                })
              }} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
              :
              <button onClick={()=>{
                dispatch({
                  type:'REMOVE_FROM_CART',
                  payload:{
                    product:product
                  }
                }
                  
                )
              }} className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  >Remove Item <i className="ml-1 bi bi-trash3"></i></button>
            }

              </p>
              <p className="text-lg text-gray-900 dark:text-slate-200">
               {long_description}
              </p>
            </div>
          </div>
        </section>
      </main> 
  )
}

export default ProductDetails
