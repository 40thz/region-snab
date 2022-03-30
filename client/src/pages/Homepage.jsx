import React from "react";
import About from "../components/About/About";
import Advantages from "../components/Advantages/Advantages";
import Gallery from "../components/Gallery/Gallery";
import Intro from "../components/Intro/Intro";
import Jobs from "../components/Jobs/Jobs";
import ArrowUp from "../components/ArrowUp/ArrowUp";

const Homepage = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="bgHome"></div>
      <div className="overlay"></div>
      <ArrowUp show={offsetY >= 500} />
      <Intro />
      <Advantages offsetY={offsetY} />
      <About offsetY={offsetY} />
      <Gallery />
      <Jobs />
    </>
  );
};

export default Homepage;
