import React from "react";
import Header from "../components/Header/Header";
import AboutCall from "../components/AboutCall/AboutCall";
import Button from "../components/Button/Button";

import { useNavigate, useParams } from "react-router-dom";
import { useGetVacancyByIdQuery } from "../store";

import vacancyImg from "@images/Jobs/vacancy.png";
import callImg from "@images/Jobs/callimg.png";

const Vacancypage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const { data, isLoding } = useGetVacancyByIdQuery(params.id);
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  });
  return (
    <section id="vacancypage">
      <div className="vacancypage__header">
        <div className="vacancyOverlay"></div>
        <Header />
        <div className="vacancypage__header-image">
          <img
            src={`https://region-snab.s3.amazonaws.com/${data?.uploadedFile.path}`}
            alt=""
          />
        </div>

        <div className="container">
          <div className="vacancy__rightside">
            <div
              onClick={() => navigate(-1)}
              className="vacancy__rightside-back"
            >
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
            <div className="vacancy__rightside-title">{data?.name}</div>

            {isLoding ? (
              "load"
            ) : (
              <div className="vacancy__about">
                <div className="colum">
                  <div
                    className="vacancy__about-title"
                    dangerouslySetInnerHTML={{ __html: data?.description }}
                  />
                  <div className="vacancy__about-conditions">
                    <div className="vacancy__about-conditions-title">
                      Условия работы:
                    </div>
                    <div className="vacancy__about-conditions-list">
                      {data?.conditions.map((item) => (
                        <div className="vacancy__about-condition">{item}</div>
                      ))}
                    </div>
                    <div className="vacancy__about-conditions-title">
                      По всем вопросам можете обращаться в отдел персонала по
                      телефону 208-94-40.
                    </div>
                  </div>
                </div>
                <div className="colum">
                  <Button value="Все вакансии" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="container">
        <AboutCall
          value="В нашей команде профессионалов не хватает именно Вас"
          src={callImg}
        />
      </div>
    </section>
  );
};

export default Vacancypage;
