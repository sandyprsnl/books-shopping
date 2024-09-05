import React, { useEffect, useState } from 'react'
import ProductCard from '../../../components/elments/ProductCard'
import axios, { Axios } from 'axios';

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}featured_products`).then((response) => { setFeaturedProducts(response.data) });
    
  }, []);
  console.log(featuredProducts);
  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
        {featuredProducts.map((product) => {
         return  <ProductCard key={product.id} product={product} />
        })}
      </div>
    </section>
  )
}

export default FeaturedProducts
