import React from "react";
import { useMobile } from "../../hooks/useMobile";
import HistoryItem from "../HistoryItem/HistoryItem";
import PreviewText from "../PreviewText/PreviewText";

const History = ({ offsetY }) => {
  const sections = document.querySelector("#history")?.scrollHeight;
  const isMobile = useMobile();

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
            year={2011}
            items={[
              "Компания основана 24 января 2011 года. Изначально основными видами деятельности являются оптовые поставки и транспортировка нефтепродуктов",
            ]}
          />
          <HistoryItem
            year={2015}
            items={[
              "Занимает 92 место в “ТОП 100” компаний Красноярского края",
              "Занимает 32 место в рейтинге динамично развивающихся компаний Красноярского края",
            ]}
          />
          <HistoryItem
            year={2017}
            items={[
              "Занимает 54 место в “ТОП 100” компаний Красноярского края",
              "Компания приступила к реализации проекта строительства “Склада ГСМ” общей емкостью 19 800 куб.м3 в Емельяновском районе Красноярского края.",
            ]}
          />
          <HistoryItem
            year={2018}
            items={[
              "Занимает 45 место в “ТОП 100” компаний Красноярского края",
            ]}
          />
          <HistoryItem
            year={2019}
            items={[
              "Занимает 58 место в “ТОП 100” компаний Красноярского края",
            ]}
          />
          <HistoryItem
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
