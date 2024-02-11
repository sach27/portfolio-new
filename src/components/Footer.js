import "./footerstyle.css"

import React from "react";
import {NavLink} from "react-router-dom";
import {FaGithub, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";
const Footer = ()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaMailBulk size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        <p>sach.thadani2021@vitstudent.ac.in</p>
                        <p>sachprofessional27@gmail.com</p> 
                    </div>
                    <div className="Phone">
                        <FaPhone size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        <p>9737371470</p>

                    </div>
                </div>
                <div className="right">
                    <h4>You can reach me out if</h4>
                    <p>you want someone to work on AI/ML</p>
                    <p>,data analytics, strategy backtesting,</p>
                    <p>development or deployment of trading indicators or trading algorithms.</p>
                    <div className="social">
                        
                        <NavLink to="https://www.linkedin.com/in/sach-thadani-5888101b2/">
                            <FaLinkedin size={20} style={{color:"#fff",
                        marginRight:"1rem"}}/>
                        </NavLink>
                        <NavLink to="https://www.instagram.com/sach_thadani/">
                            <FaInstagram size={20} style={{color:"#fff",
                            marginRight:"1rem"}}/>
                        </NavLink>
                        <NavLink to="https://github.com/sach27">
                            <FaGithub size={20} style={{color:"#fff",
                            marginRight:"1rem"}}/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
