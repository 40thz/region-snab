import React from "react";

const StatItem = ({ title, subTitle }) => {
  return (
    <div className="about__inside-status">
      <div className="about__inside-status-title">{title}</div>
      <div className="about__inside-status-subTitle">{subTitle}</div>
    </div>
  );
};

export default StatItem;
