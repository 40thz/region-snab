import React from "react";
import CountUp from "react-countup";
const StatItem = ({ title, subTitle }) => {
  return (
    <div className="about__inside-status">
      <div className="about__inside-status-title">
        <CountUp end={parseInt(title)} />
      </div>
      <div className="about__inside-status-subTitle">{subTitle}</div>
    </div>
  );
};

export default StatItem;
