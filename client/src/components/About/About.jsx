import React from "react";
import { useMobile } from "@hooks/useMobile";

import aboutImg from "@images/About/about-image.jpg";
import PreviewText from "../PreviewText/PreviewText";
import AboutText from "./AboutText/AboutText";
import AboutPreviewText from "./AboutPreviewText/AboutPreviewText";
import Button from "../Button/Button";

import AboutCall from "../AboutCall/AboutCall";
import { Link } from "react-router-dom";

const About = () => {
  const isMobile = useMobile();

  return (
    <section id="about">
      <div className="container">
        <AboutCall
          value={
            <div>
              готовы к сотрудничеству?
              <br />
              <span>Позвоните</span>
            </div>
          }
          rsColor="#fff"
          rsAnim={false}
          parallax
        />
        <div className="about__inside">
          <div className="colum">
            {isMobile && <AboutPreviewText />}
            <PreviewText value="Основные направления деятельности" />
            <div className="about__inside-logo">
              <img src={aboutImg} alt="" />
            </div>
          </div>

          <div className="colum">
            {!isMobile && <AboutPreviewText parallax />}
            <div className="about__inside-content">
              <AboutText />
              <Link to="/directions">
                <Button value="Подробнее о видах деятельности" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
