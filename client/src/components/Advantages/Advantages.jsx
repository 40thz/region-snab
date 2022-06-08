import React from "react";
import AdvantageTitle from "./AdvantageTitle/AdvantageTitle";
import carImage from "@images/Advantage/car.png";
import AdvantageItem from "@components/AdvantageItem/AdvantageItem";
import ScrollTrigger from "react-scroll-trigger";
import { AnimateGroup } from "react-simple-animate";

import portfolioIcon from "@images/AdvantageItem/portfolio.svg";
import fileIcon from "@images/AdvantageItem/file.svg";
import proIcon from "@images/AdvantageItem/pro.svg";
import gearIcon from "@images/AdvantageItem/gear.svg";
import virifyIcon from "@images/AdvantageItem/verify.svg";
import locationIcon from "@images/AdvantageItem/location.svg";

import { useMobile } from "@hooks/useMobile";
import { useParallax as parlax } from "@hooks/useParallax";
import { useParallax } from "react-scroll-parallax";

const Advantages = () => {
  const [animate, setAnimate] = React.useState(false);
  const isMobile = useMobile();
  const offsetY = parlax();
  const sections = document.querySelector("#about")?.scrollHeight;

  let sectionY = offsetY;
  if (sectionY >= sections) {
    sectionY = sectionY === sections;
  } else {
    sectionY = offsetY;
  }

  const parallax = {
    section: { marginTop: `-${sectionY}px` },
  };
  const parallaxCar = useParallax({
    easing: "easeOutQuad",
    translateX: [isMobile ? -100 : -20, 20],
  });
  return (
    <div style={parallax.section} id="advantages" className="container">
      <div id="carcolum" className="colum half">
        <AdvantageTitle />
        <div
          ref={parallaxCar.ref}
          // style={isMobile ? parallax.carMobile : parallax.carDefault}
          className="advantages__car"
        >
          <img src={carImage} alt="car" />
        </div>
      </div>
      <div className="colum half ">
        <ScrollTrigger onEnter={() => setAnimate(true)}>
          <AnimateGroup play={animate}>
            <div className="columgap">
              <AdvantageItem
                icon={portfolioIcon}
                value="Обладает огромным опытом оптовой реализации нефтепродуктов"
                index={0}
              />
              <AdvantageItem
                icon={fileIcon}
                value="Работает с крупнейшими производителями нефтепродуктов напрямую"
                index={1}
              />
              <AdvantageItem
                icon={proIcon}
                value="Зарекомендовала себя как исключительно стабильный, надежный и профессиональный поставщик"
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
              <AdvantageItem
                icon={locationIcon}
                value="Является крупнейшим «независимым» поставщиком (без государственного участия) на рынке нефтепродуктов  Красноярского края "
                index={5}
              />
            </div>
          </AnimateGroup>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Advantages;
