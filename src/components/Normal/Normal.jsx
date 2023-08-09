/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Normal = ({ state, size, className, elementClassName }) => {
  return (
    <div className={`normal ${state} ${size} ${className}`}>
      <div className={`text-wrapper ${elementClassName}`}>تسجيل الدخول</div>
    </div>
  );
};

Normal.propTypes = {
  state: PropTypes.oneOf(["disabled", "hover", "active", "default"]),
  size: PropTypes.oneOf(["large", "xsmall", "xlarge", "small", "medium"]),
};
