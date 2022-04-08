import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import gangImg from "@images/gang.png";

import RS from "../RS";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="footer__header">
          <RS color="#262C36" animateText />
          <div className="colum">
            <Logo row bgColor="#B63A3A" />
            <ul className="footer-leftside">
              <li>ООО "регионснаб"</li>
              <li>ИНН: 1234567891</li>
              <li>ОГРН: 1234567891234</li>
            </ul>
          </div>
          <div className="colum">
            <div className="footer__title">Контакты</div>
            <ul>
              <a href="tel:83912191597">
                <li>8 391 219-15-97 (отдел продаж)</li>
              </a>
              <a href="tel:83912191597">
                <li>8 391 219-15-97 (отдел кадров)</li>
              </a>
              <a href="mailto:regionsnab24@mail.ru">
                <li>regionsnab24@mail.ru</li>
              </a>
              <li>Красноярск, Краснодарская, 40Д</li>
            </ul>

            <div style={{ marginTop: "80px" }} className="footer__title">
              Время работы
            </div>
            <ul>
              <li>Пн-Пт</li>
              <li>9:00 - 18:00</li>
            </ul>
          </div>
          <div className="colum">
            <div className="footer__title">Картка сайта</div>
            <ul>
              <Link to="/">
                <li>Главная</li>
              </Link>
              <Link to="/about">
                <li>О компании</li>
              </Link>
              <Link to="/directions">
                <li>Направления деятельности</li>
              </Link>
              <Link to="/contacts">
                <li>Контакты</li>
              </Link>
            </ul>
            <div style={{ marginTop: "80px" }} className="footer__title">
              Время работы (отдел логистики и транспорта)
            </div>
            <ul>
              <li>Пн-Вс</li>
              <li>0:00 - 24:00</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>Все права защищены</p>
          <a href="#" target="_blank">
            <p>Политика конфиденциальности</p>
          </a>
          <div className="developers">
            <p>Разработка сайта:</p>
            <a href="https://mygang.ru/" target="_blank" className="gang">
              <img src={gangImg} alt="Gang" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
