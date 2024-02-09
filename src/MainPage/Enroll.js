import React, { useState } from "react";
import "./Enroll.css";
import "./Enrollmedia.css";
import Comment from "./Comment";
import Dot from "./Dot";
import Navbar from "./Navbar";
import { useRef } from 'react';

import image1 from "./image/image4.svg";
// import frame99 from "./icons/Frame 99.png";
// import frame102 from "./icons/Frame 102.png";
// import frame104 from "./icons/Frame 104.png";
// import frame105 from "./icons/Frame 105.png";
import frame134 from "./image/Frame 134 (1).png";
import group150 from "./icons/Frame 150.png";
import group159 from "./image/Group 159.png";
import log1 from "./icons/Vector 14.png";
import log2 from "./icons/Group 145.png";
import log3 from "./icons/Vector 12.png";
import log4 from "./icons/Group 144.png";
import log5 from "./icons/Frame.png";
import video from "./video/video1.mp4";
import star from "./image/5 star.svg";
import Footer from "./Footer";
import Language from "./icons/language.svg";
import certificate from "./icons/Certificate.svg";

const Enroll = (prop) => {
  const [rotate1, setrotate1] = useState(true);
  const [rotate2, setrotate2] = useState(true);
  const [rotate3, setrotate3] = useState(true);
  const [rotate4, setrotate4] = useState(true);
  const [rotate5, setrotate5] = useState(true);

  const [kk, setkk] = useState(1);

  const [backcolor, setbackcolor] = useState({ backgroundColor: "#2E94C9" });

  const [visible, setvisible] = useState(false);

  const fun3 = (check) => {
    console.log(check);
    if (check === 1 && rotate1 === true) {
      setrotate1(false);
      setrotate2(true);
      setrotate3(true);
      setrotate4(true);
      setrotate5(true);
      setbackcolor({ backgroundColor: "#2E94C9", transition: "1s ease" });
    } else if (check === 2 && rotate2 === true) {
      setrotate1(true);
      setrotate2(false);
      setrotate3(true);
      setrotate4(true);
      setrotate5(true);
      setbackcolor({ backgroundColor: " #8C5AA5", transition: "1s ease" });
    } else if (check === 3 && rotate3 === true) {
      setrotate1(true);
      setrotate2(true);
      setrotate3(false);
      setrotate4(true);
      setrotate5(true);
      setbackcolor({ backgroundColor: "#D14C44", transition: "1s ease" });
    } else if (check === 4 && rotate4 === true) {
      setrotate1(true);
      setrotate2(true);
      setrotate3(true);
      setrotate4(false);
      setrotate5(true);
      setbackcolor({ backgroundColor: "#3C459C", transition: "1s ease" });
    } else if (check === 5 && rotate5 === true) {
      setrotate1(true);
      setrotate2(true);
      setrotate3(true);
      setrotate4(true);
      setrotate5(false);
      setbackcolor({ backgroundColor: "#3D5E44", transition: "1s ease" });
    }
  };
  const fun4 = (check1) => {
    setkk(check1);
  };

  const fun5 = () => {
    if (visible === false) {
      setvisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setvisible(false);
      document.body.style.overflow = "scroll";
    }
  };

  const firstItemRef = useRef(null);

  return (
    <>
      <section className="mainsectionenrollpage">
        {/* navbar of the enroll screen ............................................................................................................*/}
        <Navbar />

        {/* section 2 of the enroll screen....................................................................................................... */}

        <section className="enrollsection2">
          <div className="enrollsection2div1">
            <div className="enrollsection2div1main1">
              <span id="heading">
                <div className="enrollsection2heading">Design Thinking</div>
              </span>
              <span className="enrollsection2span">
                For Innovative and Inventive Problem solving
              </span>
              <button className="enrollsection2button" onClick={fun5}>
                Enroll
              </button>
            </div>
            <div className="enrollsection2div1main2">
              <span className="enrollsection2imagespan">
                <img
                  src={image1}
                  alt="not found"
                  className="enrollsection2image"
                />
              </span>
            </div>
          </div>
          <div className="enrollsection2div2">
            <span className="enrollsection2div2span">
              {/* <img
              src={frame102}
              alt="not found"
              className="enrollsection2div2icon"
            /> */}
              <span className="enrollsection2div2span1">5500+</span>
              <span className="enrollsection2div2span2">already enrolled</span>
            </span>
            <span className="enrollsection2div2span">
              <img
                style={{ height: "7rem", width: "19rem" }}
                src={star}
                alt="not found"
              />
              <span 
                onClick={() => firstItemRef.current.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" })}
                
                
                style={{
                  color: "blue",
                  fontWeight: "600",
                  position: "relative",
                  bottom: "1.5rem",
                  textDecoration:'underline',
                  cursor:'pointer'

                }}
              >
                Reviews
              </span>
            </span>
            <span className="enrollsection2div2span">
              <img
                style={{ height: "5rem", width: "10rem" }}
                src={certificate}
                alt="not found"
              />
              <span className="certificatepara">
                Certification on completion
              </span>
            </span>
            <span className="enrollsection2div2span">
              {/* <span style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'red'}}> */}
                <img
                  style={{ height: "5rem", width: "10rem" }}
                  src={Language}
                  alt="not found"
                />
              {/* </span> */}
              <span className="certificatepara" style={{width:'20rem'}}> English course language</span>
            </span>
          </div>
        </section>
        {visible ? (
          <Dot
            fun={fun5}
            count={prop.count}
            price={prop.price}
            add={prop.add}
            minus={prop.minus}
            hour={prop.hour}
          />
        ) : null}
        {/* design thinking element and section 3 starts here.............................................................................................................. */}
        <section className="enrollsection3">
          <div className="enrollsection3div1">
            <img className="designthinkingimg" src={frame134} alt="not found" />
          </div>
          <div className="enrollsection3div2">
            <p className="enrollsection3para">
              A curated set of 5 modules to evoke, discover and create
              innovative solutions that is uniquely crafted with multiple media
              for diverse learning. The modules has a blended mix of visual,
              audio and theater, based content for teaching and tutoring to
              deliver effective outcomes for wicked/challenging problems
              encompassing society and business opportunities.{" "}
            </p>
          </div>

          <div className="enrollsection3div3">
            <div className="enrollsection3div31">
              <div className="enrollsection3first">
                <div className="enrollsection3first1">
                  <div
                    className="enrollsection3first11"
                    style={{
                      background: kk === 1 ? "#442159" : "#44215933",
                      color: kk === 1 ? "white" : "",
                      transition: kk === 1 ? "1s ease" : "0.7s ease",
                    }}
                    onClick={() => fun4(1)}
                  >
                    Why Design Thinking?
                  </div>
                  <div
                    className="enrollsection3first11"
                    style={{
                      background: kk === 2 ? "#442159" : "#44215933",
                      color: kk === 2 ? "white" : "",
                      transition: kk === 1 ? "1s ease" : "0.7s ease",
                    }}
                    onClick={() => fun4(2)}
                  >
                    How?
                  </div>
                  <div
                    className="enrollsection3first11"
                    style={{
                      background: kk === 3 ? "#442159" : "#44215933",
                      color: kk === 3 ? "white" : "",
                      transition: kk === 1 ? "1s ease" : "0.7s ease",
                    }}
                    onClick={() => fun4(3)}
                  >
                    For whom?
                  </div>
                </div>
                <div className="enrollsection3first2">
                  {(() => {
                    if (kk === 1) {
                      return (
                        <>
                          <p>
                            To learn and apply sequential techniques in an
                            intuitive and iterative way that creates an interest
                            in learning, experimenting and applying to get
                            effective and sustainable solutions for the problem
                            chosen.
                          </p>
                        </>
                      );
                    } else if (kk === 2) {
                      return (
                        <>
                          <p>
                            Through a curated set of tool and techniques for
                            self discovery and teaming up, enabled through an
                            unique blend of audio visuals, theatre , gaming ,
                            case studies and narratives. The course is designed
                            to inculcate deep learning by application.
                          </p>
                        </>
                      );
                    } else if (kk === 3) {
                      return (
                        <>
                          <p>
                            Individuals Students Colleges/ Institutions NGOs,
                            CSR projects, Social workers Organizations
                          </p>
                        </>
                      );
                    }
                  })()}
                </div>
              </div>
              <div className="enrollsection3second">
                {" "}
                <video
                  className="enrollsection3secondvideo"
                  controls
                  muted
                  // autoPlay
                  src={video}
                  type="video/mp4"
                />
              </div>
            </div>
          </div>

          {/* section 4 starts here ....................................................................................................................................*/}
          <section className="enrollsection4">
            <h3 className="enrollsection4heading">Design Thinking Modules</h3>
            <div className="enrollsection4firstdiv">
              <span className="enrollsection4firstdivspan">
                <div
                  className="enrollsection4firstdiv1"
                  style={
                    rotate1 === true
                      ? { backgroundColor: "#2E94C9", transition: "1s ease" }
                      : {
                          backgroundColor: "#2E94C6",
                          rotate: "45deg",
                          scale: "1.1",
                          transition: "1s ease",
                        }
                  }
                  onClick={() => fun3(1)}
                >
                  <img
                    className="designthinkinglogo"
                    style={
                      rotate1 === true
                        ? { transition: "1s ease" }
                        : {
                            rotate: "-45deg",
                            scale: "1",
                            transition: "1s ease",
                          }
                    }
                    src={log1}
                    alt="not found"
                  ></img>
                </div>
                <h2 className="enrollsection4firstdivheading">Empathy</h2>
              </span>
              <span className="enrollsection4firstdivspan">
                <div
                  className="enrollsection4firstdiv1"
                  style={
                    rotate2 === true
                      ? { backgroundColor: " #8C5AA5", transition: "1s ease" }
                      : {
                          backgroundColor: " #8C5AA5",
                          rotate: "45deg",
                          scale: "1.1",
                          transition: "1s ease",
                        }
                  }
                  onClick={() => fun3(2)}
                >
                  {" "}
                  <img
                    className="designthinkinglogo"
                    style={
                      rotate2 === true
                        ? { transition: "1s ease" }
                        : {
                            rotate: "-45deg",
                            scale: "1",
                            transition: "1s ease",
                          }
                    }
                    src={log2}
                    alt="not found"
                  ></img>
                </div>
                <h2 className="enrollsection4firstdivheading">Define</h2>
              </span>
              <span className="enrollsection4firstdivspan">
                <div
                  className="enrollsection4firstdiv1"
                  style={
                    rotate3 === true
                      ? { backgroundColor: "#D14C44", transition: "1s ease" }
                      : {
                          backgroundColor: "#D14C44",
                          rotate: "45deg",
                          scale: "1.1",
                          transition: "1s ease",
                        }
                  }
                  onClick={() => fun3(3)}
                >
                  {" "}
                  <img
                    className="designthinkinglogo"
                    style={
                      rotate3 === true
                        ? { transition: "1s ease" }
                        : {
                            rotate: "-45deg",
                            scale: "1",
                            transition: "1s ease",
                          }
                    }
                    src={log3}
                    alt="not found"
                  ></img>
                </div>
                <h2 className="enrollsection4firstdivheading">Ideate</h2>
              </span>
              <span className="enrollsection4firstdivspan">
                <div
                  className="enrollsection4firstdiv1"
                  style={
                    rotate4 === true
                      ? { backgroundColor: "#3C459C", transition: "1s ease" }
                      : {
                          backgroundColor: "#3C459C",
                          rotate: "45deg",
                          scale: "1.1",
                          transition: "1s ease",
                        }
                  }
                  onClick={() => fun3(4)}
                >
                  {" "}
                  <img
                    className="designthinkinglogo"
                    style={
                      rotate4 === true
                        ? { transition: "1s ease" }
                        : {
                            rotate: "-45deg",
                            scale: "1",
                            transition: "1s ease",
                          }
                    }
                    src={log4}
                    alt="not found"
                  ></img>
                </div>
                <h2 className="enrollsection4firstdivheading">Prototype</h2>
              </span>
              <span className="enrollsection4firstdivspan">
                <div
                  className="enrollsection4firstdiv1"
                  style={
                    rotate5 === true
                      ? { backgroundColor: " #3D5E44", transition: "1s ease" }
                      : {
                          backgroundColor: " #3D5E44",
                          rotate: "45deg",
                          scale: "1.1",
                          transition: "1s ease",
                        }
                  }
                  onClick={() => fun3(5)}
                >
                  {" "}
                  <img
                    className="designthinkinglogo"
                    style={
                      rotate5 === true
                        ? { transition: "1s ease" }
                        : {
                            rotate: "-45deg",
                            scale: "1",
                            transition: "1s ease",
                          }
                    }
                    src={log5}
                    alt="not found"
                  ></img>
                </div>
                <h2 className="enrollsection4firstdivheading">Test</h2>
              </span>
            </div>
            <div className="enrollsection4seconddiv" style={backcolor}>
              {(() => {
                if (
                  rotate1 === false &&
                  rotate2 === true &&
                  rotate3 === true &&
                  rotate4 === true &&
                  rotate5 === true
                ) {
                  // setbackcolor({backgroundColor:"#2E94C9"})
                  return (
                    <>
                      <h3 className="enrollsection4seconddivheading">
                        Module 1: Empathy
                      </h3>
                      <p className="enrollsection4para">
                        Interviews and Interacting with through Active Listening
                        with Stakeholders to create Empathy maps and work out a
                        Empathy Situation Statement-On Basic Problem or
                        Opportunity Statement.
                      </p>
                    </>
                  );
                } else if (
                  rotate1 === true &&
                  rotate2 === false &&
                  rotate3 === true &&
                  rotate4 === true &&
                  rotate5 === true
                ) {
                  // setbackcolor({backgroundColor:" #8C5AA5" })
                  return (
                    <>
                      <h3 className="enrollsection4seconddivheading">
                        Module 2: Define
                      </h3>
                      <p className="enrollsection4para">
                        Develop Stakeholder Personas and Reframe the Basic
                        Statement to a Point of View Statement-user,Needs and
                        Benefits.
                      </p>
                    </>
                  );
                } else if (
                  rotate1 === true &&
                  rotate2 === true &&
                  rotate3 === false &&
                  rotate4 === true &&
                  rotate5 === true
                ) {
                  // setbackcolor({backgroundColor:"#D14C44"})
                  return (
                    <>
                      <h3 className="enrollsection4seconddivheading">
                        Module 3: Ideate
                      </h3>
                      <p className="enrollsection4para">
                        Leran and use 8 way method and creativity techniques to
                        generate many ideas and scientifically evaluate the
                        ideas for Developing Prototype(s).
                      </p>
                    </>
                  );
                } else if (
                  rotate1 === true &&
                  rotate2 === true &&
                  rotate3 === true &&
                  rotate4 === false &&
                  rotate5 === true
                ) {
                  // setbackcolor({backgroundColor:"#3C459C"})
                  return (
                    <>
                      <h3 className="enrollsection4seconddivheading">
                        Module 4: Prototype
                      </h3>
                      <p className="enrollsection4para">
                        Work out the specifications or details of the Prototype
                        through design kits and create a scaled version for
                        quick test/feedback from identified stakeholders.
                      </p>
                    </>
                  );
                } else if (
                  rotate1 === true &&
                  rotate2 === true &&
                  rotate3 === true &&
                  rotate4 === true &&
                  rotate5 === false
                ) {
                  // setbackcolor({backgroundColor:"#3D5E44"})
                  return (
                    <>
                      <h3 className="enrollsection4seconddivheading">
                        Module 5: Test
                      </h3>
                      <p className="enrollsection4para">
                        Test the solution with stakeholders and ensure that the
                        problem is completely resolved and can be sustained.
                      </p>
                    </>
                  );
                } else if (
                  rotate1 === true &&
                  rotate2 === true &&
                  rotate3 === true &&
                  rotate4 === true &&
                  rotate5 === true
                ) {
                  return (
                    <>
                      <h3 className="enrollsection4seconddivheading">
                        Module 1: Empathy
                      </h3>
                      <p className="enrollsection4para">
                        Interviews and Interacting with through Active Listening
                        with Stakeholders to create Empathy maps and work out a
                        Empathy Situation Statement-On Basic Problem or
                        Opportunity Statement.
                      </p>
                    </>
                  );
                }
              })()}
            </div>
          </section>

          {/* section 5 starts here.................................................................................................................................... */}

          <section className="enrollsection5">
            <h3 className="enrollsection5heading">
              What makes this course UNIQUE?
            </h3>
            <div className="enrollsection5firstdiv">
              <img
                className="enrollsection5img"
                src={group150}
                alt="not found"
              />
              <img
                className="enrollsection5img"
                src={group150}
                alt="not found"
              />
              <img
                className="enrollsection5img"
                src={group150}
                alt="not found"
              />
              <img
                className="enrollsection5img"
                src={group150}
                alt="not found"
              />
              <img
                className="enrollsection5img"
                src={group150}
                alt="not found"
              />
              <img
                className="enrollsection5img"
                src={group150}
                alt="not found"
              />
            </div>
          </section>

          {/* section 6 starts here............................................................................................................. */}
          <section className="enrollsection6">
            <div className="enrollsection6div1">
              <div className="enrollsection6first">
                <div className="enrollsection6first1">Advantages/ Benifits</div>
                <div className="enrollsection6first2">
                  <ul className="enrollsection6first3">
                    <li>Experiential approach to problem-solving.</li>
                    <li>Understanding stakeholders.</li>
                    <li>Hands-on learning of creative tools and techniques.</li>
                    <li>Developing Innovative solutions.</li>
                    <li>Systematic implementation.</li>
                    <li>
                      Valuable add-on to the portfolio skill set. & Portfolio
                      Creation.
                    </li>
                    <li>Adds to Employability and Problem Solving potential</li>
                  </ul>
                </div>
              </div>
              <div className="enrollsection6second">
                <div className="enrollsection6second1">
                  Skills you will gain
                </div>
                <div className="enrollsection6second2">
                  <ul className="enrollsection6second3">
                    <li>Empathy and User-Centric Focus</li>
                    <li>Problem-Solving</li>
                    <li>Design Thinking</li>
                    <li>User Research</li>
                    <li>Critical Thinking</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>

        {/* section 7 starts here...................................................................................................................... */}

        <section className="enrollsection7">
          <h1 className="enrollsection7heading">Meet our facilitators</h1>
          <span className="enrollsection7span">
            <img className="enrollsection7img" src={group159} alt="not found" />
          </span>
        </section>

        {/* section 8 starts here .........................................................................................................*/}

        <section className="enrollsection8" ref={firstItemRef}>
          <h1 className="enrollsection8heading">Hear from our learners</h1>
          <div className="enrollsection8div">
            <div className="enrollsection8div1">
              <div className="enrollsection8div11">
                <Comment />
              </div>
              <div className="enrollsection8div12">
                <Comment />
              </div>
            </div>
            <div className="enrollsection8div2">
              <div className="enrollsection8div21">
                <Comment />
              </div>
              <div className="enrollsection8div22">
                <Comment />
              </div>
            </div>
          </div>
          <button className="enrollsection8button">Show all reviews</button>
        </section>

        {/* footer section starts here...........................................................................................................s */}
        <Footer />
      </section>
    </>
  );
};

export default Enroll;
