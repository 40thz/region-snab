import React from "react";

const AdvantageSliderItem = ({ icon, title, subtitle }) => {
  return (
    <div className="advantageSlideContent">
      <div className="advantageSlideContent-icon">
        <img src={icon} alt="caseIcon" />
      </div>
      <div className="advantageSlideContent-title">{title}</div>
      <div className="advantageSlideContent-subtitle">{subtitle}</div>
    </div>
  );
};

export default AdvantageSliderItem;
