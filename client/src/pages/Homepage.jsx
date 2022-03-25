import React from "react";
import About from "../components/About/About";
import Advantages from "../components/Advantages/Advantages";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Intro from "../components/Intro/Intro";
import Jobs from "../components/Jobs/Jobs";

const Homepage = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header />
      <Intro />
      <Advantages offsetY={offsetY} />
      <div className="center">
        <About offsetY={offsetY} />
        <Gallery />
        <Jobs />
      </div>
    </>
  );
};

export default Homepage;
