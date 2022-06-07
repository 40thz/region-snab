import React from "react";

import Header from "@components/Header/Header";
import Pattern from "@components/Pattern/Pattern";
import Button from "@components/Button/Button";

import car from "@images/Advantage/car.png";

const NotFound = () => {
  return (
    <section id="notfound">
      <Header dark />
      <div className="container">
        <div className="notfound__intro">
          <div className="notfound__intro-row">
            <div className="notfound__intro-car">
              <img src={car} alt="Машина" />
            </div>
            <div className="notfound__intro-title">404</div>
          </div>
          <div className="notfound__intro-row">
            <div className="notfound__intro-subtitle">
              Ошибка, страница <span>не найдена</span>
            </div>
            <Button value="Перейти на главную" />
          </div>
        </div>
      </div>
      <Pattern />
    </section>
  );
};

export default NotFound;
