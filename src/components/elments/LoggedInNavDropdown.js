import {Dropdown, Navbar } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
import { getUserDataService, logoutService, showError } from "../../services";
import { useEffect, useState } from "react";
export const LoggedInNavDropdown = ({activeClass,inActiveClass}) => {
  let [user,setUser]= useState({});
  useEffect(()=>{
    (async ()=>{
      let data ={};
      try {          
      data = await getUserDataService();
      } catch (error) {
        showError(error.message);
      }
      setUser(data);
    })()
  },[]);
  return (
    <Dropdown
    arrowIcon={false}
    inline
    label={
      <Navbar.Link href="#"><FaUserAlt className="w-6 h-6" /></Navbar.Link>

    }
  >
    <Dropdown.Header>
      <span className="block text-sm">{user.name}</span>
      <span className="block truncate text-sm font-medium">{user.email}</span>
    </Dropdown.Header>
    <Dropdown.Item><Link to={'/products'}>All Products</Link>   </Dropdown.Item>
    <Dropdown.Item><Link to={'/dashboard'}>Dashboard</Link></Dropdown.Item>
    <Dropdown.Item><Link onClick={()=>{logoutService()}}>Log out</Link></Dropdown.Item>
  </Dropdown>
  )
}



