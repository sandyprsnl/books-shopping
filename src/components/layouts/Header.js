
import {Dropdown, Navbar } from "flowbite-react";
import { PiMoonStarsFill } from "react-icons/pi";
import { IoMdSunny } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";


const Header = ({showSearch,setShowSearch}) => {
  var [darkTheme,setDarkTheme]=useState(localStorage.getItem('darkTheme')|| false);
  function updateTheme(){
    setDarkTheme(!darkTheme);
    localStorage.setItem('darkTheme',!darkTheme);
  }
useEffect(()=>{
  // if (localStorage.darkTheme  || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (!document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  document.querySelector('nav').classList.remove('bg-white');
},[darkTheme])
  let activeClass="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 activeNav"
  let inActiveClass = "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
    return (
    <Navbar  rounded  className="max-w-screen-xl mx-auto dark:bg-slate-800">
      <Navbar.Brand  href="/">
        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      
      <Navbar.Toggle />
            
      <Navbar.Collapse className=" justify-end">
        <Navbar.Link href="#">{darkTheme?(<PiMoonStarsFill onClick={updateTheme} className="w-6 h-6"/>):(<IoMdSunny onClick={updateTheme} className="w-6 h-6"/>)} </Navbar.Link>
        <Link to={'#'} onClick={()=>setShowSearch(!showSearch)} className={inActiveClass}> <IoSearchSharp className="w-6 h-6" /></Link>
        
        <NavLink to="/cart" className={({isActive})=>isActive?activeClass:inActiveClass}> <span className="relative">
        <FaShoppingCart className="w-6 h-6" />
        <span className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-4 dark:border-gray-900">20</span>
        </span> </NavLink>
        <div className="">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Navbar.Link href="#"><FaUserAlt className="w-6 h-6" /></Navbar.Link>

          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item><NavLink to={'/dashboard'} className={({isActive})=>isActive?activeClass:inActiveClass}>Dashboard</NavLink>   </Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
      </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Header
