import React from 'react'
import pagelogo from "./image/Innovascapelogo.svg";
import search from './icons/search.png';
import shopping from './icons/shopping_cart.png';
import menu from './icons/menu.png';
import './Navbar2.css'


const Navbar2 = () => {
  return (
    <>
     <nav className="enrollnavbar2">
        <img src={menu} alt="not found" className="navbarlogomenu" />
        
        <img src={pagelogo} alt="not found" className="navbarlogo1" />
          <span className="navbar3logo2">
          <img src={search} alt="not found" className="navbarlogospan" />
          <img src={shopping} alt="not found" className="navbarlogospan" />
          </span>
      </nav>
    </>
  )
}

export default Navbar2