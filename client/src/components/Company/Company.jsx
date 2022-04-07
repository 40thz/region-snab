import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import RS from "../RS";
import buttonIcon from "@images/button-icon.png";
import badgeImg from "@images/Company/badge.png";

import ScrollTrigger from "react-scroll-trigger";

import { AnimateGroup, Animate } from "react-simple-animate";

const Company = () => {
  return (
    <section id="company">
      <div className="container">
        <div className="company__inside">
          <div className="colum">
            <PreviewText value="Работа с вертикально интегрированными компаниями" />
            <div className="company__title">
              Мы работаем только <span>с проверенными партнерами,</span>&nbsp;
              гарантируя качество нефтепродуктов
            </div>
            <div className="company__call">
              {/* <div className={`badge ${badgeActive && "active"}`}>
                <img src={badgeImg} alt="бейджик регион снаб" />
              </div>
              <RS color="#BC4949" animateText /> */}
              <div className="company__call-inside">
                <div className="company__call-title">
                  Почему наши клиенты становятся постоянными?
                </div>
                <div className="company__call-subtitle">
                  Потому что опасный груз можно доверить только профессионалам.
                  Доверьтесь и Вы!
                </div>
                <div>
                  <div className="about-btn">
                    <img src={buttonIcon} alt="Кнопка" />
                    Позвонить
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="colum">
            <div className="bgRs">
              <div className="bgRs-line">
                <RS color="#BC4949" animateText />
                <RS color="#BC4949" animateText />
                <RS color="#BC4949" animateText />
                <RS color="#BC4949" animateText />
                <RS color="#BC4949" animateText />
                <RS color="#BC4949" animateText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
