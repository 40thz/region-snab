import React from "react";
import AboutIntro from "@components/AboutIntro/AboutIntro";
import History from "@components/History/History";
import AboutCounter from "@components/AboutCounter/AboutCounter";
import Geography from "@components/Geography/Geography";
import AdvantageSlider from "@components/AdvantageSlider/AdvantageSlider";
import Company from "@components/Company/Company";

import { HelmetProvider, Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ООО РегионСнаб - О компании</title>
          <link rel="canonical" href="https://regionsnab24.ru/about" />
          <meta
            name="keywords"
            content="РегионСнаб, нефтепродукты, хранение нефтепродуктов, топливо склад нефтепродуктов, поставщики нефтепродуктов, Красноярск, Иркутская область, Республика Хакасия, Республика Тыва, опт, оптом, доставка, поставки, нефть, красноярский край, перевозка, склад ГСМ, ГСМ, перевалка"
          />
          <meta
            name="description"
            content="ООО «РегионСнаб» – амбициозная, динамично развивающаяся компания на рынке нефтепродуктов, входящая в «ТОП 100» компаний Красноярского края, которая обладает огромным опытом оптовой реализации нефтепродуктов"
          />
        </Helmet>
      </HelmetProvider>
      <AboutIntro />
      <AboutCounter />
      <History />
      <Geography />
      <AdvantageSlider />
      <Company />
    </>
  );
};

export default About;
