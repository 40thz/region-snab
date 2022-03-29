import React from "react";
import Pattern from "../Pattern/Pattern";

const FullsizeMenu = ({ active }) => {
  return (
    <div className={`fullsizeMenu ${active && "active"}`}>
      <ul className="fullsize__navigation">
        <li>О компании</li>
        <li>Направления</li>
        <li>Контакты</li>
      </ul>
      <ul className="fullsize__navigation-contacts">
        <li>regionsnab24@mail.ru</li>
        <li>+7 (391) 219-15-97</li>
      </ul>
      <Pattern active={active} />
    </div>
  );
};

export default FullsizeMenu;
