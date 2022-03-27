import React from "react";
import { Animate } from "react-simple-animate";

const AdvantageItem = ({ icon, value, index, intro }) => {
  return (
    <>
      {!intro ?
        <Animate
          start={{ opacity: 0, transform: 'translateY(-20px)' }}
          end={{ opacity: 1, transform: 'translateY(0px)' }}
          sequenceIndex={index}>
          <div className="advantage__item">
            <div className="advantage__item-icon">
              <img src={icon} alt="Приемущества" />
            </div>
            <div className="advantage__item-title">
              <p>{value}</p>
            </div>
          </div>
        </Animate> :
        <div className="advantage__item">
          <div className="advantage__item-icon">
            <img src={icon} alt="Приемущества" />
          </div>
          <div className="advantage__item-title">
            <p>{value}</p>
          </div>
        </div>
      }
    </>
  );
};

export default AdvantageItem;
