import React from "react";

const HistoryItem = ({ image, year, items }) => {
  return (
    <div className="historyitem">
      <div className="historyitem-year">{year}</div>
      <div className="historyitem-image">
        <img
          style={{ transform: `rotate(${image.rotate}deg)` }}
          src={image.src}
          alt="Регионснаб"
        />
      </div>
      <div className="historyitem-chronology">
        {items.map((item, i) => (
          <li key={i} className="chronology-event">
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default HistoryItem;
