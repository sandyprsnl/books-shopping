import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/elments/ProductCard'
import FilterBar from './components/FilterBar'
import axios from 'axios';
import { useFilter } from '../../bookContext/filterContext';
import { useSearchParams } from 'react-router-dom';

const Products = () => {
  const {products,initProductList} = useFilter()
  const [showFilterBar,setShowFilterBar] = useState(false);
  // const [products,setProducts] = useState([]);
  const [searchParms , setSearchParms] = useSearchParams();

  useEffect(()=>{
    let searchQuery = searchParms.get('search');
    const url = searchQuery?`${process.env.REACT_APP_API_URL}products?q=${searchQuery}`:`${process.env.REACT_APP_API_URL}products`;
    axios.get(url).then((response)=>{
      // setProducts(response.data);
      initProductList(response.data)
    })

  },[])
  return (
    <main>
        <section className="my-5">
          <div className="my-5 flex justify-between">
            <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({(products.length>0)?products.length:0}):</span>
            <span>
              <button onClick={()=>setShowFilterBar(!showFilterBar)} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button"> 
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
              </button>
            </span>            
          </div>    

          <div className=" m-5 flex flex-wrap justify-center lg:flex-row">
          {
            products.map((product)=>{
              return (product)?(<ProductCard key={product.id} product={product}/>):null
            })
          }
          </div>  
        </section>
       {
        (showFilterBar) ? <FilterBar setShowFilterBar ={setShowFilterBar} showFilterBar={showFilterBar}/>:''
       } 
      </main> 
  )
}

export default Products
