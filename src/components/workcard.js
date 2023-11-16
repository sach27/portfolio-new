import "./workcardstyle.css";

import React from 'react';
import {NavLink} from 'react-router-dom';
import indicator from "../assets/indicator.png";
import chess from "../assets/chess.png";
import pushup from "../assets/pushup.png";

export const workcard = () => { 
  return (
    <div className="work-container">
        
        <div className="project-container">
            <div className="project-card">
                <img src={indicator}  />
                <h2 className="project-title">
                    Trading indicator
                </h2>
                <div className="pro-details">
                    <p>
                    I made this indicator using PineScript programming language which is native to TradingView, since I made it for a stock broking firm so I am not allowed to share condition or any other details about the strategy behind it, therefore view and source won't be available
                    </p>
                    <div className="pro-btns">
                        <NavLink to="url.com" className="btn">
                            LinkedIn
                        </NavLink>
                        <NavLink to="url.com" className="btn">
                            GitHub
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={chess} />
                <h2 className="project-title">
                    Chess bot
                </h2>
                <div className="pro-details">
                    <p>
                    It is an AI based chess bot, which has capacity to play without human guidance, it has been programmed in Python and uses Nega-max algorithm and hurestics at it's core, though it might not be the best bot in industry it can still display intelligent behaviour and surprise humans at times.
                    </p>
                    <div className="pro-btns">
                        <NavLink to="https://www.linkedin.com/posts/sach-thadani-5888101b2_best-ai-carokann-activity-7123184613866225664-qNMZ?utm_source=share&utm_medium=member_desktop" className="btn">
                            LinkedIn
                        </NavLink>
                        <NavLink to="https://github.com/sach27/chess_engine" className="btn">
                            GitHub
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img src={pushup} />
                <h2 className="project-title">
                    Pushup-Pullup detector
                </h2>
                <div className="pro-details">
                    <p>
                    As the name suggest this project is able to detect and count total number of pushups and pullups that have been executed successfully in an video, I have used OpenCV and MediaPipe's Python wrap around for this project.
                    </p>
                    <div className="pro-btns">
                        <NavLink to="https://www.linkedin.com/posts/sach-thadani-5888101b2_opencv-mediapipe-python-activity-7116290614920417280-C-wB?utm_source=share&utm_medium=member_desktop" className="btn">
                            LinkedIn
                        </NavLink>
                        <NavLink to="https://github.com/sach27/pushup-pullup-detector" className="btn">
                            GitHub
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default workcard;
