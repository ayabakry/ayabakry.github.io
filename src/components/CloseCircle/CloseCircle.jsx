/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React, { useState } from "react";
import { Property1Bold } from "../../icons/Property1Bold";
import BoxShadow from '../Home/BoxShadow'
import "./style.css";
import "../Home/stylebox.css";



export const CloseCircle = ({ property1 }) => {
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
    <>

      {["broken", "bulk", "linear", "outline", "twotone"].includes(property1) && (

        <img
          className="close-circle"
          alt="Property linear"
          src={
            property1 === "outline"
              ? "/img/property-1-outline.svg"
              : property1 === "twotone"
                ? "/img/property-1-twotone.svg"
                : property1 === "bulk"
                  ? "/img/property-1-bulk.svg"
                  : property1 === "broken"
                    ? "/img/property-1-broken.svg"
                    : "/img/property-1-linear.svg"
          }
          // onClick={handlePhotoClick}
        />
      )}
    
        { property1 === "bold" && <Property1Bold className="close-circle" />}
        {/* <BoxShadow/> */}

    </>
  );
};

CloseCircle.propTypes = {
  property1: PropTypes.oneOf(["twotone", "broken", "outline", "bold", "linear", "bulk"]),
};

