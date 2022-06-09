import React from "react";
import {
  YMaps,
  Map as MapTwo,
  Placemark,
  ZoomControl,
} from "react-yandex-maps";
import logo from "@images/Contacts/marker.svg";
import Mapinside from "./Mapinside/Mapinside";

const Map = () => {
  const cords = [
    [56.05675004995326, 92.93955225033177],
    [56.058586376744714, 93.12641529045462],
  ];
  const [cordinate, setCordinate] = React.useState(0);

  return (
    <YMaps>
      <div>
        <div className="container">
          <Mapinside setCordinate={setCordinate} cordinate={cordinate} />
        </div>
        <MapTwo
          instanceRef={(ref) => {
            ref && ref.behaviors.disable("scrollZoom");
          }}
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
          <ZoomControl />
        </MapTwo>
      </div>
    </YMaps>
  );
};

export default Map;
