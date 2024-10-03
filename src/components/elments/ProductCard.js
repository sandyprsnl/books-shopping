import React from 'react'
import Rating from './Rating';
import { NavLink } from 'react-router-dom';
const ProductCard = ({ product }) => {
  // const { id, name, overview, long_description, price, poster, image_local, rating, in_stock, size, best_seller } = product;
  const { id, name, overview, price, poster, rating, best_seller } = product;
  return (
    <div className="m-4 max-w-xs  rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <NavLink to={`/products/${id}`} className="relative" >
        {best_seller && <span className="absolute top-4 left-2 px-2 bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span>}

        <img className="rounded-t-lg w-full h-64" src={poster} alt={name} />
      </NavLink>
      <div className="p-3">
        <NavLink to={`/products/${id}`} className="relative" >
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </NavLink>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>

        <Rating rating={rating} />


        <p className="flex justify-between items-center">
          <span className="text-2xl dark:text-gray-200">
            <span>$</span><span>{price}</span>
          </span>
        </p>
        
        <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800">Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
        
          {/* <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800">Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
      </div>
    </div>
  )
}

export default ProductCard
