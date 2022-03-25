import React from "react";
import Pattern from "../Pattern/Pattern";
import virifyIcon from "@images/AdvantageItem/verify.svg";
import AdvantageItem from "../AdvantageItem/AdvantageItem";

const Intro = () => {
  return (
    <main>
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
        />
        <div className="intro__title">
          Ваш&nbsp;
          <span>
            надежный
            <br /> поставщик&nbsp;
          </span>
          нефтепродуктов
        </div>
      </div>
      <Pattern />
    </main>
  );
};

export default Intro;
