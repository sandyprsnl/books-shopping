import {Dropdown, Navbar } from "flowbite-react";
import { FaUserAlt } from "react-icons/fa";
import {Link} from "react-router-dom";
export const LoggedInNavDropdown = ({activeClass,inActiveClass}) => {
  return (
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
    <Dropdown.Item><Link to={'/products'}>All Products</Link>   </Dropdown.Item>
    <Dropdown.Item><Link to={'/dashboard'}>Dashboard</Link></Dropdown.Item>
    <Dropdown.Item><Link onClick={()=>{sessionStorage.removeItem('token');sessionStorage.removeItem('cbid')}}>Log out</Link></Dropdown.Item>
  </Dropdown>
  )
}



