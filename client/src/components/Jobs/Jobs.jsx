import React from "react";
import Slider from "react-slick";
import BlockInfo from "../BlockInfo/BlockInfo";
import PreviewText from "../PreviewText/PreviewText";

import vacancyImage from "@images/Jobs/vacancy.png";
import VacancyItem from "./VacancyItem/VacancyItem";
import SliderFooter from "../SliderFooter/SliderFooter";

const Jobs = () => {
  const [slider, setSlider] = React.useState();

  const settings = {
    ref: (slider) => setSlider(slider),
    dots: false,
    infinite: false,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section id="jobs">
      <div className="container">
        <div className="jobs__inside">
          <div className="colum half">
            <PreviewText value="Вакансии" />
            <BlockInfo
              nameBtn="Все вакансии"
              title="Присоединяйтесь к команде"
              titleRed="Регионснаба!"
              subTitle="Нас больше 2700 человек. Мы профессионалы разных областей — технологи, инженеры, аналитики и многие другие. Наша команда распределена по всей России – мы эффективно работаем удаленно и в гибридном формате."
            />
          </div>
          <div className="colum half">
            <Slider {...settings}>
              <VacancyItem
                image={vacancyImage}
                title="Водитель категории «Е» с ДОПОГ"
                description="Сменный график, описание вакансии описание вакансии описание ваканси"
              />
              <VacancyItem
                image={vacancyImage}
                title="Водитель категории «Е» с ДОПОГ1"
                description="Сменный график, описание вакансии описание вакансии описание ваканси"
              />
              <VacancyItem
                image={vacancyImage}
                title="Водитель категории «Е» с ДОПОГ2"
                description="Сменный график, описание вакансии описание вакансии описание ваканси"
              />
              <VacancyItem
                image={vacancyImage}
                title="Водитель категории «Е» с ДОПОГ3"
                description="Сменный график, описание вакансии описание вакансии описание ваканси"
              />
              <VacancyItem
                image={vacancyImage}
                title="Водитель категории «Е» с ДОПОГ4"
                description="Сменный график, описание вакансии описание вакансии описание ваканси"
              />
            </Slider>
            <SliderFooter slider={slider} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
