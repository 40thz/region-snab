import React from "react";
import Button from "../Button/Button";
import { useParallax } from "../../hooks/useParallax";

const VacancyAbout = ({ data }) => {
  const parallax = useParallax();

  const parallaxAnim = {
    section: {
      transform: `translateY(-${parallax / 10}px)`,
    },
  };
  return (
    <div style={parallaxAnim.section} className="vacancy__about">
      <div className="colum">
        <div
          className="vacancy__about-title"
          dangerouslySetInnerHTML={{ __html: data?.description }}
        />
        <div className="vacancy__about-conditions">
          <div className="vacancy__about-conditions-title">Условия работы:</div>
          <div className="vacancy__about-conditions-list">
            {data?.conditions.map((item) => (
              <div className="vacancy__about-condition">{item}</div>
            ))}
          </div>
          <div className="vacancy__about-conditions-title">
            По всем вопросам можете обращаться в отдел персонала по телефону
            208-94-40.
          </div>
        </div>
      </div>
      <div className="colum">
        <Button value="Все вакансии" />
      </div>
    </div>
  );
};

export default VacancyAbout;
