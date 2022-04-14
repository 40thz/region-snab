import React from "react";
import buttonIcon from "@images/button-icon.png";

import RS from "../RS";

const AboutCall = ({ src, value }) => {
  return (
    <div className="about__call">
      <div className="about__call-image">
        <img src={src} alt="" />
      </div>
      <RS color="#BC4949" animateText />
      <div className="about__title">
        <div>{value}</div>
        <div>
          <div className="about-btn">
            <img src={buttonIcon} alt="Кнопка" />
            Позвонить
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCall;
