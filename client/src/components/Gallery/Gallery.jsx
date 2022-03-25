import React from "react";
import BlockInfo from "../BlockInfo/BlockInfo";
import PreviewText from "../PreviewText/PreviewText";

import gallery1 from "@images/Gallery/1.jpg";
import gallery2 from "@images/Gallery/2.jpg";
import gallery3 from "@images/Gallery/3.jpg";
import gallery4 from "@images/Gallery/4.jpg";
import gallery5 from "@images/Gallery/5.jpg";
import gallery6 from "@images/Gallery/6.jpg";

const Gallery = () => {
  return (
    <section id="gallery">
      <div className="container">
        <div className="gallery__inside">
          <div className="colum">
            <PreviewText value="Фотогалерея" />
            <BlockInfo
              title="Небольшой заголовок"
              titleRed="на 2 строки"
              subTitle="И текст-описание о фотогалерее на 3-5 строк. И текст-описание о фотогалерее на 3-5 строк. И текст-описание о фотогалерее на 3-5 строк. "
            />
          </div>
          <div className="colum">
            <div className="gallery__inside-images">
              <div className="gallery__inside-item">
                <img src={gallery1} alt="Картинка" />
              </div>
              <div className="gallery__inside-item">
                <img src={gallery2} alt="Картинка" />
              </div>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
