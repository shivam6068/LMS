import React from 'react'
import  { useState } from "react";
import './Navbar.css';
import './Navbarmedia.css';
import pagelogo from "./image/Innovascapelogo.svg";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import shoppingcart from './icons/shopping_cart.svg';
import notification from './icons/notifications.svg';
import group from './icons/Group 34.svg';

const Navbar = () => {
    const [value, setvalue] = useState("");

  const [place, setplace] = useState(true);
    const fun1 = (event) => {
        setvalue(event.target.value);
      };
      const fun2 = () => {
        if (place === true) {
          setplace(false);
          setvalue("Design thinking");
        } else {
          setplace(true);
          setvalue("");
        }
      };
  return (
    <>
      <nav className="enrollnavbar">
        <img src={pagelogo} alt="not found" className="navbarlogo" />
        <section className="navbarsection">
          <div
            className="navbardiv"
            style={{
              border:
                place === true && value === "" ? "none" : "2px solid #400862",
            }}
          >
            <span className="navbaricon1">
              <SearchOutlinedIcon
                sx={{ fontSize: 20 }}
                color={place === true && value === "" ? "disabled" : "action"}
              />
            </span>
            <input
              className="navbarinput"
              value={value}
              placeholder={
                place === true && value === ""
                  ? "What are you looking for?"
                  : ""
              }
              type="text"
              onClick={fun2}
              onChange={fun1}
            />
          </div>
          <span className="navbar3logo">
            {/* <NotificationsNoneOutlinedIcon className='navbarlogo'sx={{ fontSize: 33 }}></NotificationsNoneOutlinedIcon> */}
            <img src={notification} className='navbarlogo12' alt='not found'/>
            {/* <ShoppingCartOutlinedIcon className='navbarlogo' sx={{ fontSize: 33 }}></ShoppingCartOutlinedIcon> */}
            <img src={shoppingcart} className='navbarlogo12' alt='not found'/>
            {/* <span className="navbarlogo3">Sk</span> */}
            <img src={group} className='navbarlogo3' alt='not found'/>
          </span>
        </section>
      </nav>

    </>
  )
}

export default Navbar