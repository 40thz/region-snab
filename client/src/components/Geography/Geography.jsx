import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import marker from "@images/Geography/map-marker.svg";
import RussiaMap from "./RussiaMap";

const Geography = () => {
  return (
    <section id="geography">
      <div className="container">
        <div className="geography__inside">
          <div className="geography__adress">
            <div className="colum">
              <PreviewText value="География работы" />
              <div className="geography__title">
                <span>Красноярский край</span>&nbsp; Иркутская область
                Республика хакасия
              </div>
              <div className="geography__location">
                <div className="geography__location-marker">
                  <img src={marker} alt="Красноярск" />
                </div>
                <div className="geography__location-title">
                  <span>Головной офис</span>
                  Красноярск
                </div>
              </div>
            </div>
          </div>
          <div className="geography__map">
            <RussiaMap />
          </div>
        </div>
      </div>
      <div className="galleryBg"></div>
    </section>
  );
};

export default Geography;
