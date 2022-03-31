import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import Logo from "../Logo/Logo";
import RS from "../RS";
import buttonIcon from "@images/button-icon.png";

import knpImg from "@images/Company/кнп.png";
import gazpromImg from "@images/Company/газпром.png";
import mejregImg from "@images/Company/межрегионгаз.png";
import rosneftImg from "@images/Company/роснефть.png";
import badgeImg from "@images/Company/badge.png";

import ScrollTrigger from "react-scroll-trigger";

const Company = () => {
  const [startLine, setStartLine] = React.useState(false);
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
            <div className="company__logo">
              <Logo row bgColor="#B63A3A" />
            </div>
          </div>

          <div className="colum">
            <ScrollTrigger onEnter={() => setStartLine(true)}>
              <div className="company__item">
                <img src={knpImg} alt="кнп" />
              </div>
              <div className="company__item">
                <img src={gazpromImg} alt="газпром" />
              </div>
              <div className="company__item">
                <img src={mejregImg} alt="межрегионгаз" />
              </div>
              <div className="company__item">
                <img src={rosneftImg} alt="роснефть" />
              </div>
              {startLine && (
                <svg
                  width="543"
                  height="459"
                  viewBox="0 0 543 459"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    id="companyline1"
                    d="M541 1C510.324 0.999914 462.724 19.6741 462.724 80.0912C462.724 158.396 424.115 208.882 335.26 208.882C254.067 208.882 181.696 208.882 126.611 208.882C21.0309 208.882 1 251.826 1 335"
                    stroke="#1D232E"
                    stroke-opacity="0.25"
                    stroke-dasharray="5 5"
                  />

                  <path
                    id="companyline2"
                    d="M541 151H194.155C98.3797 151 62 184.399 62 335"
                    stroke="#1D232E"
                    stroke-opacity="0.25"
                    stroke-dasharray="5 5"
                  />
                  <path
                    id="companyline3"
                    d="M542 306C477.849 306 438.326 306 438.326 357.389C438.326 408.778 399.5 407.999 309.274 407.999H211"
                    stroke="#1D232E"
                    stroke-opacity="0.25"
                    stroke-dasharray="5 5"
                  />
                  <path
                    id="companyline4"
                    d="M213 458H543"
                    stroke="#1D232E"
                    stroke-opacity="0.25"
                    stroke-dasharray="5 5"
                  />
                </svg>
              )}
            </ScrollTrigger>
          </div>
        </div>
        <ScrollTrigger onEnter={() => setBadgeActive(true)}>
          <div className="company__call">
            <div className={`badge ${badgeActive && "active"}`}>
              <img src={badgeImg} alt="бейджик регион снаб" />
            </div>
            <RS color="#BC4949" />
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
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Company;
