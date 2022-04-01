import React from "react";
import HamburgerBtn from "../HamburgerBtn/HamburgerBtn";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import FullsizeMenu from "../FullsizeMenu/FullsizeMenu";
import { useMobile } from "../../hooks/useMobile";
import CallBtn from "../CallBtn/CallBtn";
import cn from "classnames";

const Header = () => {
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
        className={cn({ delay: !menuActive, bgRed: menuActive })}
      >
        <div className="container">
          <nav className="header__menu">
            {isMobile && <CallBtn />}
            <ul className="header__menu-navigation">
              <Link to="/about">
                <li>О компании</li>
              </Link>
              <Link to="/directions">
                <li>Направления</li>
              </Link>
              <Link to="/contacts">
                <li>Контакты</li>
              </Link>
            </ul>
            <Link to="/">
              <Logo />
            </Link>
            <ul className="header__menu-contacts">
              <a href="mailto:regionsnab24@mail.ru">
                <li>regionsnab24@mail.ru</li>
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
      <FullsizeMenu active={menuActive} />
    </>
  );
};

export default Header;
