import React from "react";
// import "./loginpage.css";
import "./Forgotpassword.css";
import finallogo from "./Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg";
import { useState } from "react";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import mail from "./Image/mail.svg";
import { Link } from "react-router-dom";
import errorimage from "./Image/error.png";
import back from './Image/Frame 12.svg';
import {
  useNavigate,
} from 'react-router-dom';

export default function Forgotpassword() {
  const correctemail='samarthkulkarni@innovascape.in';
  const [email, setemail] = useState("");
  const [emailcheck,setemailcheck]=useState(false);
  const [valid, setValid] = useState(null);
  const [styles, setstyles] = useState({
    border: "none",
  });
  const [place, setplace] = useState(true);

  const fun1 = (event) => {
    // const pattern= '[a-z0-9]+@stackabuse.com';

    setemail(event.target.value);

    setValid(
      event.target.value.match("[a-z0-9]+@gmail.com") ||
        event.target.value.match("[a-z0-9]+@innovascape.in") ||
        event.target.value.match("[a-z0-9]+@yahoo.com") ||
        event.target.value.match("[a-z0-9]+@hotmail.com") ||
        event.target.value.match("[a-z0-9]+@aol.com") ||
        event.target.value.match("[a-z0-9]+@hotmail.co.uk") ||
        event.target.value.match("[a-z0-9]+@hotmail.fr") ||
        event.target.value.match("[a-z0-9]+msn.com") ||
        event.target.value.match("[a-z0-9]+@innovascape.com")
    );
    console.log(email);
  };

  const checkemail=()=>{
      setemailcheck(true);
    
  }
  const navigate = useNavigate();

  const fun2 = () => {
    if (place === true) {
      setplace(false);
      if (email === "") {
        setstyles({
          border: ".2rem solid #400862",
        });
      }
    } else if (place === false) {
      setplace(true);
      if (email === "") {
        setstyles({
          border: "none",
        });
      }
    }

  };

  return (
    <>
      <div className="Maindiv1">
        <div className="forgetmaindiv">
          <div className="forgetpasswordcontainer">
            <div>
              <img className="lgpg-pagelogo" src={finallogo} alt=""></img>
            </div>
            <div className="loginflexboxdiv">
              <div className="paramaindiv">
                <h5
                  className="forgetheadig"
                  style={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  Forgot Password
                </h5>

                {emailcheck?<div className="passerrordiv">
                  <img className="passerrorimage" src={errorimage} />
                  <span className="passerrorspan">
                  Sorry, the email address you entered is not registered. Please double-check and try again.
                  </span>
                </div>:<p className="forgetpara">
                  Please provide your registered email address below. We will
                  send you a One-Time Password (OTP) to reset your password.
                </p>}
              </div>

              <div className="emailmaindiv">
                <p className="emailpara">
                  <span className="emailtext">Email</span>
                </p>
                <div className="emailsecdiv" style={{ border:
                  valid === null && email === "" && place === true
                    ? "none"
                    : valid === null && email !== ""
                    ? ".2rem solid red"
                    : ".2rem solid #400862",}}>
                  <span className="emailicon">
                    {/* <MailOutlineIcon sx={{ fontSize: 20 }} color="disabled" /> */}
                    <img src={mail} className="forgetmailicon" alt="not found"/>
                  </span>
                  <input
                    className="emailinput"
                    placeholder={
                      place === true ? "Enter your mail address" : ""
                    }
                    onChange={fun1}
                    value={email}
                    onClick={fun2}
                  ></input>
                </div>

                <span
                  className="errormessageemail"
                  style={{
                    color: valid === null && email !== "" ? "red" : "none",
                    display: valid === null && email !== "" ? "block" : "none",
                  }}
                >
                  Please enter a valid email address.
                </span>
              </div>

              {(email===correctemail)?<Link to="/otppage">
                <button className="forgetbutton">Send OTP</button>
              </Link>:<button className="forgetbutton" onClick={checkemail}>Send OTP</button>}
              {(emailcheck)?<p
                className="createaccount" style={{fontWeight:'600',}}
              >
                Don't have an acoount?{" "}
                <Link to="/registerpage">
                  <a className="createaccounta" href="" style={{ color: "#0038FF" }}>
                    Create account
                  </a>
                </Link>
              </p>:""}
            </div>
          </div>
          <img className ='backbutton' onClick={() => navigate(-1)} src={back} alt='not found'/>
        </div>
      </div>
    </>
  );
}
