import React from "react";
import cn from "classnames";

import BlockInfo from "../BlockInfo/BlockInfo";
import PreviewText from "../PreviewText/PreviewText";

import gallery1 from "@images/Gallery/1.png";
import gallery2 from "@images/Gallery/2.png";
import gallery3 from "@images/Gallery/3.png";
import gallery4 from "@images/Gallery/4.png";
import gallery5 from "@images/Gallery/5.png";
import gallery6 from "@images/Gallery/6.png";

const Gallery = () => {
  const [showGallery, setShowGallery] = React.useState(false);

  const option = {
    sticky: showGallery,
  };

  return (
    <section id="gallery">
      <div className="container">
        <div className="gallery__inside">
          <div className="colum">
            <div className={cn("gallery__inside-left", option)}>
              <PreviewText value="Фотогалерея" />
              <BlockInfo
                onClick={() => setShowGallery(!showGallery)}
                nameBtn="Все фото"
                title="у нас всегда есть"
                titleRed="отличное предложение для вас"
                subTitle="Ведь наши команда профессионалов, современное безопасное оборудование и гарантия качества нефтепродуктов - Ваш повод сотрудничать с РегионСнаб"
              />
            </div>
          </div>
          <div className="colum">
            <div className="gallery__inside-images">
              <div className="gallery__inside-item">
                <img src={gallery1} alt="Картинка" />
              </div>
              <div className="gallery__inside-item">
                <img src={gallery2} alt="Картинка" />
              </div>
              {showGallery && (
                <>
                  <div className="gallery__inside-item">
                    <img src={gallery3} alt="Картинка" />
                  </div>
                  <div className="gallery__inside-item">
                    <img src={gallery4} alt="Картинка" />
                  </div>
                  <div className="gallery__inside-item">
                    <img src={gallery5} alt="Картинка" />
                  </div>
                  <div className="gallery__inside-item">
                    <img src={gallery6} alt="Картинка" />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
