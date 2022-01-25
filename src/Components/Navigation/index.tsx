import "./styles.css";
import logo from "../../images/dietTheDifferenceLogoBlack.svg";
import ReactCSSTransitionGroup from "react-transition-group";
import { useRef } from "react";

export const Navigation = () => {
  const navigationMenu = useRef<HTMLDivElement>(null);
  return (
    <nav className="section navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <div
        onClick={(e) => {
          e.currentTarget.classList.toggle("navigation__burger--open");
          navigationMenu.current?.classList.toggle("navigation__menu--open");
        }}
        className="navigation__burger"
      >
        <div className="navigation__line navigation__line1"></div>
        <div className="navigation__line navigation__line2"></div>
        <div className="navigation__line navigation__line3"></div>
      </div>
      <div
        key="navigation-menu"
        ref={navigationMenu}
        className="navigation__menu"
      >
        <a
          className="navigation__link navigation__link--selected"
          href="#diets"
        >
          Oferta
        </a>
        <a className="navigation__link" href="#contact">
          Kontakt
        </a>
      </div>
    </nav>
  );
};
