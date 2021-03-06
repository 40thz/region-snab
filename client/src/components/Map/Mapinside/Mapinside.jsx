import React from "react";
import cn from "classnames";

import { useParallax } from "@hooks/useParallax";

const Mapinside = ({ setCordinate, cordinate }) => {
  const parallax = useParallax();

  const parallaxAnim = {
    firstCart: {
      transform: `translateY(-${parallax / 12}px)`,
    },
    secondCart: {
      transform: `translateY(-${(parallax - 250) / 12}px)`,
    },
  };
  return (
    <div className="map__inside">
      <div style={parallaxAnim.firstCart}>
        <div className={cn("map__cart", { active: cordinate === 0 })}>
          <div className="map__cart-title">
            адрес офиса ООО <span>"регионснаб"</span>
          </div>
          <div className="map__cart-subtitle">
            Россия, Красноярский край г. Красноярск, ул. Краснодарская, д. 40Д,
            660005
          </div>
          <div onClick={() => setCordinate(0)} className="map__cart-btn">
            Показать на карте
          </div>
        </div>
      </div>
      <div style={parallaxAnim.secondCart}>
        <div className={cn("map__cart", { active: cordinate === 1 })}>
          <div className="map__cart-title">
            адрес склада гсм <span>"регионснаб"</span>
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
  );
};

export default Mapinside;
