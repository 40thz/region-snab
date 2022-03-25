import React from "react";
import BlockInfo from "../BlockInfo/BlockInfo";
import Button from "../Button/Button";
import PreviewText from "../PreviewText/PreviewText";

const Jobs = () => {
  return (
    <section id="jobs">
      <div className="container">
        <div className="jobs__inside">
          <PreviewText value="Вакансии" />
          <div className="colum">
            <BlockInfo
              title="Присоединяйтесь к команде"
              titleRed="Регионснаба!"
              subTitle="Нас больше 2700 человек. Мы профессионалы разных областей — технологи, инженеры, аналитики и многие другие. Наша команда распределена по всей России – мы эффективно работаем удаленно и в гибридном формате."
            />
          </div>
          <div className="colum"></div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
