import React from "react";
import "./loginpage.css";
import finallogo from "./Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg";
import { useState } from "react";
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import google from "./Image/google-icon-2048x2048-czn3g8x8 1.svg";
import mail from "./Image/mail.svg";
import key from "./Image/vpn_key.svg";
import eye from "./Image/visibility.svg";
import closedeye from "./Image/visibility_off.svg";
import errorimage from "./Image/error.png";
import { Link } from "react-router-dom";
// import back from './Image/Frame 12.png';
// import khali from './Image/Bounding box (1).png'

export default function Login() {
  const [email, setemail] = useState("");
  const [valid, setValid] = useState(null);
  const [styles, setstyles] = useState({
    border: "none",
  });
  const [place, setplace] = useState(true);

  const [password, setpassword] = useState("");
  const [validp, setValidp] = useState(true);
  const [visiblep, setVisiblep] = useState(true);
  const [placep, setplacep] = useState(true);

  const [showlogin, setshowlogin] = useState(false);

  //EMAIL COMPONENT IN LOGIN PAGE.

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

  //PASSWORD FILE IN LOGIN PAGE
  const fun1p = (event) => {
    const pattern = /^[A-Za-z]\w{7,14}$/;

    setpassword(event.target.value);

    setValidp(password.match(pattern));

    console.log(password.match(pattern));
  };

  const fun2p = (event) => {
    if (placep === true) {
      setplacep(false);
    } else {
      setplacep(true);
    }
  };

  const emojichange = () => {
    if (visiblep === true) {
      setVisiblep(false);
    } else {
      setVisiblep(true);
    }
  };

  // login button file in login page

  const loginfun = () => {
    if (password === "" || email === "") {
      setshowlogin(true);
    } else {
      setshowlogin(false);
    }
  };

  return (
    //EMAIL COMPONENT HTML & CSS HERE.
    <>
      <div className="Maindiv2">
        <div className="lgpg-pagecontainer">
          <div className="logininnerdiv">
            <div>
              <img className="lgpg-pagelogo" src={finallogo} alt=""></img>
            </div>
            <div className="loginflexboxdiv">
              <div>
                <h5
                  className="lgpg-logotext"
                  style={{ textAlign: "center", fontWeight: "bolder" }}
                >
                  Hello! Welcome back
                </h5>
              </div>
              {showlogin ? (
                <div className="errordiv">
                  <img className="errorimage" src={errorimage} />
                  <span className="errorspan">
                    Please fill all the required fields.
                  </span>
                </div>
              ) : (
                ""
              )}

              <div className="emailmaindiv">
                <p className="emailpara">
                  <span className="emailtext">Email</span>
                </p>
                {console.log(valid)}
                <div className="emailsecdiv" style={ {border:
                  valid === null && email === "" && place === true
                    ? "none"
                    : valid === null && email !== ""
                    ? ".2rem solid red"
                    : ".2rem solid #400862",}}>
                  <span className="emailicon">
                    {/* <MailOutlineIcon sx={{ fontSize: 20 }} color="disabled" /> */}
                    <img  className="loginicon" src={mail} alt="not found"/>
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

              {/* //PASSWORD COMPONENT HTML */}
              <div className="passMaindiv">
                <p className="passpara">
                  <span className="passtext">Password</span>
                </p>

                <div
                  className="passsecdiv"
                  style={{
                    border:
                      placep === true && password === ""
                        ? "none"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="passicon1">
                    {/* <VpnKeyIcon sx={{ fontSize: 17 }} color="disabled" /> */}
                    <img className="loginicon" src={key} alt="not found"/>
                  </span>

                  <input
                    type={visiblep === false ? "text" : "password"}
                    className="passinput"
                    placeholder={
                      placep === true && password === ""
                        ? "Enter your password"
                        : ""
                    }
                    onChange={fun1p}
                    value={password}
                    onClick={fun2p}
                  ></input>
                  <span className="passicon2" onClick={emojichange}>
                    {visiblep === false ? (
                      // <RemoveRedEyeIcon
                      //   sx={{ fontSize: 17 }}
                      //   color="disabled"
                      // />
                      <img  className="loginicon" src={eye} alt="not found"/>
                    ) : (
                      // <VisibilityOffIcon
                      //   sx={{ fontSize: 17 }}
                      //   color="disabled"
                      // />
                      <img  className="loginicon" src={closedeye} alt="not found"/>
                    )}
                  </span>
                </div>
                <div className="checkboxdiv">
                  <span className="checkboxspan">
                    <input type="checkbox" className="checkbox"/>
                    <span className="checkboxheading">Remember Me</span>
                  </span>
                  <Link to="/forgotpassword">
                    <a className="checkboxlink" href="" style={{ color: "#0038FF" }}>
                      Forgot Password
                    </a>
                  </Link>
                </div>
              </div>

              <div className="lastdivlogin">
                <button className="lastdivloginbutton1" onClick={loginfun}>
                  Login
                </button>
                <span
                  className="spacingline"
                >
                  <hr style={{ width: "40%",height:'.15rem',backgroundColor:'#BDA8CA' }}></hr> <p className="orpara">or</p>
                  <hr style={{ width: "40%",height:'.15rem',backgroundColor:'#BDA8CA' }}></hr>
                </span>
                <button className="lastdivloginbutton2">
                  <img className="google" src={google} alt="not fount" />
                  Login with Google
                </button>
              </div>

              <p
                className="createaccount" style={{fontWeight:'600',}}
              >
                Don't have an account?{" "}
                <Link to="/registerpage">
                  <a className="createaccounta" href="" style={{ color: "#0038FF" }}>
                    Create account
                  </a>
                </Link>
              </p>
            </div>
            <div className ='divbackbutton'></div>
            {/* <img src={khali} className="divbackbutton" alt="not found"/> */}
          </div>
          {/* <div className ='divbackbutton'  /> */}
          <div className="divbackbutton" alt="not found"/>
        </div>
      </div>
    </>
  );
}
