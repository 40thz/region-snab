import React from "react";

const AdvantageItem = ({ icon, value }) => {
  return (
    <div className="advantage__item">
      <div className="advantage__item-icon">
        <img src={icon} alt="Приемущества" />
      </div>
      <div className="advantage__item-title">
        <p>{value}</p>
      </div>
    </div>
  );
};

export default AdvantageItem;
