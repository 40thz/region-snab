import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import marker from "@images/Geography/map-marker.svg";
import RussiaMap from "./RussiaMap";
import ScrollTrggier from "react-scroll-trigger"

const Geography = () => {
  const [mapActive, setMapActive] = React.useState(false)

  return (
    <ScrollTrggier onEnter={() => setMapActive(true)}>
      <section id="geography">
        <div className="container">
          <div className="geography__inside">
            <div className="geography__adress">
              <div className="colum">
                <PreviewText value="География работы" />
                <div className="geography__title">
                  <div className="krsk">Красноярский край</div>
                  <div className="irkutsk">Иркутская область</div>
                  <div className="hakasia">Республика хакасия</div>
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
              <RussiaMap active={mapActive} />
            </div>

          </div>
        </div>
        <div className="galleryBg"></div>
      </section>
    </ScrollTrggier >
  );
};

export default Geography;
