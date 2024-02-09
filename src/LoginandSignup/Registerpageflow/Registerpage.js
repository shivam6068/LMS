// import React, { useEffect } from "react";
import "./Registerpage.css";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

//forcaptchacomponent............................................................................................................................
import { useState } from "react";
import reload from "./image/refresh.png";
import google from "./image/google.png";
import loginfun from '../Loginpageflow/Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg';

// for email component...................................................................................................................................................
// import MailOutlineIcon from "@mui/icons-material/MailOutline";
import mail from "./image/mail.png";

// for username component..........................................................................................................................................

// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import accountcircle from "./image/account_circle.png";

// for password component..........................................................................................................................................

// import error from "./image/error.png";
// import VpnKeyIcon from "@mui/icons-material/VpnKey";
// import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import key from "../Loginpageflow/Image/vpn_key.svg";
import eye from "../Loginpageflow/Image/visibility.svg";
import closedeye from "../Loginpageflow/Image/visibility_off.svg";
// import Visibility from "./image/visibility.png";
// import VisibilityOff from "./image/visibility_off.png";
// import vpnkey from "./image/vpn_key.png";

// for first name...............................................................................................................................................
import badge from "./image/badge.png";

// for occupation component..........................................................................................................................................
import work from "./image/work.png";

// for phone component..........................................................................................................................................
// import React, { useState } from "react";
import "react-phone-input-2/lib/style.css";
import PhoneInput from "react-phone-input-2";
// import "./Phone.css";

// ............................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................................

