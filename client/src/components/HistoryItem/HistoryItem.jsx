import React from "react";
import historyImg from "@images/Gallery/4.png";

const HistoryItem = ({ year, items }) => {
  return (
    <div className="historyitem">
      <div className="historyitem-year">{year}</div>
      <div className="historyitem-image">
        <img src={historyImg} alt="Регионснаб" />
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
