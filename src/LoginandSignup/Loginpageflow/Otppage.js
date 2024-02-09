import React, { useEffect } from "react";
import "./Otppage.css";
import { useState } from "react";
import finallogo from "./Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg";
import send from "./Image/send.svg";
import error from "./Image/error.svg";
import Otp from "./Component/Otp";
import { Link } from "react-router-dom";
import back from './Image/Frame 12.svg';
import {
  useNavigate,
} from 'react-router-dom';

export default function Otppage() {
  const [time, settime] = useState(180);
  const [clicked, setclicked] = useState(false);


  useEffect(() => {
    const val=setInterval(() => {
      if (time > 0) {
        settime(time - 1);
      } 
    }, 1000);
    return ()=> clearInterval(val);
  }, [time]);

  const resetime = () => {
    setclicked(true);
    settime(180);
  }
  const navigate = useNavigate();

  return (
    <>
      <div className="Maindiv3">
        <div className="lgpg-pagecontainer">
          <div className="Mainotpcontainer">
            <div>
              <img className="lgpg-pagelogo" src={finallogo} alt=""></img>
            </div>
            <div className="otpflexboxdiv">
              <span
                className="heading"
                style={{ textAlign: "center", fontWeight: "bolder" }}
              >
                OTP Verification
              </span>
              {time > 0 && clicked === false ? (
                <div className="otpmessage">
                  <img src={send} className="otpicon"/>
                  <span className="otpmessagespan">
                    An OTP has been sent to your registered email address.
                    Please check your email and enter the OTP .
                  </span>
                </div>
              ) : time === 0   ? (
                <div className="timeoutmessage">
                  <img src={error} className="otpicon"/>
                  <span className="otperrormessagespan">
                    Time limit exceeded for OTP entry. Please click on 'Resend
                    OTP' to request a new one.
                  </span>
                </div>
              ) : (
                <div className="otpmessage">
                  <img src={send} className="otpicon"/>
                  <span className="otpmessagespan">
                    A new OTP has been successfully sent to your email. Please
                    check your inbox.
                  </span>
                </div>
              )}

              <div className="conatiner">
                <p className="heading3">Enter OTP</p>

                <Otp />
              </div>
              <Link to="/resetpassword">
                <button className="button">Verify</button>
              </Link>
              <span className="heading1">
                Did not receive OTP?
                <a
                  style={{ color: "#0038FF", textDecoration: "underline",cursor:'pointer',marginLeft:'4px' }}
                  onClick={resetime}
                  className="hover"
                >
                  Resend OTP
                </a>
              </span>
              <span className="heading2">
                OTP expires in{" "}
                <span
                  style={{ color: "red", fontSize: "1.9rem", fontWeight: "bold" }}
                >
                  {time} sec
                </span>
              </span>
            </div>
          </div>
          <img className ='backbutton' onClick={() => navigate(-1)} src={back} alt='not found'/>
        </div>
      </div>
    </>
  );
}
