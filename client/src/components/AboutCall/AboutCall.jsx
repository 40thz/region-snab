import React from "react";
import buttonIcon from "@images/button-icon.png";
import helmetImg from "@images/Directions/helmet.png";
import RS from "../RS";

const AboutCall = () => {
  return (
    <div className="about__call">
      <div className="about__call-image">
        <img src={helmetImg} alt="" />
      </div>
      <RS color="#BC4949" animateText />
      <div className="about__title">
        <div>Мы знаем про нефтепродуктообеспечение почти все!</div>
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
