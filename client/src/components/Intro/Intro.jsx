import React from "react";
import Pattern from "../Pattern/Pattern";
import virifyIcon from "@images/AdvantageItem/verify.svg";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import Button from "../Button/Button";
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
            Ваш
            <span>надежный поставщик</span>
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
