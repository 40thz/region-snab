import React from "react";
import {
  YMaps,
  Map as MapTwo,
  Placemark,
  ZoomControl,
} from "react-yandex-maps";

import { useMobile } from "@hooks/useMobile";

import logo from "@images/Contacts/marker.svg";
import Mapinside from "./Mapinside/Mapinside";

const Map = () => {
  const cords = [
    [56.05675004995326, 92.93955225033177],
    [56.058586376744714, 93.12641529045462],
  ];
  const [cordinate, setCordinate] = React.useState(0);
  const isMobile = useMobile();

  return (
    <YMaps>
      <div>
        <div className="container">
          <Mapinside setCordinate={setCordinate} cordinate={cordinate} />
        </div>
        <MapTwo
          instanceRef={(ref) => {
            if (ref) {
              ref.behaviors.disable("scrollZoom");

              isMobile && ref.behaviors.disable("drag");
            }
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
