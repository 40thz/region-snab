import React from "react";
import { Link } from "react-router-dom";
import Pattern from "../Pattern/Pattern";

const FullsizeMenu = ({ active, onClick }) => {
  return (
    <div className={`fullsizeMenu ${active && "active"}`}>
      <ul className="fullsize__navigation">
        <Link to="/">
          <li onClick={onClick}>Главная</li>
        </Link>
        <Link to="/about">
          <li onClick={onClick}>О компании</li>
        </Link>
        <Link to="/directions">
          <li onClick={onClick}>Направления</li>
        </Link>
        <Link to="/contacts">
          <li onClick={onClick}>Контакты</li>
        </Link>
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
