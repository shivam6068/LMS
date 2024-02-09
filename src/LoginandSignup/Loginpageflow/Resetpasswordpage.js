import React from "react";
import "./Resetpasswordpage.css";
import finallogo from "./Image/Innovascape_LogoFINAL-01-1-e1648461991642 (1) 1.svg";
import { useState } from "react";
import key from "./Image/vpn_key.svg";
import eye from "./Image/visibility.svg";
import closedeye from "./Image/visibility_off.svg";
import { Link } from "react-router-dom";
import error from "./Image/error.svg";
import back from "./Image/Frame 12.svg";
import { useNavigate } from "react-router-dom";

export default function Resetpasswordpage() {
  const [cond, setcond] = useState(1);
  const [password, setpassword] = useState("");
  const [passwordb, setpasswordb] = useState("");
  const [visible, setVisible] = useState(true);
  const [visibleb, setVisibleb] = useState(true);
  const [place, setplace] = useState(true);
  const [placeb, setplaceb] = useState(true);
  const [valid, setvalid] = useState(true);
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

  const fun3a = () => {
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

  const fun1a = (event) => {
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
    fun3a();
  };

  const fun1b = (event) => {
    setpasswordb(event.target.value);
    if (password === event.target.value) {
      setvalid(false);
    } else {
      setvalid(true);
    }
  };

  const fun2a = (event) => {
    if (place === true) {
      setplace(false);
    } else {
      setplace(true);
    }
  };

  const fun2b = (event) => {
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
  const navigate = useNavigate();

  return (
    <>
      <div className="Maindiv5">
        <div className="lgpg-pagecontainer">
          <div className="logininnerdivresetpass">
            <div>
              <img className="lgpg-pagelogo" src={finallogo} alt=""></img>
            </div>
            <div className="resetflexboxdiv">
              <span className="resetpassheading">Reset Password</span>
              <span className="resetparaheading">
                Changing password for : user@gmail.com
              </span>

              <div className="passnewMaindiv">
                {valid === true && checked ? (
                  <div className="passwordnotequal">
                    <img src={error}></img>
                    <span className="otperrormessagespanreset">
                      The entered passwords do not match. Please ensure they are
                      identical."
                    </span>
                  </div>
                ) : (
                  ""
                )}

                <p className="passnewpara">
                  <span className="passnewtext">New password</span>
                </p>

                <div
                  className="passnewsecdiv"
                  style={{
                    border:
                      place === true && password === ""
                        ? "none"
                        : "2px solid #400862",
                  }}
                >
                  <span className="passnewicon1">
                    {/* <VpnKeyIcon sx={{ fontSize: 20 }} color="disabled" /> */}
                    <img src={key} alt="not found" />
                  </span>

                  <input
                    type={visible === false ? "text" : "password"}
                    className="passnewinput"
                    placeholder={
                      place === true && password === ""
                        ? "Enter your password"
                        : ""
                    }
                    onChange={fun1a}
                    value={password}
                    onClick={fun2a}
                  ></input>
                  <span className="passnewicon2" onClick={emojichange}>
                    {visible === false ? (
                      // <RemoveRedEyeIcon sx={{ fontSize: 20 }} color="disabled" />
                      <img src={eye} alt="not found" />
                    ) : (
                      // <VisibilityOffIcon sx={{ fontSize: 20 }} color="disabled" />
                      <img src={closedeye} alt="not found" />
                    )}
                  </span>
                </div>
                <div style={{ display: password === "" ? "none" : "block" }}>
                  <section className="indicator">
                    <div
                      id="div1"
                      className="indicatordiv"
                      style={colorstyle1}
                    ></div>
                    <div
                      id="div2"
                      className="indicatordiv"
                      style={colorstyle2}
                    ></div>
                    <div
                      id="div3"
                      className="indicatordiv"
                      style={colorstyle3}
                    ></div>
                    <div
                      id="div4"
                      className="indicatordiv"
                      style={colorstyle4}
                    ></div>
                  </section>
                  <section className="para">
                    <p id="p1" className="indicatorpara" style={indstyle1}>
                      weak
                    </p>
                    <p id="p2" className="indicatorpara" style={indstyle2}>
                      Intermediate
                    </p>
                    <p id="p3" className="indicatorpara" style={indstyle3}>
                      strong
                    </p>
                    <p id="p4" className="indicatorpara" style={indstyle4}>
                      very strong
                    </p>
                  </section>
                </div>
              </div>

              <div className="passnewMaindiv">
                <p className="passnewpara">
                  <span className="passnewtext">Confirm New password</span>
                </p>
                <div
                  className="passnewsecdiv"
                  style={{
                    border:
                      valid && passwordb === "" && placeb === true
                        ? "none"
                        : valid && passwordb !== ""
                        ? "2px solid red"
                        : "2px solid #400862",
                  }}
                >
                  <span className="passnewicon1">
                    {/* <VpnKeyIcon sx={{ fontSize: 20 }} color="disabled" /> */}
                    <img src={key} alt="not found" />
                  </span>

                  <input
                    type={visibleb === false ? "text" : "password"}
                    className="passnewinput"
                    placeholder={
                      placeb === true && passwordb === ""
                        ? "Enter your password"
                        : ""
                    }
                    onChange={fun1b}
                    value={passwordb}
                    onClick={fun2b}
                  ></input>
                  <span className="passnewicon2" onClick={emojichangeb}>
                    {visibleb === false ? (
                      // <RemoveRedEyeIcon sx={{ fontSize: 20 }} color="disabled" />
                      <img src={eye} alt="not found" />
                    ) : (
                      // <VisibilityOffIcon sx={{ fontSize: 20 }} color="disabled" />
                      <img src={closedeye} alt="not found" />
                    )}
                  </span>
                </div>

                <span
                  className="errormessagepassword"
                  style={{
                    color: valid === true && passwordb !== "" ? "red" : "none",
                    display:
                      valid === true && passwordb !== "" ? "block" : "none",
                  }}
                >
                  Password doesn’t match.
                </span>
              </div>

              {valid === true ? (
                <button className="changepassbutton" onClick={check}>
                  Change Password
                </button>
              ) : (
                <Link to="/passwordsuccess">
                  <button className="changepassbutton" onClick={check}>
                    Change Password
                  </button>
                </Link>
              )}
              <span
                style={{ textAlign: "center", fontWeight: "bolder" }}
                className="backlogin"
              >
                Back to{" "}
                <Link to="/">
                  <a style={{ color: "#0038FF" }} href="">
                    Login
                  </a>
                </Link>
              </span>
            </div>
          </div>
          <img
            className="backbutton"
            onClick={() => navigate(-1)}
            src={back}
            alt="not found"
          />
        </div>
      </div>
    </>
  );
}
