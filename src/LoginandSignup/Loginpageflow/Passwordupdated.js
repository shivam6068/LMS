import React from "react";
// import './loginpage.css';
import "./Passwordupdated.css";
import finallogo from "./Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg";
import verified from "./Image/verified.svg";
import { Link } from "react-router-dom";
import back from './Image/Frame 12.svg';
import {
  useNavigate,
} from 'react-router-dom';

export default function Passwordupdated() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Maindiv4">
        <div className="lgpg-pagecontainer">
          <div className="Maincontainerpasupdate">
            <div>
              <img className="lgpg-pagelogo" src={finallogo} alt=""></img>
            </div>
            <div className="updateflexboxdiv">
              <h5 className="updatepasshead">Password successfully updated</h5>
              <img className="imgverified" src={verified} alt="success-logo"/>
              <p className="updatepasspara">
                Your new password has been successfully updated. Use your new
                password to log in and access your account.
              </p>
              <span className="updatetext" >
                Back to{" "}
                <Link to="/">
                  <a style={{ color: "#0038FF" }} href="">
                    Login
                  </a>
                </Link>
              </span>
            </div>
          </div>
          <img className ='backbutton' onClick={() => navigate(-1)} src={back} alt='not found'/>
        </div>
      </div>
    </>
  );
}
