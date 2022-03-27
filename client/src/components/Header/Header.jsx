import React from "react";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <nav className="header__menu">
          <ul className="header__menu-navigation">
            <Link
              to="advantages"
              smooth
              duration={1000}
              offset={-750}
            >
              <li>О компании</li>
            </Link>
            <Link
              to="about"
              smooth
              duration={1000}
              offset={250}
            >
              <li>Направления</li>
            </Link>
            <Link
              to="footer"
              smooth
              duration={1000}
            >
              <li>Контакты</li>
            </Link>
          </ul>
          <Logo />
          <ul className="header__menu-contacts">
            <a href="mailto:regionsnab24@mail.ru">
              <li>regionsnab24@mail.ru</li>
            </a>
            <a href="tel:+73912191597">
              <li>+7 (391) 219-15-97</li>
            </a>
            <HamburgerBtn />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
