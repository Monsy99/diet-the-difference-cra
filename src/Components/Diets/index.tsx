import "./styles.css";

import secondaryBackground from "../../images/secondaryBackground.jpg";

export const Diets = () => {
  return (
    <section className="section diets">
      <img alt="" className="diets__picture--left" src={secondaryBackground} />
      <div className="diets__container">
        <div className="diets__tile">
          <ul className="diets__list">
            <li className="diets__item">redukcyjna</li>
            <li className="diets__item">
              przy zaburzeniach glikemii
              <br />
              <p className="diets__annotation">(cukrzyca, insulinooporność)</p>
            </li>
            <li className="diets__item">dla sportowca</li>
            <li className="diets__item">zdrowe i racjonalne żywienie</li>
            <li className="diets__item">
              wegetariańska
              <br />
              <p className="diets__annotation">z włączeniem ryb</p>
            </li>
            <li className="diets__item">dieta specjalna *</li>
          </ul>
          <a href="#offer" className="diets__button">
            Zamów teraz
          </a>
          <p className="diets__extraInfo">
            * Nie wiesz jaką dietę wybrać? <br />{" "}
            <a href="#contact">Napisz do mnie</a> - chętnie doradzę Ci, czym
            powinieneś kierować się w wyborze.
          </p>
        </div>
      </div>
      <img alt="" className="diets__picture--right" src={secondaryBackground} />
    </section>
  );
};
