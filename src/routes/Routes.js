import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import App from '../App';
import Home from '../screens/home/Home';
import Cart from '../screens/cart/Cart';
import Dashboard from '../screens/dashboard/Dashboard';
import Products from '../screens/products/Products';
import ProductDetails from '../screens/ProductDetails';
import { FilterProvider } from '../bookContext/filterContext';
const routes = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='products' element={<Products/>}/>
    <Route path='dashboard' element={<Dashboard/>}/>
    <Route path='products/:id' element={<ProductDetails/>}/>
    </Route>
))
const Routes = () => {
  return (
    <FilterProvider>
    <RouterProvider router={routes} />
    </FilterProvider>
  )
}

export default Routes
