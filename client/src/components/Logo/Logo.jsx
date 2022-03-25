import React from "react";
import LogoSvg from "@images/logo.svg";

const Logo = () => {
  return (
    <div className="logo">
      <div className="logo_icon">
        <img src={LogoSvg} alt="" />
      </div>
      <div className="logo_title">Регионснаб</div>
      <div className="logo_subtitle">поставки нефтепродуктов</div>
    </div>
  );
};

export default Logo;
