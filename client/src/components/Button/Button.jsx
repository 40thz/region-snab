import React from "react";
import buttonIcon from "@images/button-icon.png";

const Button = ({ onClick, value }) => {
  return (
    <button onClick={onClick} className="button">
      <div className="button__icon">
        <img src={buttonIcon} alt="" />
      </div>
      <div className="button__value">{value}</div>
    </button>
  );
};

export default Button;
