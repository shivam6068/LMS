import React from "react";
import "./Navbar.css";
// import pagelogo from "./image/pagelogo.png";
// import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import "./Payment.css";
import image3 from "./image/image 3.svg";
import image4 from "./image/image 4.svg";
import image5 from "./image/image 5.svg";
import image6 from "./image/image 6.svg";
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import image1 from "./image/image4.svg";

import shoppingcart from './icons/shopping_cart.svg';
import notification from './icons/notifications.svg';
import group from './icons/Group 34.svg';
import pagelogo from "./image/Innovascapelogo.svg";

const Payment = (prop) => {
  return (
    <>
      <nav className="payenrollnavbar">
      <img src={pagelogo} alt="not found" className="navbarlogo" />
        <section className="paynavbarsection">
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
      <section className="paycartsection1">
        <div className="paycartsection11">
          <div className="paycartsection11div">
            <div className="paycartsection11div1">
              <h1 className="paycartsection11heading">Checkout</h1>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="paycartsection11div2">
              <span className="paycartsection11div2spn1">
                <h3>By proceeding to payment, I acknowledge and accept the</h3>
                <h3 style={{ color: "#0038FF" }}>
                  Terms of Use, Refund Policy, and Privacy Policy.
                </h3>
              </span>
              <span className="paycartsection11div2span2">
                <img style={{width:'15rem',height:'6rem'}} src={image3} alt="not found" />
                <img style={{width:'15rem',height:'6rem'}} src={image4} alt="not found" />
                <img style={{width:'15rem',height:'6rem'}} src ={image5} alt="not found" />
                <img style={{width:'20rem',height:'13rem'}} src={image6} alt="not found" />
              </span>
              <button className="paycartsection11div2button">
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
        <div className="paycartsection12">
          <div className="paycartsection12div1">
            <div className="paycartsection12div1div">
              <span className="paycartsection12div1span1">Order Summary:</span>
              <div className="paycartsection12div11">
                <div className="paycartsection12div111"><img className="paycartsection12div111img" src={image1} alt="not found"/><span style={{position:'relative',right:'10rem'}}>Design Thinking</span></div>
                <div className="paycartsection12div112"><span>{prop.count} months of access to the course</span><span style={{display:'flex',alignItems:'center',flexDirection:'row',justifyContent:'space-around',fontWeight:'600'}}><CurrencyRupeeOutlinedIcon/>{prop.price}</span></div>
              </div>
              <hr style={{ width: "90%" }} />
              <div className="paycartsection12div12">
                <span>Order Total</span>
                <span className="paycartsection12div12span"><CurrencyRupeeOutlinedIcon/>{prop.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr style={{widht:'100%'}}/>
      <div style={{width:'100%',height:'15rem',textAlign:'center',fontWeight:'700',color:'#454545',fontFamily:'poppins'}}>All Rights Reserved | © 2023 Innovascape</div>
    </>
  );
};

export default Payment;
