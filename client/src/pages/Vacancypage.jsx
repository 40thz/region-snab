import React from "react";
import Header from "../components/Header/Header";

import bgImg from "@images/Jobs/bg.png";
import vacancyImg from "@images/Jobs/vacancy.png";
import Button from "../components/Button/Button";

const Vacancypage = () => {
  return (
    <section id="vacancypage">
      <Header />
      <div className="vacancypageBg">
        <div className="test">
          <img src={bgImg} alt="bg" />
        </div>
        <div className="vacancyOverlay"></div>
        <div className="vacancy__inside">
          <div className="container">
            <div className="vacancy__rightside">
              <div className="vacancy__rightside-back">
                <svg
                  width="9"
                  height="13"
                  viewBox="0 0 9 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 12.02L7 6.52002L0.999999 1.02002"
                    stroke="#6A7487"
                    strokeWidth="2"
                  />
                </svg>
                Назад
              </div>
              <div className="vacancy__rightside-title">
                Водитель категории «Е» с ДОПОГ
              </div>

              <div className="vacancy__about">
                <div className="colum">
                  <div className="vacancy__about-title">
                    Компания «РегионСнаб» развивается настолько динамично, что
                    на настоящий момент возникла необходимость в наборе
                    водителей категории «Е» с ДОПОГ на автомобили MAN, Scania,
                    Mersedes.
                    <br /> <br />
                    Мы ценим опыт и добросовестное отношение к работе. Готовы к
                    сотрудничеству с молодыми специалистами, имеющими опыт
                    работы водителем категории «Е» от 6 месяцев, ДОПОГ.
                  </div>
                  <div className="vacancy__about-conditions">
                    <div className="vacancy__about-conditions-title">
                      Условия работы:
                    </div>
                    <div className="vacancy__about-conditions-list">
                      <div className="vacancy__about-condition">
                        Сменный график
                      </div>
                      <div className="vacancy__about-condition">
                        Официальное трудоустройство
                      </div>
                      <div className="vacancy__about-condition">
                        Высокая заработная плата
                      </div>
                      <div className="vacancy__about-condition">
                        Своевременная выплата
                      </div>
                    </div>
                    <div className="vacancy__about-conditions-call">
                      По всем вопросам можете обращаться в отдел персонала по
                      телефону 208-94-40.
                    </div>
                  </div>
                </div>
                <div className="colum">
                  <Button />
                </div>
              </div>
            </div>
          </div>
          <div className="vacansy__leftside">
            <div className="test2">
              <img src={bgImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vacancypage;
