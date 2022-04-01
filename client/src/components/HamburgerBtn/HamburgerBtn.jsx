import React from "react";

const HamburgerBtn = ({ onClick, active }) => {
  return (
    <div onClick={onClick} className={`menu__btn ${active && "active"}`}>
      <div className="menu__btn-burger"></div>
    </div>
  );
};

export default HamburgerBtn;
