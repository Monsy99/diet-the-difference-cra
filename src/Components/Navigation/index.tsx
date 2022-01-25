import "./styles.css";
import logo from "../../images/dietTheDifferenceLogoBlack.svg";
import { useRef } from "react";

export const Navigation = () => {
  const navigationMenu = useRef<HTMLDivElement>(null);
  const navigationBurger = useRef<HTMLButtonElement>(null);
  const toggleMobileMenu = () => {
    navigationMenu.current?.classList.toggle("navigation__menu--open");
    navigationBurger.current?.classList.toggle("navigation__burger--open");
  };
  return (
    <nav className="section navigation">
      <a href="/">
        <img className="navigation__logo" src={logo} alt="logo" />
      </a>
      <button
        ref={navigationBurger}
        onClick={toggleMobileMenu}
        className="navigation__burger"
      >
        <div className="navigation__line navigation__line1"></div>
        <div className="navigation__line navigation__line2"></div>
        <div className="navigation__line navigation__line3"></div>
      </button>
      <div
        key="navigation-menu"
        ref={navigationMenu}
        className="navigation__menu"
      >
        <a
          onClick={toggleMobileMenu}
          className="navigation__link navigation__link--selected"
          href="#diets"
        >
          Oferta
        </a>
        <a
          onClick={toggleMobileMenu}
          className="navigation__link navigation__mobile"
          href="#offer"
        >
          Pakiety
        </a>
        <a
          onClick={toggleMobileMenu}
          className="navigation__link"
          href="#contact"
        >
          Kontakt
        </a>
      </div>
    </nav>
  );
};
