import React from "react";
import About from "../components/About/About";
import Advantages from "../components/Advantages/Advantages";
import Gallery from "../components/Gallery/Gallery";
import Intro from "../components/Intro/Intro";
import Jobs from "../components/Jobs/Jobs";
import ArrowUp from "../components/ArrowUp/ArrowUp";
import Header from "../components/Header/Header";

import { Helmet } from "react-helmet";

const Homepage = () => {
  const [offsetY, setOffsetY] = React.useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  React.useEffect(() => {
    document.body.style.background = "#1d232e";
    document.querySelector("header").style.background = "";
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>ООО РегионСнаб - Главная</title>
        <link rel="canonical" href="https://regionsnab24.ru/" />
        <meta
          name="keywords"
          content="РегионСнаб, нефтепродукты, хранение нефтепродуктов, склад нефтепродуктов, поставщики нефтепродуктов, Красноярск, опт, оптом, доставка, поставки, нефть, красноярский край, перевозка, склад ГСМ, ГСМ, перевалка, купить нефтепродукты, топливо, вакансии, работа"
        />
        <meta
          name="description"
          content="ООО “РегионСнаб” - Ваш надежный поставщик нефтепродуктов в Красноярском крае и близлежащих регионах. Опыт оптовой реализации с 2011 г. Гарантируем своевременную и безопасную доставку любого вида топлива"
        />
      </Helmet>
      <div className="bgHome"></div>
      <div className="overlay"></div>
      <ArrowUp show={offsetY >= 500} />
      <Header />
      <Intro />
      <Advantages offsetY={offsetY} />
      <About offsetY={offsetY} />
      <Gallery />
      <Jobs />
    </>
  );
};

export default Homepage;
