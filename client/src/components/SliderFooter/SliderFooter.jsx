import React from "react";
import { Link } from "react-router-dom";

const SliderFooter = ({
  slider,
  currentItemId = "",
  currentSlider,
  counter,
  btnValue,
  to = "",
}) => {
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
        {counter && (
          <div className="vacancy__slider-footer-counter">
            {currentSlider} из {slider?.props.children.length}
          </div>
        )}
      </div>
      <Link to={currentItemId ? `vacancy/${currentItemId}` : to}>
        <div className="vacancy__slider-readmore">{btnValue}</div>
      </Link>
    </div>
  );
};

export default SliderFooter;
