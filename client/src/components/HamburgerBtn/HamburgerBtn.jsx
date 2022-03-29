import React from "react";

const HamburgerBtn = ({ onClick, active }) => {
  return (
    <div onClick={onClick} className={`hamburger__btn ${active && "active"}`}>
      <div></div>
    </div>
  );
};

export default HamburgerBtn;
