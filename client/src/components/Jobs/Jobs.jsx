import React from "react";
import Slider from "react-slick";
import BlockInfo from "../BlockInfo/BlockInfo";
import PreviewText from "../PreviewText/PreviewText";

import vacancyImage from "@images/Jobs/vacancy.png";
import VacancyItem from "./VacancyItem/VacancyItem";

const Jobs = () => {
  const [slider, setSlider] = React.useState()
  
  const settings = {
    ref: slider => setSlider(slider),
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
                title='Водитель категории «Е» с ДОПОГ'
                description='Сменный график, описание вакансии описание вакансии описание ваканси'
              />
              <VacancyItem
                image={vacancyImage}
                title='Водитель категории «Е» с ДОПОГ1'
                description='Сменный график, описание вакансии описание вакансии описание ваканси'
              />
              <VacancyItem
                image={vacancyImage}
                title='Водитель категории «Е» с ДОПОГ2'
                description='Сменный график, описание вакансии описание вакансии описание ваканси'
              />
              <VacancyItem
                image={vacancyImage}
                title='Водитель категории «Е» с ДОПОГ3'
                description='Сменный график, описание вакансии описание вакансии описание ваканси'
              />
              <VacancyItem
                image={vacancyImage}
                title='Водитель категории «Е» с ДОПОГ4'
                description='Сменный график, описание вакансии описание вакансии описание ваканси'
              />
            </Slider>
            <div className="vacancy__slider-footer">
              <div className="vacancy__slider-buttons">
                <div className="slider-btn prev" onClick={slider?.slickPrev}>
                  <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12.02L7 6.52002L0.999999 1.02002" stroke="#F0F1F1" strokeWidth="2" />
                  </svg>
                </div>
                <div className="slider-btn next" onClick={slider?.slickNext}>
                  <svg width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 12.02L7 6.52002L0.999999 1.02002" stroke="#F0F1F1" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="vacancy__slider-readmore">Подробнее о вакансии</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
