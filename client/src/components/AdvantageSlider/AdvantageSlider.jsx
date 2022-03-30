import React from "react";
import Slider from "react-slick";
import sliderImg from "@images/AdvantageSlider/1.jpg";
import SliderFooter from "../SliderFooter/SliderFooter";
import Pattern from "../Pattern/Pattern";
import PreviewText from "../PreviewText/PreviewText";
import AdvantageSliderItem from "./AdvantageSliderItem/AdvantageSliderItem";
import caseImg from "@images/AdvantageItem/case.svg";

import gallery1 from "@images/Gallery/1.png";
import gallery2 from "@images/Gallery/2.png";
import gallery3 from "@images/Gallery/3.png";
import gallery4 from "@images/Gallery/4.png";
import gallery5 from "@images/Gallery/6.png";

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
        </Slider>
        <div className="slider__counter">
          <div className="slider__counter-current">0{currentSlider}/</div>
          <div className="slider__counter-length">
            0{contentSlider?.props.children.length}
          </div>
        </div>
      </div>
      <div className="advantageslider-content">
        <PreviewText value="Почему нас выбирают" />
        <Slider {...contentSliderOption}>
          <AdvantageSliderItem
            icon={caseImg}
            title="Коллектив профессионалов "
            subtitle="Наши менеджеры оценят Ваши потребности, правильно оформят заявку; автомеханики строго следят за исправностью автопарка, водители отвечают за своевременность поставки. Все сотрудники обладают высочайшим уровнем квалификации "
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Финансовые возможности"
            subtitle="Мы сотрудничаем с рядом достойных и надежных банков. Финансовый портфель позволяют рассмотреть различные формы оплаты и дает возможность предоставлять покупателям отсрочку платежа за поставленные нефтепродукты."
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Работа с вертикально интегрированными компаниями"
            subtitle="ООО ООО РегионСнаб имеет прямые контракты на поставку нефтепродуктов с ООО РН-Красноярскнефтепродукт ОАО Газпром нефть,ОАО НК «РоснефтьООО МежрегионгазИмеет аккредитацию на Санкт-Петербургской Международной Товарно-сырьевой Бирже"
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Собственный автопарк бензовозов"
            subtitle="ООО РегионСнаб имеет в собственности 45 современных тягачей с полуприцепом-цистерной, оборудованные насосным оборудованием, вместимостью от 28 000 до 32 000 л. Транспортировка нефтепродуктов - это задача для профессионалов, и наша компания позволяет обеспечить своевременную и безопасную доставку любого вида топлива."
          />
          <AdvantageSliderItem
            icon={caseImg}
            title="Коллектив профессионалов "
            subtitle="Наши менеджеры оценят Ваши потребности, правильно оформят заявку; автомеханики строго следят за исправностью автопарка, водители отвечают за своевременность поставки. Все сотрудники обладают высочайшим уровнем квалификации "
          />
        </Slider>
        <SliderFooter slider={contentSlider} />
        <Pattern />
      </div>
    </section>
  );
};

export default AdvantageSlider;
