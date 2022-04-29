import React, { useRef } from "react";
import cn from "classnames";
import { useParallax } from "../../hooks/useParallax";
import { useMobile } from "../../hooks/useMobile";

const DirectionCart = ({ image, index, title, aboutTitle, list, style }) => {
  const [showContent, setShowContent] = React.useState(false);
  const parallax = useParallax();
  const isMobile = useMobile();
  const ref = useRef();

  return (
    <div style={style} className="direction__cart">
      <div className="direction__cart-top">
        <div className="direction__cart-image">
          <img src={image} alt="рг" />
        </div>
        <div className="direction__cart-number">0{index}</div>
        <div className="direction__cart-title">{title}</div>
        <div
          onClick={() => setShowContent(!showContent)}
          className="direction__cart-showbtn"
        >
          <svg
            className={cn({ active: showContent })}
            width="9"
            height="13"
            viewBox="0 0 9 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 12.02L7 6.52002L0.999999 1.02002"
              stroke="#F0F1F1"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
      <div
        style={{ height: showContent && ref.current.clientHeight }}
        className="direction__cart-inside"
      >
        <div ref={ref} className="hidecontent">
          <div className="direction__cart-inside-title">{aboutTitle}</div>
          {list && (
            <div className="direction__cart-inside__list">
              <div className="direction__cart-inside__list-title">
                Оптовые поставки нефтепродуктов осуществляются:
              </div>
              {list.map((item, i) => (
                <div key={i} className="direction__cart-inside__list-item">
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DirectionCart;
