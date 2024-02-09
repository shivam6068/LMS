import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Coursecart.css";
// import "./Coursecartmedia.css";
import imag from "./image/image4.svg";
import star from "./image/5 star.svg";
import { Link } from "react-router-dom";
import CurrencyRupeeOutlinedIcon from "@mui/icons-material/CurrencyRupeeOutlined";
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import delee from './icons/delete.png';

const Coursecart = (prop) => {
  return (
    <>
      <Navbar />
      <div style={{width:'100%',height:'2rem'}} ></div>
      <section className="cartsection1">
        <div className="cartsection11">
          <div className="cartsection11div">
            <div className="cartsection11div1">
              <h1 className="cartsection11heading">Cart of Knowledge</h1>
              <p className="cartsection11para">1 course in the cart</p>
              <hr style={{ width: "100%" }} />
            </div>
            <div className="cartsection11div2">
              <div className="cartsection11card">
                <div className="cartsection11carddiv1">
                  <div className="cartsection11carddiv12">
                    <img
                      style={{ width: "22rem", height: "17rem",position:'relative',right:'5rem',top:'2rem' }}
                      src={imag}
                      alt="not found"
                    />
                    <div className="cartsection11carddiv11">
                      <span className="cartsection11carddiv11span1">
                        Bestseller
                      </span>
                      <h1 className="cartsection11carddiv11heading">
                        Design Thinking
                      </h1>
                      <span className="cartsection11carddiv11span2">
                        {prop.count} months of access to the course
                      </span>
                      <span className="cartsection11carddiv11span3">
                        <img style={{width:'11rem',height:'5rem'}} src={star} alt="not found" />
                        <span className="span4">4.5</span>
                      </span>
                    </div>
                  </div>

                  <span className="cartsection11carddiv1span">
                    <CurrencyRupeeOutlinedIcon style={{fontSize:'3rem'}} />
                    {prop.price}
                  </span>
                </div>
                <div className="cartsection11carddiv2">
                  <div className="cartsection11carddiv21">
                    <button className="cartsection11carddiv21button">
                      Save for later
                    </button>
                    <button className="cartsection11carddiv21button">
                      Remove <img src={delee}  alt="not found" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cartsection12">
          <div className="cartsection12div1">
            <div className="cartsection12div11">
              <span className="cartsection12div11span">Apply coupon</span>
              <input
                className="cartsection12div11input"
                placeholder="Enter coupon code"
                type="text"
              />
              <button className="cartsection12div11button">Apply</button>
              <hr style={{ width: "100%" }} />
            </div>
            <span
              className="cartsection12div11span"
              style={{ left: "5.5rem", position: "relative" }}
            >
              Price details :
            </span>
            <div className="cartsection12div2">
              <div className="cartsection12div21">
                <span className="pricespan">Design Thinking</span>
                <span className="pricespan">₹ 1,750</span>
              </div>
              <div className="cartsection12div21">
                <span className="pricespan">Tax</span>
                <span className="pricespan">₹ 250</span>
              </div>
              <div className="cartsection12div21">
                <span className="pricespan">Discount</span>
                <span className="pricespan">₹ 401</span>
              </div>
              <hr style={{ width: "100%" }} />

              <div
                className="cartsection12div21"
                style={{ fontWeight: "800", fontSize: "2rem" }}
              >
                <span className="pricespan">Order Total</span>
                <span className="pricespan">₹ {prop.price}</span>
              </div>
              <Link to="/payment" className="cartsection12div12button">
                <button className="cartsection12div12button">Proceed</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Coursecart;
