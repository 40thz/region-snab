import React from "react";
import Slider from "react-slick";
import BlockInfo from "../BlockInfo/BlockInfo";
import PreviewText from "../PreviewText/PreviewText";

import VacancyItem from "./VacancyItem/VacancyItem";
import SliderFooter from "../SliderFooter/SliderFooter";

import { useGetVacancyQuery } from "../../store";

const Jobs = () => {
  const [slider, setSlider] = React.useState();
  const { data, isLoading } = useGetVacancyQuery();

  const [currentItemId, setCurrentItemId] = React.useState();

  React.useEffect(() => {
    !isLoading && setCurrentItemId(data[0]._id);
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
              subTitle="Нас больше 2700 человек. Мы профессионалы разных областей — технологи, инженеры, аналитики и многие другие. Наша команда распределена по всей России – мы эффективно работаем удаленно и в гибридном формате."
            />
          </div>
          <div className="colum half">
            {isLoading ? (
              "loading"
            ) : (
              <Slider {...settings}>
                {/* {data.map((vacancy) => {
                  let string = vacancy.description.slice(0, 150);
                  return (
                    <VacancyItem
                      key={vacancy._id}
                      image={vacancy.uploadedFile.path}
                      title={vacancy.name}
                      description={string}
                    />
                  );
                })} */}
                <VacancyItem
                  // key={vacancy._id}
                  image={
                    "624568a1cf532a3160356154/vacancy.f4e16492e4a378833443.png"
                  }
                  title={"Водитель категории  «Е» с ДОПОГ 1"}
                  description={
                    "Сменный график, описание вакансии описание вакансии описание ваканси 1"
                  }
                />
                <VacancyItem
                  // key={vacancy._id}
                  image={
                    "624568a1cf532a3160356154/vacancy.f4e16492e4a378833443.png"
                  }
                  title={"Водитель категории  «Е» с ДОПОГ 2"}
                  description={
                    "Сменный график, описание вакансии описание вакансии описание ваканси 2"
                  }
                />
                <VacancyItem
                  // key={vacancy._id}
                  image={
                    "624568a1cf532a3160356154/vacancy.f4e16492e4a378833443.png"
                  }
                  title={"Водитель категории  «Е» с ДОПОГ 3"}
                  description={
                    "Сменный график, описание вакансии описание вакансии описание ваканси 3"
                  }
                />
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
