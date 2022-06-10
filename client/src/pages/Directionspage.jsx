import React from "react";

import DirectionCart from "@components/DirectionCart/DirectionCart";
import Header from "@components/Header/Header";
import AboutCall from "@components/AboutCall/AboutCall";

import helmetImg from "@images/Directions/helmet.png";
import imgage1 from "@images/Directions/direction1.jpg";
import imgage3 from "@images/Directions/direction2.jpg";
import imgage2 from "@images/Directions/direction3.jpg";

import { useParallax } from "@hooks/useParallax";
import { useMobile } from "@hooks/useMobile";

import { HelmetProvider, Helmet } from "react-helmet-async";

const Directionspage = () => {
  const parallax = useParallax();
  const isMobile = useMobile();

  const parallaxAnim = {
    title: { transform: !isMobile && `translateX(${parallax / 10}px)` },
    subTitle: { transform: !isMobile && `translateX(-${parallax / 20}px)` },
    firstSection: {
      left: !isMobile && `${parallax / 10}px`,
    },
    secondSection: {
      left: !isMobile && `-${parallax / 20}px`,
      top: !isMobile && `-${parallax / 20}px`,
    },
    threeSection: {
      top: !isMobile && `-${parallax / 10}px`,
      left: !isMobile && `${parallax / 10}px`,
    },
    callSection: {
      transform:
        !isMobile &&
        `translateY(-${parallax / 10}px) translateX(${parallax / 30}px)`,
    },
  };
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <title>ООО РегионСнаб - Направление деятельности</title>
          <link rel="canonical" href="https://regionsnab24.ru/directions" />
          <meta
            name="keywords"
            content="РегионСнаб, нефтепродукты, хранение, склад, поставщики, Красноярск, доставка, поставки, нефть, красноярский край, перевозка, склад ГСМ, ГСМ, перевалка, купить нефтепродукты, топливо"
          />
          <meta
            name="description"
            content="ООО «РегионСнаб» осуществляет реализацию нефтепродуктов, перевозку автотранспортом, перевалку на собственной нефтебазе. Опыт работы с 2011 г."
          />
        </Helmet>
      </HelmetProvider>
      <section id="directions">
        <div className="bgDirection"></div>
        <Header />
        <div className="container">
          <div className="direction">
            <div className="direction-title">
              <span style={parallaxAnim.title}>направления</span>
              <span style={parallaxAnim.subTitle}>деятельности</span>
            </div>
            <DirectionCart
              style={parallaxAnim.firstSection}
              image={imgage1}
              index={1}
              title="Реализация нефтепродуктов "
              aboutTitle={
                <div style={{ textIndent: "30px" }}>
                  Компания является партнером крупнейших производителей
                  нефтепродуктов по прямым договорам, а также аккредитована на
                  «Санкт-Петербургской Международной Товарно-сырьевой Бирже»
                  (СПбМТСБ). Это позволяет нам своевременно отгружать любой вид
                  топлива с нефтеперерабатывающих заводов железнодорожным и
                  автомобильным транспортом, а также позволяет добиться
                  справедливых цен на нефтепродукты для наших клиентов.
                </div>
              }
              list={[
                "с доставкой автотранспортом",
                "самовывозом с нефтеперерабатывающих заводов и складов ГСМ",
                "с доставкой железнодорожным транспортом",
                "с доставкой речным транспортом в районы Крайнего севера",
              ]}
            />
            <DirectionCart
              style={parallaxAnim.secondSection}
              image={imgage2}
              index={2}
              title="Перевозка нефтепродуктов автотранспортом"
              aboutTitle={
                <div style={{ textIndent: "30px" }}>
                  Перевозка любого топлива – сложная и ответственная задача,
                  которая требует соблюдения всех правил безопасности и особого
                  внимания. ООО "РегионСнаб" на протяжении многих лет успешно
                  выполняет безаварийную и своевременную перевозку
                  нефтепродуктов на территории Красноярского края и ближайших
                  регионов
                  <div style={{ textIndent: "30px" }}>
                    Многолетний опыт работы ООО “РегионСнаб” показал, что
                    процессы в компании отлично налажены от поступления заявки
                    <br /> до поставки топлива на место, а транспорт и
                    водительский состав соответствуют всем требованиям
                    безопасности.
                  </div>
                  <div style={{ textIndent: "30px" }}>
                    Мы имеем в собственности 45 современных тягачей с
                    полуприцепом-цистерной, оснащенных насосным оборудованием,
                    вместимостью от 28 000 до 32 000 л. Осуществляем доставку
                    быстро и в любых объемах.
                  </div>
                </div>
              }
            />
            <DirectionCart
              style={parallaxAnim.threeSection}
              image={imgage3}
              index={3}
              title="Перевалка нефтепродуктов на собственной нефтебазе"
              aboutTitle={
                <div style={{ textIndent: "30px" }}>
                  Отличное знание специфики работы с нефтепродуктами позволяет
                  нам брать ответственность за перевалку на себя, сокращая до
                  минимума риски, связанные с работой с опасными грузами и
                  соблюдением качества нефтепродуктов.
                  <div style={{ textIndent: "30px" }}>
                    Расположен склад ГСМ в предельной близости к г. Красноярску
                    и основным транспортным магистралям, в 6 км от ул.
                    Пограничников. Общая вместимость склада составляет – 19 800
                    м3
                  </div>
                  <div style={{ textIndent: "30px" }}>
                    Данный склад ГСМ является самым современным и технологичным
                    от Урала до Дальнего Востока. Управление технологическим
                    процессом приема-выдачи нефтепродуктов автоматизировано
                    программным комплексом с применением дистанционно
                    управляемых электроприводных задвижек. Предусмотрена
                    возможность ввода присадок дозатором в поток наливного
                    стояка, в целях производства брендированного топлива
                  </div>
                  <div style={{ textIndent: "30px" }}>
                    Доставка нефтепродуктов на склад ГСМ выполняется
                    железнодорожным транспортом на сливную эстакаду,
                    спроектированную под шесть вагоно–цистерн.
                    Производительность насосной станции для приема
                    нефтепродуктов составляет 310 м3/час
                  </div>
                  <div style={{ textIndent: "30px" }}>
                    Налив нефтепродуктов в автоцистерны происходит через 7
                    комплектов автоматических систем налива (два для дизельного
                    топлива, два для автобензина 92, по одному комплекту для
                    налива автобензина 95, автобензина 98 и авиатоплива ТС-1).
                    Производительность налива каждого вида продукта 60 м3/час на
                    один наливной стояк.
                  </div>
                </div>
              }
            />
            <div style={parallaxAnim.callSection}>
              <AboutCall
                value="Мы знаем про нефтепродукты все!"
                src={helmetImg}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Directionspage;
