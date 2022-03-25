import React from "react";
import bgCall from "@images/RS.svg";
import aboutImg from "@images/About/about-image.jpg";
import PreviewText from "../PreviewText/PreviewText";
import AboutText from "./AboutText/AboutText";
import AboutPreviewText from "./AboutPreviewText/AboutPreviewText";
import StatItem from "../StatItem/StatItem";
import Button from "../Button/Button";

const About = ({ offsetY }) => {
  return (
    <section id="about">
      <div className="container">
        <div className="about__call">
          <img src={bgCall} alt="" />
          <div className="about__title">
            готовы к сотрудничеству?
            <br />
            <span>Позвоните</span>
          </div>
        </div>
        <div className="about__inside">
          <div className="colum">
            <PreviewText value="Направления деятельности" />
            <div className="about__inside-logo">
              <img src={aboutImg} alt="" />
            </div>
            <AboutText />
          </div>
          <div className="colum">
            <AboutPreviewText offsetY={offsetY} />
            <div className="about__inside-statistics">
              <StatItem title="11" subTitle="опыт трейдерской деятельности " />
              <StatItem
                title="400000"
                subTitle="тонн нефтепродуктов перевозим в год "
              />
              <StatItem
                title="180000"
                subTitle="тонн нефтепродуктов продаем в год "
              />
              <StatItem
                title="45"
                subTitle="с полуприцепом-цистерной в собственности"
              />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
