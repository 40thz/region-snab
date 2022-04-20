import React from "react";
import AboutIntro from "../components/AboutIntro/AboutIntro";
import History from "../components/History/History";
import AboutCounter from "../components/AboutCounter/AboutCounter";
import Geography from "../components/Geography/Geography";
import AdvantageSlider from "../components/AdvantageSlider/AdvantageSlider";
import Company from "../components/Company/Company";
import ArrowUp from "../components/ArrowUp/ArrowUp";

const About = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <AboutIntro />
      <ArrowUp show={offsetY >= 500} />
      <AboutCounter offsetY={offsetY} />
      <History offsetY={offsetY} />
      <Geography offsetY={offsetY} />
      <AdvantageSlider />
      <Company />
    </>
  );
};

export default About;
