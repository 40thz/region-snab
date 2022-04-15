import React from "react";
import buttonIcon from "@images/button-icon.png";

import RS from "../RS";

const AboutCall = ({ src, value, rsColor = "#BC4949", rsAnim = true }) => {
  return (
    <div className="about__call">
      <div className="about__call-image">
        <img src={src} alt="" />
      </div>
      <RS color={rsColor} animateText={rsAnim} />
      <div className="about__title">
        <div>{value}</div>
        <div>
          <div className="about-btn">
            <div className="about-btn-main">
              <img src={buttonIcon} alt="Кнопка" />
              Позвонить
            </div>
            <div className="about-btn-hide">+7 (391) 219-15-97</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCall;
