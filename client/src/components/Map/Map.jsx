import React from "react";
import { YMaps, Map as MapTwo, Placemark } from "react-yandex-maps";
import logo from "@images/Contacts/marker.svg";
import cn from "classnames";

const Map = () => {
  const cords = [
    [56.05675004995326, 92.93955225033177],
    [56.0649023840175, 93.11883060450744],
  ];
  const [cordinate, setCordinate] = React.useState(0);

  return (
    <YMaps>
      <div>
        <div className="container">
          {" "}
          controls: ['default', 'routeButtonControl']
          <div className="map__inside">
            <div className={cn("map__cart", { active: cordinate === 0 })}>
              <div className="map__cart-title">
                адрес офиса ООО <span>"регионснаб"</span>
              </div>
              <div className="map__cart-subtitle">
                Россия, Красноярский край г. Красноярск, ул. Краснодарская, д.
                40Д, 660005
              </div>
              <div onClick={() => setCordinate(0)} className="map__cart-btn">
                Показать на карте
              </div>
            </div>
            <div className={cn("map__cart", { active: cordinate === 1 })}>
              <div className="map__cart-title">
                адрес нефтебазы ООО <span>"регионснаб"</span>
              </div>
              <div className="map__cart-subtitle">
                Россия, Красноярский край Емельяновкий район, площадка Восточная
                промзона, 4км юго-восточнее д.Песчанка
              </div>
              <div onClick={() => setCordinate(1)} className="map__cart-btn">
                Показать на карте
              </div>
            </div>
          </div>
        </div>
        <MapTwo
          style={{ width: "100%", height: "766px" }}
          state={{
            center: cords[cordinate],
            zoom: 15,
          }}
        >
          <Placemark
            geometry={cords[cordinate]}
            options={{
              iconLayout: "default#image",
              iconImageHref: logo,
              iconImageSize: [78, 77],
              iconImageOffset: [-50, -60],
            }}
          />
        </MapTwo>
      </div>
    </YMaps>
  );
};

export default Map;
