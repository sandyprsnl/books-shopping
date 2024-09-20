import {Dropdown, Navbar } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
export const NotLoggedInNavDropdown = ({activeClass,inActiveClass}) => {
  return (
    <Dropdown
    arrowIcon={false}
    inline
    label={
      <Navbar.Link href="#"><FaUserAlt className="w-6 h-6" /></Navbar.Link>

    }
  >
    <Dropdown.Item><Link to={'/products'}>All Products</Link>   </Dropdown.Item>
    <Dropdown.Item><Link to={'/login'}>Log In</Link></Dropdown.Item>
    <Dropdown.Item><Link to={'/register'}>Register</Link></Dropdown.Item>
  </Dropdown>
  )
}
