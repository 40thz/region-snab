import React from "react";
import cn from "classnames";

import { useMobile } from "@hooks/useMobile";

import BlockInfo from "../BlockInfo/BlockInfo";
import PreviewText from "../PreviewText/PreviewText";

import gallery1 from "@images/Gallery/1.jpg";
import gallery2 from "@images/Gallery/2.jpg";
import gallery3 from "@images/Gallery/3.jpg";
import gallery4 from "@images/Gallery/4.jpg";
import gallery5 from "@images/Gallery/5.jpg";
import gallery6 from "@images/Gallery/6.jpg";
import gallery7 from "@images/Gallery/7.jpg";
import gallery8 from "@images/Gallery/8.jpg";
import gallery9 from "@images/Gallery/9.jpg";
import gallery10 from "@images/Gallery/10.jpg";
import Button from "../Button/Button";

const Gallery = () => {
  const [showGallery, setShowGallery] = React.useState(false);
  const isMobile = useMobile();
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
                subTitle="Наша команда профессионалов, современное безопасное оборудование и гарантия качества нефтепродуктов - Ваш повод сотрудничать с РегионСнаб"
                btn={!isMobile}
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
                  <div className="gallery__inside-item">
                    <img src={gallery7} alt="Картинка" />
                  </div>
                  <div className="gallery__inside-item">
                    <img src={gallery8} alt="Картинка" />
                  </div>
                  <div className="gallery__inside-item">
                    <img src={gallery9} alt="Картинка" />
                  </div>
                  <div className="gallery__inside-item">
                    <img src={gallery10} alt="Картинка" />
                  </div>
                </>
              )}
              {isMobile && (
                <Button
                  onClick={() => setShowGallery(!showGallery)}
                  value="Все фото"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
