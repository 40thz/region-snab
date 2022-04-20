import React from "react";
import { useMobile } from "@hooks/useMobile";
import aboutImg from "@images/About/about-image.jpg";
import PreviewText from "../PreviewText/PreviewText";
import AboutText from "./AboutText/AboutText";
import AboutPreviewText from "./AboutPreviewText/AboutPreviewText";
import Button from "../Button/Button";
import buttonIcon from "@images/button-icon.png";
import AboutCall from "../AboutCall/AboutCall";

const About = ({ offsetY }) => {
  const isMobile = useMobile();

  return (
    <section id="about">
      <div className="container">
        <div
          style={{
            transform: `translateY(-${offsetY / 10}px)`,
          }}
        >
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
          />
        </div>
        <div className="about__inside">
          <div className="colum">
            <PreviewText value="Основные направления деятельности" />
            <div className="about__inside-logo">
              <img src={aboutImg} alt="" />
            </div>
          </div>

          <div className="colum">
            {!isMobile && <AboutPreviewText offsetY={offsetY} />}
            <div className="about__inside-content">
              <AboutText />
              <Button value="Подробнее о видах деятельности" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
