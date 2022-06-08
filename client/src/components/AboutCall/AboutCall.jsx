import React from "react";

import buttonIcon from "@images/button-icon.png";

import RS from "../RS";

const AboutCall = ({
  src,
  value,
  rsColor = "#BC4949",
  rsAnim = true,
  btnName = "Позвонить",
  btnSubname = "+7 (391) 219-15-97",
  styleIcon = {},
  to,
}) => {
  return (
    <div className="about__call">
      <div style={styleIcon} className="about__call-image">
        <img src={src} alt="" />
      </div>
      <RS color={rsColor} animateText={rsAnim} />
      <div className="about__title">
        <div>{value}</div>
        <div>
          <a href={to ? to : "tel:+73912191597"} className="about-btn">
            <div className="about-btn-main">
              <img src={buttonIcon} alt="Кнопка" />
              {btnName}
            </div>
            <div className="about-btn-hide">{btnSubname}</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutCall;
