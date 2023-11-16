import "./Aboutcontentstyle.css"


import React from 'react';
import {Link} from "react-router-dom";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
function Aboutcontent() {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>
                I am a third year btech student who is passionate
                about data analytics, AI/ML and web development.
                I can create responsive and secure web application, I can analyze data and find actionable incites
                and also develope and deploy machine learning algorithms.
                If you want someone to work in any of these fields or if you are a girl looking for a date(you know just in case) 
                please feel free to contact me 
            </p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>

        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={img1} className="img" alt="text"/>
                </div>
                <div className="img-stack bottom">
                    <img src={img2} className="img" alt='hello'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent