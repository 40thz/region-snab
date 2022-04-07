import React from "react";
import Pattern from "../Pattern/Pattern";
import virifyIcon from "@images/AdvantageItem/verify.svg";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import Button from "../Button/Button";

import { Link } from "react-scroll";

const Intro = () => {
  return (
    <main>
      <div className="container">
        <AdvantageItem
          icon={virifyIcon}
          value={<>Берем на себя полную ответственность за доверенный груз</>}
          intro
        />
        <div className="intro">
          <div className="intro__title">
            Ваш&nbsp;
            <span>надежный поставщик&nbsp;</span>
            нефтепродуктов
          </div>
          <Link to="about" smooth duration={1000} offset={250}>
            <Button value="Узнать подробнее" />
          </Link>
        </div>
      </div>
      <Pattern active />
    </main>
  );
};

export default Intro;
