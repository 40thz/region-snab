import React from "react";
import Pattern from "../Pattern/Pattern";
import virifyIcon from "@images/AdvantageItem/verify.svg";
import AdvantageItem from "../AdvantageItem/AdvantageItem";
import Button from "../Button/Button";

import { Link } from "react-scroll";

const Intro = () => {
  return (
    <main id="home">
      <div className="container">
        <AdvantageItem
          icon={virifyIcon}
          value={
            <>
              Берем на себя полную ответственность
              <br />
              за доверенный груз
            </>
          }
          intro
        />
        <div className="intro">
          <div className="intro__title">
            Ваш&nbsp;
            <span>
              надежный
              <br /> поставщик&nbsp;
            </span>
            нефтепродуктов
          </div>
          <Link
            to="about"
            smooth
            duration={1000}
            offset={250}
          >
            <Button value="Узнать подробнее" />
          </Link>
        </div>
      </div>
      <Pattern />
    </main>
  );
};

export default Intro;
