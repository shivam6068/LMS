import React from "react";
import finallogo from '../Loginpageflow/Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg';
import "./Registersuccess.css";
import welcome from "./image/welcome.png";
import { Link } from "react-router-dom";
import back from '../Loginpageflow/Image/Frame 12.svg';
import {
  useNavigate,
} from 'react-router-dom';

export default function Registersuccess() {
  const navigate = useNavigate();
  return (
    <>
      <div className="Maindiv7">
        <div className="Mainregistersuccessdiv">
          <div className="registerMaincontainerpasupdate">
            <div>
              <img className="lgpg-pagelogo" src={finallogo} alt=""></img>
            </div>
            <div className="updateflexboxdiv">
              <h5 className="registerupdatepasshead">
                Welcome to Innovascape!
              </h5>
              <img
                className="registerwelcome"
                src={welcome}
                alt="success-logo"
              ></img>
              <p className="registerupdatepasspara">
                Congratulations! Your account has been successfully created. You
                can now proceed to login and access your account.
              </p>
              <Link to="/mainpage">
                <button className="registersuccessbutton">Continue</button>
              </Link>
            </div>
          </div>
          <img className ='backbutton' onClick={() => navigate(-1)} src={back} alt='not found'/>
        </div>
      </div>
    </>
  );
}
