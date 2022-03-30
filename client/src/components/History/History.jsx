import React from "react";
import HistoryItem from "../HistoryItem/HistoryItem";
import PreviewText from "../PreviewText/PreviewText";

const History = () => {
  return (
    <section id="history">
      <div className="container">
        <div className="history__inside">
          <PreviewText value="История" />
          <HistoryItem
            year={2011}
            items={[
              "Компания была основана 24 января 2011 года. Изначально основным видом деятельности компании является продажа и транспортировка нефтепродуктов ",
            ]}
          />
          <HistoryItem
            year={2015}
            items={[
              "Занимает 92 место в рейтинге крупнейших компаний Красноярска ",
              "Занимает 32 место в рейтинге самых динамичных компаний Красноярска",
            ]}
          />
          <HistoryItem
            year={2017}
            items={[
              "Занимает 54 место в рейтинге крупнейших компаний Красноярска ",
              "В 2017 году компания приступила к реализации проекта строительства “Склада ГСМ” общей емкостью 19 800 куб.м3 в Емельяновском районе Красноярского края.",
            ]}
          />
          <HistoryItem
            year={2018}
            items={["45 место в “ТОП 100” компаний Красноярского края "]}
          />
          <HistoryItem
            year={2022}
            items={["объект “Склад ГСМ” достроен и введен в эксплуатацию "]}
          />
        </div>
      </div>
    </section>
  );
};

export default History;
