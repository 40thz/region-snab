import React from "react";
import CountUp from "react-countup";
const StatItem = ({ title, subTitle, before , after}) => {
  return (
    <div className="about__inside-status">
      <div className="about__inside-status-title">
        {before}
        &nbsp;
        <CountUp end={title} />
        &nbsp;
        {after}
      </div>
      <div className="about__inside-status-subTitle">{subTitle}</div>
    </div>
  );
};

export default StatItem;
