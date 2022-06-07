import React from "react";

import About from "@components/About/About";
import Advantages from "@components/Advantages/Advantages";
import Gallery from "@components/Gallery/Gallery";
import Intro from "@components/Intro/Intro";
import Jobs from "@components/Jobs/Jobs";
import Header from "@components/Header/Header";
import Showreal from "@components/Showreal/Showreal";

import { HelmetProvider, Helmet } from "react-helmet-async";

import { useSelector } from "react-redux";

const Homepage = () => {
  const videoSize = document.querySelector("iframe")?.clientHeight;
  const isLoad = useSelector((state) => state.preloader.animation);

  React.useEffect(() => {
    document.body.style.background = "#1d232e";
    document.querySelector("header").style.background = "";
  }, []);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ООО РегионСнаб - Поставка нефтепродуктов</title>
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
      </HelmetProvider>
      {isLoad && <Showreal />}
      {/* <div className="bgHome"></div> */}
      <div style={{ height: `${videoSize}px` }} className="overlay"></div>
      <Header />
      <Intro />
      <Advantages />
      <About />
      <Gallery />
      <Jobs />
    </>
  );
};

export default Homepage;
