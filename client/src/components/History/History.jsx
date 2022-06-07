import React from "react";

import { useMobile } from "@hooks/useMobile";
import { useParallax } from "@hooks/useParallax";

import histroy1 from "@images/History/1.jpg";
import histroy2 from "@images/History/2.jpg";
import histroy3 from "@images/History/3.jpg";
import histroy4 from "@images/History/4.jpg";
import histroy5 from "@images/History/5.jpg";
import histroy6 from "@images/History/6.jpg";

import HistoryItem from "@components/HistoryItem/HistoryItem";
import PreviewText from "@components/PreviewText/PreviewText";

const History = () => {
  const sections = document.querySelector("#history")?.scrollHeight;
  const isMobile = useMobile();
  const offsetY = useParallax();

  let sectionY = offsetY;
  if (sectionY >= sections) {
    sectionY = sectionY === sections;
  } else {
    sectionY = offsetY / 2;
  }

  const parallax = {
    history: { marginTop: !isMobile && `-${sectionY}px` },
  };
  return (
    <section style={parallax.history} id="history">
      <div className="container">
        <div className="history__inside">
          <PreviewText value="История" />
          <HistoryItem
            image={{
              src: histroy1,
              rotate: -10,
            }}
            year={2011}
            items={[
              "Компания основана 24 января 2011 года. Изначально основными видами деятельности являются оптовые поставки и транспортировка нефтепродуктов",
            ]}
          />
          <HistoryItem
            image={{
              src: histroy2,
              rotate: 10,
            }}
            year={2015}
            items={[
              "Занимает 92 место в “ТОП 100” компаний Красноярского края",
              "Занимает 32 место в рейтинге динамично развивающихся компаний Красноярского края",
            ]}
          />
          <HistoryItem
            image={{
              src: histroy3,
              rotate: -10,
            }}
            year={2017}
            items={[
              "Занимает 54 место в “ТОП 100” компаний Красноярского края",
              "Компания приступила к реализации проекта строительства “Склада ГСМ” общей емкостью 19 800 куб.м3 в Емельяновском районе Красноярского края.",
            ]}
          />
          <HistoryItem
            image={{
              src: histroy4,
              rotate: 10,
            }}
            year={2018}
            items={[
              "Занимает 45 место в “ТОП 100” компаний Красноярского края",
            ]}
          />
          <HistoryItem
            image={{
              src: histroy5,
              rotate: -10,
            }}
            year={2019}
            items={[
              "Занимает 58 место в “ТОП 100” компаний Красноярского края",
            ]}
          />
          <HistoryItem
            image={{
              src: histroy6,
              rotate: 10,
            }}
            year={2022}
            items={[
              "Объект “Склад ГСМ” достроен, введен в эксплуатацию и лицензирован Ростехнадзором",
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default History;
