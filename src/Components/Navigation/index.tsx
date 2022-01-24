import "./styles.css";
import logo from "../../images/dietTheDifferenceLogoBlack.svg";

export const Navigation = () => {
  return (
    <nav className="section navigation">
      <img className="navigation__logo" src={logo} alt="logo" />
      <div className="navigation__menu">
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
