import React from "react";
import buttonIcon from "@images/button-icon.svg";

const Button = () => {
  return (
    <div className="button">
      <div className="button__icon">
        <img src={buttonIcon} alt="" />
      </div>
      <div className="button__value">Узнать больше</div>
    </div>
  );
};

export default Button;
