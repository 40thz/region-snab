import React from "react";
import Header from "../Header/Header";
import Pattern from "../Pattern/Pattern";

import phoneIcon from "@images/Contacts/phone.svg";
import boxIcon from "@images/Contacts/box.svg";
import mailIcon from "@images/Contacts/mail.svg";

const ContactIntro = () => {
  return (
    <section id="contactIntro">
      <Header />
      <Pattern />
      <div className="container">
        <div className="contact__title">
          поставщик нефтепродуктов регионснаб <span>всегда на связи</span>
        </div>
        <div className="contact__list">
          <div className="contact__cart">
            <div className="contact__cart-icon">
              <img src={phoneIcon} alt="Телефон" />
            </div>
            <div className="contact__cart-title">Тел./факс </div>
            <div className="contact__cart-subtitle">
              <a href="tel:+7 (391) 219-15-97">+7 (391) 219-15-97</a>
            </div>
          </div>
          <div className="contact__cart">
            <div className="contact__cart-icon">
              <img src={boxIcon} alt="Телефон" />
            </div>
            <div className="contact__cart-title">Отдел кадров</div>
            <div className="contact__cart-subtitle">
              <a href="tel:+7 (391) 208-94-40">+7 (391) 208-94-40</a>
            </div>
          </div>
          <div className="contact__cart">
            <div className="contact__cart-icon">
              <img src={mailIcon} alt="Телефон" />
            </div>
            <div className="contact__cart-title">Email</div>
            <div className="contact__cart-subtitle">
              <a href="mailto:regionsnab24@mail.ru">regionsnab24@mail.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
