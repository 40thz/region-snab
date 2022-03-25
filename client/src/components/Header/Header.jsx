import React from "react";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="header__menu">
          <ul className="header__menu-navigation">
            <li>О компании</li>
            <li>Направления</li>
            <li>Контакты</li>
          </ul>
          <Logo />
          <ul className="header__menu-contacts">
            <li>regionsnab24@mail.ru</li>
            <li>+7 (391) 219-15-97</li>
            <HamburgerBtn />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
