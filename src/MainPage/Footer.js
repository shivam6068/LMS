import React from 'react'
import innovascape from './image/Innovascapelogo.svg';
import './Footer.css';
import './Footermedia.css';
const Footer = () => {
  return (
    <>
     <footer className="footer">
        <div className="footer1">
          <span className="footer1item"><img className="footer1img" src={innovascape} alt="not found"/></span>
          <span className="footer1item" style={{display:"flex",alignItems:"center",flexDirection:"column",justifyContent:"start"}}><h2>
          Quick Links </h2><h2>About Us</h2></span>
          <h2 className="footer1item">Programs</h2>
          <h2 className="footer1item">Social</h2>
        </div>
        <div className="footer2">
          <hr style={{color:"white"}}></hr>
          <p>All Rights Reserved | © 2023 Innovascape </p>
          
          </div>

      </footer>
    </>
  )
}

export default Footer