import React from "react";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";
import FullsizeMenu from "../FullsizeMenu/FullsizeMenu";
import { useMobile } from "../../hooks/useMobile";
import CallBtn from "../CallBtn/CallBtn";
import cn from "classnames";

const Header = ({ dark }) => {
  const isMobile = useMobile();
  const [menuActive, setMenuActive] = React.useState(false);

  const showMenu = () => {
    setMenuActive(!menuActive);
    document.body.style.overflow = menuActive ? "auto" : "hidden";
  };
  return (
    <>
      <header
        id="header"
        className={cn({ delay: !menuActive, bgRed: menuActive, dark: dark })}
      >
        <div className="container">
          <nav className="header__menu">
            {isMobile && <CallBtn />}
            <ul className="header__menu-navigation">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
              >
                <li>Главная</li>
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
              >
                <li>О компании</li>
              </NavLink>
              <NavLink
                to="/directions"
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
              >
                <li>Деятельность</li>
              </NavLink>
              <NavLink
                to="/contacts"
                className={({ isActive }) => (isActive ? "lactive-class" : "")}
              >
                <li>Контакты</li>
              </NavLink>
            </ul>
            <Link to="/">
              <Logo />
            </Link>
            <ul className="header__menu-contacts">
              <a href="mailto:info@regionsnab24.ru ">
                <li>info@regionsnab24.ru </li>
              </a>
              <a href="tel:+73912191597">
                <li>+7 (391) 219-15-97</li>
              </a>
            </ul>
            {isMobile && (
              <HamburgerBtn active={menuActive} onClick={showMenu} />
            )}
          </nav>
        </div>
      </header>
      <FullsizeMenu active={menuActive} onClick={showMenu} />
    </>
  );
};

export default Header;
