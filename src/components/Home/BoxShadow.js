import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CloseCircle } from "../../components/CloseCircle";
import "./stylebox.css";
import './style.css';
import EELU_Dev from "./EELU_Dev";
import { Link } from "react-router-dom";


function Box() {
  // const [isBlurred, setIsBlurred] = useState(false);
  // const [isComponentOpen, setIsComponentOpen] = useState(false);

  // const handlePhotoClick = () => {
  //   setIsBlurred(true);
  //   setIsComponentOpen(true);
  // };

  // const handleCloseComponent = () => {
  //   setIsBlurred(false);
  //   setIsComponentOpen(false);
  // };
  return (
    <div className="box">
      <div className="big-ads">
        <div className="overlap">
          <div className="shades" />
          <div className="blured">
            <div className="overlap-group">
              <div className="rectangle" />
              <img
                className="img"
                alt="Rectangle"
                src="https://generation-sessions.s3.amazonaws.com/9ebbc09a1369ff57efbd746e06d69b17/img/rectangle.png"
              />
            </div>
          </div>
          <div className="styledev" >
            <EELU_Dev />
          </div>
          <div className="group">
            <div className="div">
              <img
                className="big-ads-2"
                alt="Big ads"
                src="https://generation-sessions.s3.amazonaws.com/9ebbc09a1369ff57efbd746e06d69b17/img/big-ads.png"
               
              />
              <Link to="/home"  className="btn-close"  style={{
                width:'50px', 
                height:'50px',
                flexShrink:'0', 
                left:"1000px",
                padding:'20px',
             
            }}>
            
                
              </Link>
           
              {/* <CloseCircle property1="bold" /> */}
            </div>
          </div>
        </div>
        {/* //  )} */}
      </div>
    </div>

  );
};
export default Box