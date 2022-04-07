import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import StatItem from "../StatItem/StatItem";
import countImg from "@images/AboutIntro/countimg.jpg";

import ScrollTrigger from "react-scroll-trigger";

const AboutCounter = ({ offsetY }) => {
  const [startCounter, setStartCounter] = React.useState(false);

  const parallax = {
    counter: { transform: `translateY(-${offsetY / 3}px)` },
  };
  return (
    <div style={parallax.counter} className="counter">
      <div className="colum">
        <PreviewText value="О нас в цифрах" />
        <ScrollTrigger onEnter={() => setStartCounter(true)}>
          <div className="counter-statistics">
            {startCounter && (
              <>
                <StatItem
                  after="лет"
                  title={11}
                  subTitle="лет опыта оптовой реализации и перевозки нефтепродуктов"
                />
                <StatItem
                  before=">"
                  title={600000}
                  subTitle="тонн плановый объем перевалки нефтепродуктов в год через склад ГСМ"
                />
                <StatItem
                  after="м3"
                  title={19800}
                  subTitle="емкость собственного склада ГСМ"
                />
                <StatItem
                  after="тягачей"
                  title={45}
                  subTitle="с полуприцепом-цистерной в собственности"
                />
                <StatItem
                  before=">"
                  title={180000}
                  subTitle="тонн нефтепродуктов продаем в год"
                />
                <StatItem
                  before=">"
                  title={400000}
                  subTitle="тонн нефтепродуктов перевозим в год"
                />
              </>
            )}
          </div>
        </ScrollTrigger>
      </div>
      <div className="colum">
        <img src={countImg} alt="регион снаб" />
      </div>
    </div>
  );
};

export default AboutCounter;
