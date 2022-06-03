import React from "react";
import Slider from "react-slick";
import SliderFooter from "../SliderFooter/SliderFooter";
import Pattern from "../Pattern/Pattern";
import PreviewText from "../PreviewText/PreviewText";
import AdvantageSliderItem from "./AdvantageSliderItem/AdvantageSliderItem";
import caseImg from "@images/AdvantageItem/case.svg";

import gallery1 from "@images/AdvantageSlider/1.jpg";
import gallery2 from "@images/AdvantageSlider/2.jpg";
import gallery3 from "@images/AdvantageSlider/3.jpg";
import gallery4 from "@images/AdvantageSlider/4.jpg";
import gallery5 from "@images/AdvantageSlider/5.jpg";
import gallery6 from "@images/AdvantageSlider/6.jpg";

const AdvantageSlider = () => {
  const [bgSlider, setbgSlider] = React.useState();
  const [contentSlider, setContentSlider] = React.useState();
  const [currentSlider, setcurrentSlider] = React.useState(1);

  const bgSliderOption = {
    className: "bgSlider",
    ref: (slider) => setbgSlider(slider),
    asNavFor: contentSlider,
    dots: false,
    infinite: false,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const contentSliderOption = {
    className: "contentSlider",
    ref: (slider) => setContentSlider(slider),
    asNavFor: bgSlider,
    dots: false,
    infinite: false,
    fade: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: () => {
      setcurrentSlider(contentSlider?.innerSlider?.asNavForIndex + 1);
    },
  };

  return (
    <section id="advantageslider">
      <div className="advantageslider-bg">
        <Slider {...bgSliderOption}>
          <div className="advantageSliderBg">
            <img src={gallery1} alt="Регион снаб" />
          </div>
          <div className="advantageSliderBg">
            <img src={gallery2} alt="Регион снаб" />
          </div>
          <div className="advantageSliderBg">
            <img src={gallery3} alt="Регион снаб" />
          </div>
          <div className="advantageSliderBg">
            <img src={gallery4} alt="Регион снаб" />
          </div>
          <div className="advantageSliderBg">
            <img src={gallery5} alt="Регион снаб" />
          </div>
          <div className="advantageSliderBg">
            <img src={gallery6} alt="Регион снаб" />
          </div>
        </Slider>
      </div>
      <div className="advantageslider-content">
        <PreviewText value="Почему нас выбирают" />
        <Slider {...contentSliderOption}>
          <AdvantageSliderItem
            icon={caseImg}
            title="Коллектив профессионалов "
            subtitle="Наши менеджеры оценят Ваши потребности и спланируют поставку, автомеханики строго следят за исправностью автопарка, водители отвечают за своевременность доставки, сотрудники склада ГСМ оперативно производят отгрузку, бухгалтеры кропотливо ведут учет, инженеры, логисты, юристы и множество других специалистов работают профессионально и слаженно.  Все сотрудники обладают высочайшим уровнем квалификации в своей сфере ответственности. "
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Финансовые и технические возможности"
            subtitle="Финансовые и технические возможности 
            Материально-техническая оснащенность и финансовая стабильность компании позволяют в полном объеме выполнять свои договорные обязательства по всем направлениям деятельности точно в срок. Мы являемся крупнейшей компанией на рынке нефтепродуктов в Красноярском крае."
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Собственный склад ГСМ"
            subtitle="Наличие собственного склада ГСМ позволяет принимать нефтепродукты железнодорожным транспортом с крупнейших НПЗ и иметь в наличии необходимое количество нефтепродуктов для бесперебойных поставок в адрес наших клиентов.
            Склад является крупнейшим по емкости в радиусе 250 км от г. Красноярска и самым современным и технологичным от Урала до Дальнего Востока."
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Собственный автопарк бензовозов"
            subtitle="Мы имеем в собственности 45 современных тягачей с полуприцепом-цистерной, оснащенных насосным оборудованием, вместимостью от 28 000 до 32 000 л. Осуществляем доставку быстро и в любых объемах."
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Каждый клиент важен для нас"
            subtitle="Среди наших клиентов есть компании с потреблением от 5 тонн до нескольких тысяч тонн ежемесячно. Нам важен каждый клиент и для каждого мы подберем выгодные условия и обеспечим логистику."
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Гарантия качества нефтепродуктов"
            subtitle="Мы являемся партнером крупнейших производителей нефтепродуктов, гарантирующих качество. Мы работаем только с нефтепродуктами, соответствующими стандартам ГОСТ и ЕВРО-5. Склад ГСМ оборудован лабораторией, ежедневно осуществляется контроль качества на приеме и выдаче нефтепродуктов"
          />
        </Slider>
        <SliderFooter
          slider={contentSlider}
          currentSlider={currentSlider}
          counter={true}
          btnValue="Позвонить"
          to="tel:+73912191597"
          phone
        />
        <Pattern />
      </div>
    </section>
  );
};

export default AdvantageSlider;
