import React, { useState } from "react";
import "./First.css";
import "./Firstmedia.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import photo1 from "./image/image1.svg";
import photo2 from "./image/image2.svg";
import photo3 from "./image/image3.svg";
import photo4 from "./image/R1.svg";
import arrow from "./image/arrow_forward.png";
import notification from "./icons/main1.png";
import bestseller from "./image/Group 47.png";
import notwhite from  "./icons/main2.png";
import Navbar2 from "./Navbar2";
// import { useEffect } from "react";

// import { FlashOnTwoTone } from "@mui/icons-material";

const First = () => {
  const [var1,setvar1]=useState('Notify me');
  const [var2,setvar2]=useState('Notify me');
  const [var3,setvar3]=useState('Notify me');
  
  const [let1,setlet1]=useState(true);
  const [let2,setlet2]=useState(true);
  const [let3,setlet3]=useState(true);

  const [style1,setstyle1]=useState({visibility:'hidden'
  })
  const [style2,setstyle2]=useState({visibility:'hidden'
  })
  const [style3,setstyle3]=useState({visibility:'hidden'
})

  const [not1,setnot1]=useState();
  const [not2,setnot2]=useState();
  const [not3,setnot3]=useState();
  const [width, setwidth] = useState(0);

  const fun1=()=>{
    if(var1==='Notify me'){
      setvar1('You will be notified')
      setnot1({background: 'linear-gradient(138.98deg, #E58B24 8.76%, #442159 87.05%)'})
      setlet1(false);
    }else{
      setvar1('Notify me')
      setnot1({backgroundColor:'white',color:'black'})
      setlet1(true);
    }
  }

  
  const fun2=()=>{
    if(var2==='Notify me'){
      setvar2('You will be notified')
      setnot2({background: 'linear-gradient(138.98deg, #E58B24 8.76%, #442159 87.05%)'})
      setlet2(false);
    }else{
      setvar2('Notify me')
      setnot2({backgroundColor:'white',color:'black'})
      setlet2(true);
    }
  }

 
  const fun3=()=>{
    if(var3==='Notify me'){
      setvar3('You will be notified')
      setnot3({background: 'linear-gradient(138.98deg, #E58B24 8.76%, #442159 87.05%)'})
      setlet3(false);
    }else{
      setvar3('Notify me')
      setnot3({backgroundColor:'white',color:'black'})
      setlet3(true);
    }
  }
  
    //Implementing the setInterval method
    setInterval(() => {
        setwidth((window.innerWidth 
          || document.documentElement.clientWidth
          || document.body.clientWidth));
          // console.log(width)
    }, 1000);
  


  return (
    <>
    
      {((window.screen.width)<650)?<Navbar2/>:<Navbar/>}
      

      <div className="firstdiv1">
        <span className="firstdiv1span1">
          Hey Samarth, lets unlock your learning journey
        </span>
      </div>
      <div className="firstdiv2">
        <Link to="/enrollpage" className="link">
          <div className="firstdiv21">
            <div className="firstdiv211">
              <img className="bestseller" src={bestseller} alt="not found" />
              <span className="firstdiv21heading">Design Thinking</span>
              <span className="firstdiv21para">
                for innovative and inventive problem solving by
              </span>
              <img className="image4" src={photo4} alt="not found"></img>
            </div>
            <span className="firstdiv21heading1">Rohit R V</span>
            <img className="arrow" src={arrow} alt="not found"></img>
          </div>{" "}
        </Link>

        <div className="firstdiv22">
          <div className="firstdiv22div1">
            <button className="firstdiv22div1button" style={style1}>{var1}</button>
            <img   src={let1?notification:notwhite} className="notification"  alt="not found" onMouseEnter={()=>{setstyle1({visibility:'visible'})}}  onMouseLeave={()=>{setstyle1({visibility:'hidden'})}} onClick={()=>fun1()} style={not1} />
          </div>
          <div className="firstdiv22div2">
          <img className="firstdiv22photo" src={photo2} alt="notfound"></img>
          <h2 className="firstdiv22heading">UCDM</h2>
          <button className="firstdiv22button1">Coming Soon</button>
          <button className="firstdiv22button2">View Details</button>
          </div>
        </div>

        <div className="firstdiv22">
          <div className="firstdiv22div1">
            <button className="firstdiv22div1button" style={style2}>{var2}</button>
            <img className="notification"  src={let2?notification:notwhite} alt="not found" onMouseEnter={()=>{setstyle2({visibility:'visible'})}}  onMouseLeave={()=>{setstyle2({visibility:'hidden'})}} onClick={()=>fun2()} style={not2} />
          </div>
          <div className="firstdiv22div2">
          <img className="firstdiv22photo" src={photo1} alt="notfound"></img>
          <h2 className="firstdiv22heading">Systematic Innovation</h2>
          <button className="firstdiv22button1">Coming Soon</button>
          <button className="firstdiv22button2">View Details</button>
          </div>
        </div>

        <div className="firstdiv22">
          <div className="firstdiv22div1">
            <button className="firstdiv22div1button" style={style3}>{var3}</button>
            <img className="notification" src={let3?notification:notwhite} alt="not found" onMouseEnter={()=>{setstyle3({visibility:'visible'})}}  onMouseLeave={()=>{setstyle3({visibility:'hidden'})}} onClick={()=>fun3()} style={not3}/>
          </div>
          <div className="firstdiv22div2">
            <img className="firstdiv22photo" src={photo3} alt="notfound"></img>
            <h2 className="firstdiv22heading">TOPS</h2>
            <button className="firstdiv22button1">Coming Soon</button>
            <button className="firstdiv22button2">View Details</button>
          </div>
        </div>
      </div>
      {((width)<650)?"":<Footer/>}
    </>
  );
};

export default First;
