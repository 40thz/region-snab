import React from "react";

const SliderFooter = ({ slider }) => {
  return (
    <div className="vacancy__slider-footer">
      <div className="vacancy__slider-buttons">
        <div className="slider-btn prev" onClick={slider?.slickPrev}>
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12.02L7 6.52002L0.999999 1.02002"
              stroke="#F0F1F1"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="slider-btn next" onClick={slider?.slickNext}>
          <svg
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12.02L7 6.52002L0.999999 1.02002"
              stroke="#F0F1F1"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div className="vacancy__slider-readmore">Подробнее о вакансии</div>
    </div>
  );
};

export default SliderFooter;
