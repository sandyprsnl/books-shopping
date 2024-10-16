import React from 'react'
import { NavLink } from 'react-router-dom';
import { useCart } from '../../../bookContext/CartContext';

const CartCard = ({product}) => {
  const { id, name, price, poster } = product;
  const {dispatch} = useCart();
  return (
    <div className="flex flex-wrap justify-between border-b dark:border-slate-700 max-w-4xl m-auto p-2 mb-5 ">
    <div className="flex">
        <NavLink to={`/products/${id}`}>
          <img className="w-32 rounded" src={poster} alt={name} />
        </NavLink>
        <div className="">
          <NavLink to={`products/${id}`}>
            <p className="text-lg ml-2 dark:text-slate-200">{name}</p>
          </NavLink>            
          <button onClick={()=>{
            dispatch({
              type:"REMOVE_FROM_CART",
              payload:{
                product:product
              }
            })
          }} className="text-base ml-2 text-red-400">Remove</button>
        </div>
    </div>
    <div className="text-lg m-2 dark:text-slate-200">
      <span>${price}</span>
    </div>
  </div>
  )
}

export default CartCard
