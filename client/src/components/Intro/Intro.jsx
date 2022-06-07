import React from "react";

import Pattern from "@components/Pattern/Pattern";
import Button from "@components/Button/Button";
import AdvantageItem from "@components/AdvantageItem/AdvantageItem";

import virifyIcon from "@images/AdvantageItem/verify.svg";

import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <main>
      <div className="container">
        <AdvantageItem
          icon={virifyIcon}
          value={"Компания, которой можно доверять"}
          intro
        />
        <div className="intro">
          <div className="intro__title">
            Ваш&nbsp;<span>надежный поставщик&nbsp;</span>
            нефтепродуктов
          </div>
          <div className="readmore-btn">
            <Link to="about">
              <Button value="Узнать подробнее" />
            </Link>
          </div>
        </div>
      </div>
      <Pattern active />
    </main>
  );
};

export default Intro;
