import React from "react";
import { Link } from "react-router-dom";

import Logo from "../Logo/Logo";
import gangImg from "@images/gang.png";

import RS from "../RS";

import { useMobile } from "../../hooks/useMobile";

const Footer = () => {
  const isMobile = useMobile();

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
              <a href="tel:83912089440">
                <li>8 391 208-94-40 (отдел кадров)</li>
              </a>
              <a href="mailto:info@regionsnab24.ru ">
                <li>info@regionsnab24.ru </li>
              </a>
              <li>Красноярск, Краснодарская, 40Д</li>
            </ul>

            <div style={{ marginTop: "80px" }} className="footer__title">
              Время работы (офис)
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
                <li>Деятельность</li>
              </Link>
              <Link to="/contacts">
                <li>Контакты</li>
              </Link>
            </ul>
            <div style={{ marginTop: "80px" }} className="footer__title">
              Время работы (склад ГСМ, отдел логистики и транспорта)
            </div>
            <ul className="footer_schedule">
              <div className="footer_schedule-time">
                <li>Пн-Вс</li>
                <li>0:00 - 24:00</li>
              </div>
              <div className="footer_tg-row">
                <div className="footer__title">Telegram канал</div>
                {!isMobile && (
                  <a
                    target="_blank"
                    href="https://t.me/regionsnab24"
                    className="footer_schedule-tg"
                  >
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="tg-icon"
                    >
                      <path
                        d="M34.1875 39L40 11L9 23.6667L17.3958 27.6667L34.1875 17L21.9167 29.6667L34.1875 39Z"
                        fill="#B63A3A"
                      />
                    </svg>
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      id="tg-icon-border"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3.25646 3.25646H46.7435V46.7435H13.2038V50H46.7435H50V46.7435V3.25646V0H46.7435H3.25646H0V3.25646V39.9371H3.25646V3.25646Z"
                        fill="#B63A3A"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </ul>
          </div>
          {isMobile && (
            <div className="colum">
              <div className="footer_tg-row">
                <div className="footer__title">Telegram канал</div>
                <a
                  target="_blank"
                  href="https://t.me/regionsnab24"
                  className="footer_schedule-tg"
                >
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="tg-icon"
                  >
                    <path
                      d="M34.1875 39L40 11L9 23.6667L17.3958 27.6667L34.1875 17L21.9167 29.6667L34.1875 39Z"
                      fill="#B63A3A"
                    />
                  </svg>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    id="tg-icon-border"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M3.25646 3.25646H46.7435V46.7435H13.2038V50H46.7435H50V46.7435V3.25646V0H46.7435H3.25646H0V3.25646V39.9371H3.25646V3.25646Z"
                      fill="#B63A3A"
                    />
                  </svg>
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="footer__bottom">
          <p>Все права защищены</p>
          <a target="_blank" href="/uploads/Политика конфиденциальности.pdf">
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
