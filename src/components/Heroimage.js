import "./Heroimagestyle.css";

import React from 'react';
import background from "../assets/background.jpeg"
import { Link } from "react-router-dom";
const Heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="background-img"
            src={background} alt="background"/>
        </div>
        <div className="content">
            <p>Hello, I'M Sach Thadani</p>
            <h1>AI-ML and MERN stack developer </h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
    </div>
  )
}

export default Heroimage