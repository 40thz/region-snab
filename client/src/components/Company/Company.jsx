import React from "react";
import cn from "classnames";
import PreviewText from "../PreviewText/PreviewText";
import RS from "../RS";
import buttonIcon from "@images/button-icon.png";

import badgeImg from "@images/Company/badge.png";

import gazImg from "@images/Company/газпром.png";
import lykoilImg from "@images/Company/лукойл.png";
import rosImg from "@images/Company/роснефть.png";
import syrImg from "@images/Company/сургут.png";
import taifImg from "@images/Company/таиф.png";
import tatImg from "@images/Company/тат.png";
import fortImg from "@images/Company/форте.png";

import ScrollTrigger from "react-scroll-trigger";

const Company = () => {
  const [badgeActive, setBadgeActive] = React.useState(false);
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

            <div className="company-list">
              <div className="company-list-item company1">
                <img src={gazImg} alt="газпром" />
              </div>
              <div className="company-list-item company2">
                <img src={lykoilImg} alt="лукойл" />
              </div>
              <div className="company-list-item company3">
                <img src={rosImg} alt="роснефть" />
              </div>
              <div className="company-list-item company4">
                <img src={tatImg} alt="татнефть" />
              </div>
              <div className="company-list-item company5">
                <img src={syrImg} alt="сургутнефть" />
              </div>
              <div className="company-list-item company6">
                <img src={fortImg} alt="фортинвест" />
              </div>
              <div className="company-list-item company7">
                <img src={taifImg} alt="таиф-нк" />
              </div>
            </div>
            <ScrollTrigger onEnter={() => setBadgeActive(true)}>
              <div className="company__call">
                <div className="company__call-inside">
                  <div className="company__call-title">
                    Почему наши клиенты становятся постоянными?
                  </div>
                  <div className="company__call-subtitle">
                    Потому что опасный груз можно доверить только
                    профессионалам. Доверьтесь и Вы!
                  </div>
                  <div>
                    <a href="tel:+73912191597" className="about-btn">
                      <div className="about-btn-main">
                        <img src={buttonIcon} alt="Кнопка" />
                        Позвонить
                      </div>
                      <div className="about-btn-hide">+7 (391) 219-15-97</div>
                    </a>
                  </div>
                </div>
              </div>
            </ScrollTrigger>
          </div>

          <div className="bgRs">
            <div className="bgRs-line">
              <RS color="#BC4949" animateText />
              <RS color="#BC4949" animateText />
              <RS color="#BC4949" animateText />
              <RS color="#BC4949" animateText />
              <RS color="#BC4949" animateText />
              <RS color="#BC4949" animateText />
            </div>
            <div className={cn("badge", { active: badgeActive })}>
              <img src={badgeImg} alt="бейджик регион снаб" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
