import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import StatItem from "../StatItem/StatItem";
import countImg from "@images/AboutIntro/countimg.jpg";

const AboutCounter = () => {
  return (
    <div className="counter">
      <div className="colum">
        <PreviewText value="О нас в цифрах" />
        <div className="counter-statistics">
          <StatItem title={11} subTitle="опыт трейдерской деятельности " />
          <StatItem
            before=">"
            title={400000}
            subTitle="тонн нефтепродуктов перевозим в год "
          />
          <StatItem
            before=">"
            title={180000}
            subTitle="тонн нефтепродуктов продаем в год "
          />
          <StatItem
            after="тягачей"
            title={45}
            subTitle="с полуприцепом-цистерной в собственности"
          />
        </div>
      </div>
      <div className="colum">
        <img src={countImg} alt="регион снаб" />
      </div>
    </div>
  );
};

export default AboutCounter;
