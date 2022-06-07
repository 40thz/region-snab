import React from "react";
import Slider from "react-slick";

import BlockInfo from "@components/BlockInfo/BlockInfo";
import PreviewText from "@components/PreviewText/PreviewText";

import VacancyItem from "./VacancyItem/VacancyItem";
import SliderFooter from "@components/SliderFooter/SliderFooter";

import { useGetVacancyQuery } from "../../store";

const Jobs = () => {
  const [slider, setSlider] = React.useState();
  const { data, isLoading } = useGetVacancyQuery();

  const [currentItemId, setCurrentItemId] = React.useState();

  React.useEffect(() => {
    !isLoading && setCurrentItemId(data[0]?._id);
  }, [data]);

  const settings = {
    ref: (slider) => setSlider(slider),
    asNavFor: slider,
    dots: false,
    infinite: false,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      const id = data[slider?.innerSlider?.asNavForIndex]._id;
      setCurrentItemId(id);
    },
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
              subTitle="Нас больше 140 человек. Мы - профессионалы разных областей: технологи, инженеры, аналитики, менеджеры, водители, операторы и многие другие. Если есть желание расти в профессиональном плане вместе с лидирующей и стабильно развивающейся компаний - добро пожаловать в команду!"
            />
          </div>
          <div className="colum half">
            {isLoading ? (
              "loading"
            ) : (
              <Slider {...settings}>
                {data.map((vacancy) => {
                  let string = vacancy.sliderDescription.slice(0, 150);
                  return (
                    <VacancyItem
                      key={vacancy._id}
                      image={vacancy.uploadedFile}
                      title={vacancy.name}
                      description={string}
                    />
                  );
                })}
              </Slider>
            )}
            <SliderFooter
              slider={slider}
              currentItemId={currentItemId}
              btnValue="Подробнее о вакансии"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