export default function Registerpage() {
  // for captcha component.................................................................................................................................................

  const [newcaptcha, setnewcaptcha] = useState('Xbt67gv');
  const [captcha, setcaptcha] = useState("");
  const [inputcaptchastyle, setinputcaptchastyle] = useState(null);
  const [placeshow, setplaceshow] = useState(true);
  // const [border,setborder]=useState(true);
  const setcaptchavalue = (event) => {
    setcaptcha(event.target.value);
  };
 
  const inputcaptchafun = () => {
    if (inputcaptchastyle === null) {
      setinputcaptchastyle({ border: ".19rem solid darkblue" });
      setplaceshow(false);
    } else {
      setinputcaptchastyle(null);
      setplaceshow(true);
    }
  };

  const generate = () => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = " ";
    const charactersLength = characters.length;
    for (let i = 0; i < 7; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

      setnewcaptcha(result);
  
  };

  //for email component....................................................................................................................................................
  const [email, setemail] = useState("");
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

  // for username component.....................................................................................................................
  const [username, setusername] = useState("");
  const [uservalid, setuserValid] = useState(false);
  const [userplace, setuserplace] = useState(true);
  const [guide, setguide] = useState({
    display: "none",
  });
  const userfun1 = (event) => {
    setusername(event.target.value);

    if (
      event.target.value.length > 5 &&
      event.target.value.length < 13 &&
      /\d/.test(event.target.value.toString()) &&
      !/[A-Z]/.test(event.target.value.toString()) &&
      !/.[!,@,#,$,%,^,&,*,?,~,-,(,)]/.test(event.target.value.toString())
    ) {
      setuserValid(true);
    } else {
      setuserValid(false);
    }
  };
  const userfun2 = () => {
    if (userplace === true) {
      setuserplace(false);
    } else if (userplace === false) {
      setuserplace(true);
    }
  };

  // for fisrt name component....................................................................................................................

  const [firstname, setfirstname] = useState("");

  const [firstnamestyles, setfirstnamestyles] = useState({
    border: "none",
  });
  const [firstnameplace, setfirstnameplace] = useState(true);
  const firstnamefun1 = (event) => {
    setfirstname(event.target.value);
  };

  const firstnamefun2 = () => {
    if (firstnameplace === true) {
      setfirstnameplace(false);
      if (firstname === "") {
        setfirstnamestyles({
          border: ".2rem solid #400862",
        });
      }
    } else if (firstnameplace === false) {
      setfirstnameplace(true);
      if (firstname === "") {
        setfirstnamestyles({
          border: "none",
        });
      }
    }
  };

  // for Last name component....................................................................................................................

  const [Lastname, setLastname] = useState("");

  const [Lastnamestyles, setLastnamestyles] = useState({
    border: "none",
  });
  const [Lastnameplace, setLastnameplace] = useState(true);
  const Lastnamefun1 = (event) => {
    setLastname(event.target.value);
  };

  const Lastnamefun2 = () => {
    if (Lastnameplace === true) {
      setLastnameplace(false);
      if (Lastname === "") {
        setLastnamestyles({
          border: ".2rem solid #400862",
        });
      }
    } else if (Lastnameplace === false) {
      setLastnameplace(true);
      if (Lastname === "") {
        setLastnamestyles({
          border: "none",
        });
      }
    }
  };

  // for occupation component....................................................................................................................

  const [occupation, setoccupation] = useState("");

  const [occupationstyles, setoccupationstyles] = useState({
    border: "none",
  });
  const [occupationplace, setoccupationplace] = useState(true);
  const occupationfun1 = (event) => {
    setoccupation(event.target.value);
  };

  const occupationfun2 = () => {
    if (occupationplace === true) {
      setoccupationplace(false);
      if (occupation === "") {
        setoccupationstyles({
          border: ".2rem solid #400862",
        });
      }
    } else if (occupationplace === false) {
      setoccupationplace(true);
      if (occupation === "") {
        setoccupationstyles({
          border: "none",
        });
      }
    }
  };

  // phone number component.....................................................................................................................

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phonevalid, setphoneValid] = useState(true);

  const handleChange = (value) => {
    setPhoneNumber(value);
    setphoneValid(PhoneNumberVal(value));
  };

  const PhoneNumberVal = (phoneNumber) => {
    const phoneNumberPattern = /^\+?[1-9]\d{1,14}$/;

    return phoneNumberPattern.test(phoneNumber);
  };

  // for password component......................................................................................................................
  const [cond, setcond] = useState(1);
  const [password, setpassword] = useState("");
  const [passwordb, setpasswordb] = useState("");
  const [visible, setVisible] = useState(true);
  const [visibleb, setVisibleb] = useState(true);
  const [placea, setplacea] = useState(true);
  const [placeb, setplaceb] = useState(true);
  const [valida, setvalida] = useState(true);
  const [checked, setchecked] = useState(false);
  const [indstyle1, setindstyle1] = useState({ visibility: "hidden" });
  const [indstyle2, setindstyle2] = useState({ visibility: "hidden" });
  const [indstyle3, setindstyle3] = useState({ visibility: "hidden" });
  const [indstyle4, setindstyle4] = useState({ visibility: "hidden" });
  const [colorstyle1, setcolorstyle1] = useState({
    visibility: "hidden",
    backgroundColor: "grey",
  });
  const [colorstyle2, setcolorstyle2] = useState({
    visibility: "hidden",
    backgroundColor: "grey",
  });
  const [colorstyle3, setcolorstyle3] = useState({
    visibility: "hidden",
    backgroundColor: "grey",
  });
  const [colorstyle4, setcolorstyle4] = useState({
    visibility: "hidden",
    backgroundColor: "grey",
  });

  const fun3passa = () => {
    if (cond === 1) {
      setindstyle1({
        visibility: "visible",
      });
      setindstyle2({
        visibility: "hidden",
      });
      setindstyle3({
        visibility: "hidden",
      });
      setindstyle4({
        visibility: "hidden",
      });
    } else if (cond === 2) {
      setindstyle1({
        visibility: "hidden",
      });
      setindstyle2({
        visibility: "visible",
      });
      setindstyle3({
        visibility: "hidden",
      });
      setindstyle4({
        visibility: "hidden",
      });
    } else if (cond === 3) {
      setindstyle1({
        visibility: "hidden",
      });
      setindstyle2({
        visibility: "hidden",
      });
      setindstyle3({
        visibility: "visible",
      });
      setindstyle4({
        visibility: "hidden",
      });
    } else if (cond === 4) {
      setindstyle1({
        visibility: "hidden",
      });
      setindstyle2({
        visibility: "hidden",
      });
      setindstyle3({
        visibility: "hidden",
      });
      setindstyle4({
        visibility: "visible",
      });
    }

    if (cond === 1) {
      setcolorstyle1({
        visibility: "visible",
        backgroundColor: "#FF5732",
      });
      setcolorstyle2({
        visibility: "hidden",
      });
      setcolorstyle3({
        visibility: "hidden",
      });
      setcolorstyle4({
        visibility: "hidden",
      });
    } else if (cond === 2) {
      setcolorstyle1({
        visibility: "visible",
        backgroundColor: "#FF5732",
      });
      setcolorstyle2({
        visibility: "visible",
        backgroundColor: "#EBE200",
      });
      setcolorstyle3({
        visibility: "hidden",
      });
      setcolorstyle4({
        visibility: "hidden",
      });
    } else if (cond === 3) {
      setcolorstyle1({
        visibility: "visible",
        backgroundColor: "#FF5732",
      });
      setcolorstyle2({
        visibility: "visible",
        backgroundColor: "#EBE200",
      });
      setcolorstyle3({
        visibility: "visible",
        backgroundColor: "#31F700",
      });
      setcolorstyle4({
        visibility: "hidden",
      });
    } else if (cond === 4) {
      setcolorstyle1({
        visibility: "visible",
        backgroundColor: "#FF5732",
      });
      setcolorstyle2({
        visibility: "visible",
        backgroundColor: "#EBE200",
      });
      setcolorstyle3({
        visibility: "visible",
        backgroundColor: "#31F700",
      });
      setcolorstyle4({
        visibility: "visible",
        backgroundColor: "#0038FF",
      });
    }
  };

  const fun1passa = (event) => {
    setpassword(event.target.value);

    if (
      event.target.value.length > 6 &&
      /[a-z]/.test(event.target.value.toString()) &&
      /[A-Z]/.test(event.target.value.toString()) &&
      /\d/.test(event.target.value.toString()) &&
      /.[!,@,_,#,$,%,^,&,*,?,~,-,(,)]/.test(event.target.value.toString())
    ) {
      setcond(4);
    } else if (
      event.target.value.length > 4 &&
      /[A-Z]/.test(event.target.value.toString()) &&
      /\d/.test(event.target.value.toString())
    ) {
      setcond(3);
    } else if (
      (event.target.value.length > 2 && event.target.value.match(/[A-Z]/)) ||
      (event.target.value.length > 2 &&
        /.[!,@,_,#,$,%,^,&,*,?,~,-,(,)]/.test(event.target.value.toString())) ||
      (event.target.value.length > 2 &&
        /\d/.test(event.target.value.toString()))
    ) {
      setcond(2);
    } else {
      setcond(1);
    }
    fun3passa();
  };

  const fun1passb = (event) => {
    setpasswordb(event.target.value);
    if (password === event.target.value) {
      setvalida(false);
    } else {
      setvalida(true);
    }
  };

  const fun2passa = (event) => {
    if (placea === true) {
      setplacea(false);
    } else {
      setplacea(true);
    }
  };

  const fun2passb = (event) => {
    if (placeb === true) {
      setplaceb(false);
    } else {
      setplaceb(true);
    }
  };

  const emojichange = () => {
    if (visible === true) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  };

  const emojichangeb = () => {
    if (visibleb === true) {
      setVisibleb(false);
    } else {
      setVisibleb(true);
    }
  };

  const check = () => {
    if (checked === false) {
      setchecked(true);
    } else {
      setchecked(false);
    }
  };
  return (
    <>
      <div className="registerpagemaindiv1">
        <div className="registerpagemaindiv2">
          <div>
            <img className="lgpg-pagelogo" src={loginfun} alt=""></img>
          </div>

          <span className="registerpagespan1">
            Get Ready to Dive into the World of Learning!
          </span>

          <section className="registerpagesection1">
            <div className="registerpagediv1">
              {/*email component starts from here.. ................................................................................................................................................. */}
              <div className="registeremailmaindiv">
                <p className="registeremailpara">
                  <span className="registeremailtext">Email</span>
                </p>
                <div
                  className="registeremailsecdiv"
                  style={{
                    border:
                      valid === null && email === "" && place === true
                        ? "none"
                        : valid === null && email !== ""
                        ? ".2rem solid red"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="registeremailicon">
                    <img className="registericon" src={mail} alt="not found" />
                  </span>
                  <input
                    className="registeremailinput"
                    placeholder={
                      place === true ? "Enter your mail address" : ""
                    }
                    onChange={fun1}
                    value={email}
                    onClick={fun2}
                  />
                </div>

                <span
                  className="registererrormessageemail"
                  style={{
                    color: valid === null && email !== "" ? "red" : "none",
                    display: valid === null && email !== "" ? "block" : "none",
                  }}
                >
                  Please enter a valid email address.
                </span>
              </div>
              {/* email component ends here................................................................................................................................................... */}

              {/* username component starts from here................................................................................................................................................... */}
              <div className="usermaindiv">
                <p className="userpara">
                  <span className="usertext">Username</span>
                  <span
                    className="usericon1"
                    onMouseOver={() => {
                      setguide({
                        display: "inline-block",
                      });
                    }}
                    onMouseLeave={() => {
                      setguide({
                        display: "none",
                      });
                    }}
                  >
                    <InfoOutlinedIcon
                      style={{
                        fontSize: '2rem',
                        "&:hover": {
                          scale: 1.0,
                          boxShadow: "0px .4rem 2rem 0px rgba(30, 10, 58, 0.35)",
                          borderRadius: "50%",
                        },
                      }}
                      color="disabled"
                    />
                    {/* <img src={accountcircle}style={{fontSize: 20,
                        "&:hover": {
                          scale: 1.0,
                          boxShadow: "0px 4px 20px 0px rgba(30, 10, 58, 0.35)",
                          borderRadius: "50%",
                        },}} alt="not found"/> */}
                  </span>
                </p>

                <div
                  className="usersecdiv"
                  style={{
                    // border:
                    //   valid === false && username !== ""
                    //     ? "2px solid red"
                    //     : "2px solid #400862",
                    border:
                      uservalid === false &&
                      username === "" &&
                      userplace === true
                        ? "none"
                        : uservalid === false && username !== ""
                        ? ".2rem solid red"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="usericon2">
                    <img className="registericon" src={accountcircle} alt="not found" />
                  </span>
                  <input
                    className="userinput"
                    placeholder={userplace === true ? "Enter username" : ""}
                    onChange={userfun1}
                    value={username}
                    onClick={userfun2}
                  ></input>
                </div>

                <span
                  className="errorusername"
                  style={{
                    color:
                      uservalid === false && username !== "" ? "red" : "none",
                    display:
                      uservalid === false && username !== "" ? "block" : "none",
                  }}
                >
                  {" "}
                  Please enter a valid user name.
                </span>
                <div className="guiderdiv" style={guide}>
                  <section className="userguider">
                    <h3 id="heading">Username requirements</h3>
                    <ul className="list">
                      <li>6-12 characters long</li>
                      <li>Must contains a mix of letters and numbers</li>
                      <li>Case-sensitive(cannot use uppercase)</li>
                      <li>
                        Cannot start or include special characters,except
                        underscore(_) and full stop(.){" "}
                      </li>
                    </ul>
                  </section>
                </div>
              </div>
              {/* username component ends here................................................................................................................................................... */}
            </div>

            <div className="registerpagediv1">
              {/* first name components starts from here................................................................................................................................................... */}
              <div className="registeremailmaindiv">
                <p className="registeremailpara">
                  <span className="registeremailtext">First name</span>
                </p>
                <div
                  className="registeremailsecdiv"
                  style={{
                    // border:
                    //   valid === false && username !== ""
                    //     ? "2px solid red"
                    //     : "2px solid #400862",
                    border:
                      firstnameplace === true
                        ? "none"
                        : firstname === ""
                        ? ".2rem solid red"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="registeremailicon">
                    <img className="registericon" src={badge} alt="not found" />
                  </span>
                  <input
                    className="registeremailinput"
                    placeholder={
                      firstnameplace === true ? "Enter your first name" : ""
                    }
                    onChange={firstnamefun1}
                    value={firstname}
                    onClick={firstnamefun2}
                  />
                </div>

                <span
                  className="registererrormessageemail"
                  style={{
                    color:
                      firstnameplace === false && firstname === ""
                        ? "red"
                        : "none",
                    display:
                      firstnameplace === false && firstname === ""
                        ? "block"
                        : "none",
                  }}
                >
                  This field is mandatory. Please fill it out.
                </span>
              </div>
              {/* first name component ends here....................................................................................................................................................*/}

              {/*last name components starts from here ................................................................................................................................................... */}
              <div className="registeremailmaindiv">
                <p className="registeremailpara">
                  <span className="registeremailtext">Last name</span>
                </p>
                <div
                  className="registeremailsecdiv"
                  style={{
                    // border:
                    //   valid === false && username !== ""
                    //     ? "2px solid red"
                    //     : "2px solid #400862",
                    border:
                      Lastnameplace === true
                        ? "none"
                        : Lastname === ""
                        ? ".2rem solid red"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="registeremailicon">
                    <img src={badge} className="registericon" alt="not found" />
                  </span>
                  <input
                    className="registeremailinput"
                    placeholder={
                      Lastnameplace === true ? "Enter your last name" : ""
                    }
                    onChange={Lastnamefun1}
                    value={Lastname}
                    onClick={Lastnamefun2}
                  />
                </div>

                <span
                  className="registererrormessageemail"
                  style={{
                    color:
                      Lastnameplace === false && Lastname === ""
                        ? "red"
                        : "none",
                    display:
                      Lastnameplace === false && Lastname === ""
                        ? "block"
                        : "none",
                  }}
                >
                  This field is mandatory. Please fill it out.
                </span>
              </div>
              {/* last name component ends here................................................................................................................................ ...................*/}
            </div>

            <div className="registerpagediv1">
              {/*occupation component starts from here ................................................................................................................................................... */}
              <div className="registeremailmaindiv">
                <p className="registeremailpara">
                  <span className="registeremailtext">Occupation</span>
                </p>
                <div
                  className="registeremailsecdiv"
                  style={{
                    // border:
                    //   valid === false && username !== ""
                    //     ? "2px solid red"
                    //     : "2px solid #400862",
                    border:
                      occupationplace === true
                        ? "none"
                        : occupation === ""
                        ? ".2rem solid red"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="registeremailicon">
                    <img src={work} className="registericon" alt="not found" />
                  </span>
                  <input
                    className="registeremailinput"
                    placeholder={
                      occupationplace === true ? "Enter your occupation" : ""
                    }
                    onChange={occupationfun1}
                    value={occupation}
                    onClick={occupationfun2}
                  />
                </div>

                <span
                  className="registererrormessageemail"
                  style={{
                    color:
                      occupationplace === false && occupation === ""
                        ? "red"
                        : "none",
                    display:
                      occupationplace === false && occupation === ""
                        ? "block"
                        : "none",
                  }}
                >
                  This field is mandatory. Please fill it out.
                </span>
              </div>

              {/* occupation components ends here ................................................................................................................................ ...................*/}

              {/*phone number component ................................................................................................................................................... */}

              <div className="registerphonemaindiv" style={{zIndex:'100'}}>
                <p className="registeremailpara">
                  <span className="registeremailtext">Mobile number</span>
                </p>
                <div className="registeremailsecdiv" >
                  <PhoneInput
                    country={"in"}
                    value={phoneNumber}
                    onChange={handleChange}
                    inputProps={{
                      required: true,
                    }}
                    placeholder="Enter phone number"
                    containerStyle={{
                      // width: "354px",
                      // height: "62px",
                      borderRadius: "1.2rem",
                      border: phonevalid === false ? ".2rem solid red" : "none",
                    }}
                    inputStyle={{
                      width: "39rem",
                      height: "5.2rem",
                      borderRadius: "1.2rem",
                      // border:"2px solid red"
                      cursor:'pointer',
                      border:'none',
                      fontSize:'1.5rem'
                    }}
                    // className="registeremailinput"
                  />

                  {!phonevalid && (
                    <p className="errormessagepassword" style={{top:'5.2rem'}}>
                      Please enter a valid phone number.
                    </p>
                  )}
                </div>
              </div>

              {/* ................................................................................................................................................... */}
            </div>
            <div className="registerpagediv1">
              {/* password component starts here................................................................................................................................................... */}

              <div className="passnewMaindiv">
                <p className="passnewpara">
                  <span className="passnewtext">Password</span>
                </p>

                <div
                  className="passnewsecdiv"
                  style={{
                    border:
                      placea === true && password === ""
                        ? "none"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="passnewicon1">
                    {/* <VpnKeyIcon sx={{ fontSize: 20 }} color="disabled" /> */}
                    <img className="registericon" src={key} alt="not found"/>
                  </span>

                  <input
                    type={visible === false ? "text" : "password"}
                    className="passnewinput"
                    placeholder={
                      placea === true && password === ""
                        ? "Enter your password"
                        : ""
                    }
                    onChange={fun1passa}
                    value={password}
                    onClick={fun2passa}
                  ></input>
                  <span className="passnewicon2" onClick={emojichange}>
                    {visible === false ? (
                      // <RemoveRedEyeIcon
                      //   sx={{ fontSize: 20 }}
                      //   color="disabled"
                      // />
                      <img className="registericon" src={eye} alt="not found"/>
                    ) : (
                      // <VisibilityOffIcon
                      //   sx={{ fontSize: 20 }}
                      //   color="disabled"
                      // />
                      <img className="registericon" src={closedeye} alt="not found"/>
                    )}
                  </span>
                </div>
                
              </div>

              {/* password component ends here................................................................................................................................................... */}

              {/* confirm password component starts here.................................................................................................................................................... */}

              <div className="passnewMaindiv" >
                <p className="passnewpara">
                  <span className="passnewtext">Confirm password</span>
                </p>
                <div
                  className="passnewsecdiv"
                  style={{
                    border:
                      valida && passwordb === "" && placeb === true
                        ? "none"
                        : valida && passwordb !== ""
                        ? ".2rem solid red"
                        : ".2rem solid #400862",
                  }}
                >
                  <span className="passnewicon1">
                  <img className="registericon" src={key} alt="not found"/>
                  </span>

                  <input
                    type={visibleb === false ? "text" : "password"}
                    className="passnewinput"
                    placeholder={
                      placeb === true && passwordb === ""
                        ? "Enter your password"
                        : ""
                    }
                    onChange={fun1passb}
                    value={passwordb}
                    onClick={fun2passb}
                  ></input>
                  <span className="passnewicon2" onClick={emojichangeb}>
                  {visibleb === false ? (
                      // <RemoveRedEyeIcon
                      //   sx={{ fontSize: 20 }}
                      //   color="disabled"
                      // />
                      <img className="registericon" src={eye} alt="not found"/>
                    ) : (
                      // <VisibilityOffIcon
                      //   sx={{ fontSize: 20 }}
                      //   color="disabled"
                      // />
                      <img className="registericon" src={closedeye} alt="not found"/>
                    )}
                  </span>
                </div>

                <span
                  className="errormessagepassword"
                  style={{
                    color: valida === true && passwordb !== "" ? "red" : "none",
                    display:
                      valida === true && passwordb !== "" ? "block" : "none",
                  }}
                >
                  Password doesn’t match.
                </span>
              </div>

              {/* confirm password component ends here................................................................................................................................ ...................*/}
            </div>
          </section>
          <div
                  className="strenghtindicator"
                  style={{ display: password === "" ? "none" : "block" }}
                >
                  <section className="regindicator">
                    <div
                      id="div1"
                      className="regindicatordiv"
                      style={colorstyle1}
                    ></div>
                    <div
                      id="div2"
                      className="regindicatordiv"
                      style={colorstyle2}
                    ></div>
                    <div
                      id="div3"
                      className="regindicatordiv"
                      style={colorstyle3}
                    ></div>
                    <div
                      id="div4"
                      className="regindicatordiv"
                      style={colorstyle4}
                    ></div>
                  </section>
                  <section className="regpara">
                    <p id="p1" className="regindicatorpara" style={indstyle1}>
                      weak
                    </p>
                    <p id="p2" className="regindicatorpara" style={indstyle2}>
                      Intermediate
                    </p>
                    <p id="p3" className="regindicatorpara" style={indstyle3}>
                      strong
                    </p>
                    <p id="p4" className="regindicatorpara" style={indstyle4}>
                      very strong
                    </p>
                  </section>
                </div>
              

          <span className="registerpagespan2">
            <input className="registerinput" type="checkbox" />I have read and
            agree to the company’s{" "}
            <a href="" style={{ color: "#0038FF",marginLeft:'8px' }}>
              {" "}
              Terms and Conditions.
            </a>
          </span>

          {/* captcha component starts from here ....................................................................................... .........................................*/}
          <div className="maincaptchadiv">
            <div className="mainspan">
              <input
                maxlength="7"
                type="text"
                className="inputcaptcha"
                placeholder={placeshow ? "Enter captcha" : ""}
                value={captcha}
                onChange={setcaptchavalue}
                onClick={inputcaptchafun}
                style={{
                  border:
                    (captcha!==newcaptcha) && captcha === "" && placeshow === true
                      ? "none"
                      : (captcha===newcaptcha) && captcha !== ""
                      ? ".2rem solid #400862"
                      : ".2rem solid red",
                }}
              />
              <span className="captcha">{newcaptcha}</span>
              <img
                src={reload}
                className="reloadcaptcha"
                onClick={generate}
                alt="no found"
              />
            </div>
            <span className="captchaerrormessage">
              {captcha === "" && placeshow === false
                ? "This field is mandatory. Please fill it out.":(captcha===""||captcha===newcaptcha)?"":"invalid captcha"
                }
            </span>
          </div>
          {/* captcha component ends here.............................................................................................................................*/}

          {/* login component starts here ............................................................................................................................*/}
          <div className="lastdivlogin">
            <Link to="/otppageregister">
              {" "}
              <button className="lastdivloginbutton1">Signup</button>
            </Link>
            <span className="spacingline">
              <hr
                style={{
                  width: "40%",
                  height: ".15rem",
                  backgroundColor: "#BDA8CA",
                }}
              ></hr>{" "}
              <p className="orpara">or</p>
              <hr
                style={{
                  width: "40%",
                  height: ".15rem",
                  backgroundColor: "#BDA8CA",
                }}
              ></hr>
            </span>
            <button className="lastdivloginbutton2">
              <img className="google" src={google} alt="not fount" />
              Sign up with Google
            </button>
            <p className="createaccount" style={{ fontWeight: "600" }}>
            Already have an account?{" "}
              <Link to="/">
                <a
                  className="createaccounta"
                  href=""
                  style={{ color: "#0038FF" }}
                >
                  Login
                </a>
              </Link>
            </p>
          </div>
          {/* login component ends here................................................................................................................................. */}
        </div>
      </div>
    </>
  );
}

// export default Registerpage;
