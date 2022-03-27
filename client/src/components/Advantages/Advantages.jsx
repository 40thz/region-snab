import React from "react";
import AdvantageTitle from "./AdvantageTitle/AdvantageTitle";
import carImage from "@images/Advantage/car.png";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import ScrollTrigger from "react-scroll-trigger";
import { AnimateGroup } from "react-simple-animate";

import portfolioIcon from "@images/AdvantageItem/portfolio.svg";
import fileIcon from "@images/AdvantageItem/file.svg";
import proIcon from "@images/AdvantageItem/pro.svg";
import gearIcon from "@images/AdvantageItem/gear.svg";
import virifyIcon from "@images/AdvantageItem/verify.svg";

const Advantages = ({ offsetY }) => {
  const [animate, setAnimate] = React.useState(false)
  const parallax = {
    car: { left: `${offsetY - 2400 / 2}px` },
    section: { transform: `translateY(-${offsetY * 1.3}px)`, }
  }

  return (
    <div style={parallax.section} id="advantages" className="container">
      <div className="colum">
        <AdvantageTitle />
        <div style={parallax.car} className="advantages__car">
          <img src={carImage} alt="car" />
        </div>
      </div>
      <div className="colum half">
        <ScrollTrigger onEnter={() => setAnimate(true)}>
          <AnimateGroup play={animate}>
            <AdvantageItem
              icon={portfolioIcon}
              value="Обладает огромным и ценным опытом трейдерской деятельности"
              index={0}
            />
            <AdvantageItem
              icon={fileIcon}
              value="Работает с крупнейшими производителями по прямым долгосрочным договорам"
              index={1}
            />
            <AdvantageItem
              icon={proIcon}
              value="Зарекомендовала себя как исключительно стабильный, надежный и профессиональный партнер"
              index={2}
            />
            <AdvantageItem
              icon={virifyIcon}
              value="Гарантирует своевременную и безопасную доставку любого вида топлива по Красноярскому краю и ближайшим регионам"
              index={3}
            />
            <AdvantageItem
              icon={gearIcon}
              value="Обладает всей необходимой инфраструктурой и финансовыми средствами для выполнения своих обязательств и полного соответствия ожиданиям потребителей"
              index={4}
            />

          </AnimateGroup>
        </ScrollTrigger >
      </div>
    </div>
  );
};

export default Advantages;
