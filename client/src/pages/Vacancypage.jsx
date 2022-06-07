import React from "react";
import Header from "@components/Header/Header";
import AboutCall from "@components/AboutCall/AboutCall";

import { useNavigate, useParams } from "react-router-dom";
import { useGetVacancyByIdQuery } from "../store";

import VacancyAbout from "@components/VacancyAbout/VacancyAbout";
import callImg from "@images/Jobs/callimg.png";

import { useParallax } from "@hooks/useParallax";
import { useMobile } from "@hooks/useMobile";

import { HelmetProvider, Helmet } from "react-helmet-async";

const Vacancypage = () => {
  const navigate = useNavigate();
  const parallax = useParallax();
  const isMobile = useMobile();
  const params = useParams();

  const { data, isLoding } = useGetVacancyByIdQuery(params.id);

  const parallaxAnim = {
    callSection: {
      transform:
        !isMobile &&
        `translateX(${parallax / 10}px) translateY(-${parallax / 8}px)`,
    },
    callIcon: {
      transform:
        !isMobile &&
        `translateY(${parallax / 10}px) translateX(-${parallax / 10}px)`,
    },
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {`${isLoding ? "load" : `ООО РегионСнаб - Вакансия ${data?.name}`}`}
          </title>

          <link
            rel="canonical"
            href={`https://regionsnab24.ru/vacancy/${params.id}`}
          />
        </Helmet>
      </HelmetProvider>
      <section id="vacancypage">
        <div
          style={{ background: `url(${data?.uploadedFile}) no-repeat ` }}
          className="vacancypage__header"
        >
          <div className="vacancyOverlay"></div>
          <Header />
          <div className="vacancypage__header-image">
            <img src={data?.uploadedFile} alt="" />
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
            </div>
          </div>
        </div>
        <div className="container">
          {isLoding ? "load" : <VacancyAbout data={data} />}
        </div>
        <div style={parallaxAnim.callSection} className="container">
          <AboutCall
            value="В нашей команде профессионалов не хватает именно Вас"
            src={callImg}
            styleIcon={parallaxAnim.callIcon}
          />
        </div>
      </section>
    </>
  );
};

export default Vacancypage;
