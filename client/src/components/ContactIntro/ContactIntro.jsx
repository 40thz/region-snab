import React from "react";
import Header from "../Header/Header";
import Pattern from "../Pattern/Pattern";

import phoneIcon from "@images/Contacts/phone.svg";
import boxIcon from "@images/Contacts/box.svg";
import mailIcon from "@images/Contacts/mail.svg";
import carImage from "@images/Advantage/car.png";

import { useParallax } from "../../hooks/useParallax";

const ContactIntro = () => {
  const parallax = useParallax();

  const parallaxAnim = {
    title: { transform: `translateX(${parallax / 10}px)` },
    subTitle: { transform: `translateX(-${parallax / 20}px)` },
  };

  return (
    <section id="contactIntro">
      <Header />
      <Pattern />
      <div className="container">
        <div className="contact__title">
          <span style={parallaxAnim.title}>
            поставщик нефтепродуктов регионснаб
          </span>
          <span style={parallaxAnim.subTitle}>всегда на связи</span>
        </div>
        <div className="contact__list">
          <div className="contact__cart">
            <div className="contact__cart-icon">
              <img src={phoneIcon} alt="Тел./факс" />
            </div>
            <div className="contact__cart-title">Тел./факс </div>
            <div className="contact__cart-subtitle">
              <a href="tel:+7 (391) 219-15-97">+7 (391) 219-15-97</a>
            </div>
            <div className="contact__cart-car">
              <img src={carImage} alt="Регионснаб машина" />
            </div>
          </div>
          <div className="contact__cart">
            <div className="contact__cart-icon">
              <img src={boxIcon} alt="Отдел кадров" />
            </div>
            <div className="contact__cart-title">Отдел кадров</div>
            <div className="contact__cart-subtitle">
              <a href="tel:+7 (391) 208-94-40">+7 (391) 208-94-40</a>
            </div>
            <div className="contact__cart-car">
              <img src={carImage} alt="Регионснаб машина" />
            </div>
          </div>
          <div className="contact__cart">
            <div className="contact__cart-icon">
              <img src={mailIcon} alt="Email" />
            </div>
            <div className="contact__cart-title">Email</div>
            <div className="contact__cart-subtitle">
              <a href="mailto:regionsnab24@mail.ru">regionsnab24@mail.ru</a>
            </div>
            <div className="contact__cart-car">
              <img src={carImage} alt="Регионснаб машина" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
