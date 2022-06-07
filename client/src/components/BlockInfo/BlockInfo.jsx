import React from "react";
import Button from "@components/Button/Button";

const BlockInfo = ({
  title,
  titleRed,
  subTitle,
  onClick,
  nameBtn,
  btn = true,
}) => {
  return (
    <div className="block__info">
      <div className="block__info-title">
        {title} <br /> <span>{titleRed}</span>
      </div>
      <div className="block__info-subtitle">{subTitle}</div>
      {btn && <Button value={nameBtn} onClick={onClick} />}
    </div>
  );
};

export default BlockInfo;
