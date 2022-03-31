import React from "react";
import PreviewText from "../PreviewText/PreviewText";
import marker from "@images/Geography/map-marker.svg";
import RussiaMap from "./RussiaMap";
import ScrollTrggier from "react-scroll-trigger";

import cn from "classnames";

const Geography = ({ offsetY }) => {
  const [regions, setRegion] = React.useState({
    krsk: false,
    irkutsk: false,
    hakasia: false,
  });

  const showMap = () => {
    setRegion({ krsk: true, irkutsk: true, hakasia: true });
  };

  const showRegion = {
    krsk: () => setRegion({ krsk: true, irkutsk: false, hakasia: false }),
    irkutsk: () => setRegion({ krsk: false, irkutsk: true, hakasia: false }),
    hakasia: () => setRegion({ krsk: false, irkutsk: false, hakasia: true }),
  };

  const parallax = {
    map: { transform: `translateX(-${(offsetY * 1.5) / 20}px)` },
  };
  return (
    <ScrollTrggier onEnter={showMap}>
      <section id="geography">
        <div className="container">
          <div className="geography__inside">
            <div className="geography__adress">
              <div className="colum">
                <PreviewText value="География работы" />
                <div className="geography__title">
                  <div
                    onMouseEnter={showRegion.krsk}
                    onMouseLeave={showMap}
                    className={cn("krsk", { textRed: regions.krsk })}
                  >
                    Красноярский край
                  </div>
                  <div
                    onMouseEnter={showRegion.irkutsk}
                    onMouseLeave={showMap}
                    className={cn("irkutsk", {
                      textRed: regions.irkutsk,
                    })}
                  >
                    Иркутская область
                  </div>
                  <div
                    onMouseEnter={showRegion.hakasia}
                    onMouseLeave={showMap}
                    className={cn("hakasia", { textRed: regions.hakasia })}
                  >
                    Республика хакасия
                  </div>
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
              <RussiaMap
                style={parallax.map}
                regions={regions}
                showRegion={showRegion}
                showMap={showMap}
              />
            </div>
          </div>
        </div>
        <div className="galleryBg"></div>
      </section>
    </ScrollTrggier>
  );
};

export default Geography;
