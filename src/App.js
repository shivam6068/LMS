import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Loginpage from "./LoginandSignup/Loginpageflow/Loginpage";
import Forgotpassword from "./LoginandSignup/Loginpageflow/Forgotpassword";
import Otppage from "./LoginandSignup/Loginpageflow/Otppage";
import Resetpasswordpage from "./LoginandSignup/Loginpageflow/Resetpasswordpage";
import Passwordupdated from "./LoginandSignup/Loginpageflow/Passwordupdated";

import Registerpage from "./LoginandSignup/Registerpageflow/Registerpage";
import OtpRegister from "./LoginandSignup/Registerpageflow/OtpRegister";
import Registersuccess from "./LoginandSignup/Registerpageflow/Registersuccess";

import First from "./MainPage/First";
import Enroll from "./MainPage/Enroll";
import Coursecart from './MainPage/Coursecart';
import Payment from './MainPage/Payment';

const App = () => {
  const [count,setcount]=useState(3);
  const [price,setprice]=useState(1599);
  const[hour,sethour]=useState(16);
  const add=()=>{
    if(count<6){
    setcount(count+1);
    setprice(price+500);
    sethour(hour-4);
    }
  }
  const minus=()=>{
    if(count>1){
    setcount(count-1);
    setprice(price-500);
    sethour(hour+4);
    }
  }
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*************************************LOGIN PAGE ROUTINGS  ***************************************/}
          <Route exact path="/" Component={Loginpage}></Route>
          <Route
            exact
            path="/forgotpassword"
            Component={Forgotpassword}
          ></Route>
          <Route exact path="/otppage" Component={Otppage}></Route>
          <Route
            exact
            path="/resetpassword"
            Component={Resetpasswordpage}
          ></Route>
          <Route
            exact
            path="/passwordsuccess"
            Component={Passwordupdated}
          ></Route>

          {/*********************************** REGISTER PAGE ROUTINGS **************************************/}
          <Route exact path="/registerpage" Component={Registerpage}></Route>
          <Route exact path="/otppageregister" Component={OtpRegister}></Route>
          <Route
            exact
            path="/registersuccess"
            Component={Registersuccess}
          ></Route>
        

        {/* {*************************MAIN PAGE ROUTES************************************************} */}
        < Route path='/mainpage' element={<First/>} />
        < Route path="/enrollpage" element={<Enroll count={count} price={price} add={add} minus={minus} hour={hour} />}/>
        <Route path="/coursecart" element={<Coursecart count={count} price={price} />} />
        <Route path="/payment" element={<Payment count={count} price={price} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
