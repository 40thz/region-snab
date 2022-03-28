import React from "react";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import { Link } from "react-scroll";
import Logo from "../Logo/Logo";
import FullsizeMenu from "../FullsizeMenu/FullsizeMenu";
import { useMobile } from "../../hooks/useMobile";
import CallBtn from "../CallBtn/CallBtn";

const Header = () => {
  const isMobile = useMobile();

  return (
    <>
      <header id="header">
        <div className="container">
          <nav className="header__menu">
            {isMobile && <CallBtn />}
            <ul className="header__menu-navigation">
              <Link to="advantages" smooth duration={1000} offset={-750}>
                <li>О компании</li>
              </Link>
              <Link to="about" smooth duration={1000} offset={250}>
                <li>Направления</li>
              </Link>
              <Link to="footer" smooth duration={1000}>
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
            </ul>
            {isMobile && <HamburgerBtn />}
          </nav>
        </div>
      </header>
      {/* <FullsizeMenu /> */}
    </>
  );
};

export default Header;
