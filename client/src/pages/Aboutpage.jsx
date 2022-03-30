import React from "react";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import History from "../components/History/History";
import AboutCounter from "../components/AboutCounter/AboutCounter";
import Geography from "../components/Geography/Geography";
import AdvantageSlider from "../components/AdvantageSlider/AdvantageSlider";
import Company from "../components/Company/Company";

const About = () => {
  return (
    <div>
      <AboutIntro />
      <AboutCounter />
      <History />
      <Geography />
      <AdvantageSlider />
      <Company />
    </div>
  );
};

export default About;
