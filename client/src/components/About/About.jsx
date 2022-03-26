import React from "react";
import aboutImg from "@images/About/about-image.jpg";
import PreviewText from "../PreviewText/PreviewText";
import AboutText from "./AboutText/AboutText";
import AboutPreviewText from "./AboutPreviewText/AboutPreviewText";
import StatItem from "../StatItem/StatItem";
import Button from "../Button/Button";
import ScrollTrigger from "react-scroll-trigger";
import buttonIcon from "@images/button-icon.png";
import RS from "../RS";

const About = ({ offsetY }) => {
  const [startCounter, setStartCounter] = React.useState(false)

  return (
    <section className="center" id="about">
      <div className="container">
        <div className="about__call">
          <RS color='#f8f8f8' />
          <div className="about__title">
            <div>
              готовы к сотрудничеству?
              <br />
              <span>Позвоните</span>
            </div>
            <div>
            </div>
          </div>
        </div>
        <div className="about__inside">
          <div
            className="colum">
            <PreviewText value="Направления деятельности" />
            <div className="about__inside-logo">
              <img src={aboutImg} alt="" />
            </div>
            <AboutText />
          </div>

          <div className="colum">
            <AboutPreviewText offsetY={offsetY} />
            <ScrollTrigger onEnter={() => setStartCounter(true)}>
              <div className="about__inside-statistics">
                {startCounter &&
                  <>
                    <StatItem
                      title={11}
                      subTitle="опыт трейдерской деятельности "
                    />
                    <StatItem
                      before='>'
                      title={400000}
                      subTitle="тонн нефтепродуктов перевозим в год "
                    />
                    <StatItem
                      before='>'
                      title={180000}
                      subTitle="тонн нефтепродуктов продаем в год "
                    />
                    <StatItem
                      after='тягачей'
                      title={45}
                      subTitle="с полуприцепом-цистерной в собственности"
                    />
                    <Button value='Подробнее о видах деятельности' />
                  </>
                }

              </div>
            </ScrollTrigger>
          </div>
        </div>

      </div>
    </section >
  );
};

export default About;
