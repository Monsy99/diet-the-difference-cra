import "./styles.css";

export const Banner = () => {
  return (
    <section className="section banner">
      <div className="banner__backdrop"></div>
      <div className="banner__container">
        <h1 className="banner__header">Rozpocznij dietę</h1>
        <h2 className="banner__subheader">i zobacz róznicę</h2>
        <p className="banner__paragraph">
          Zacznij swoją przemianę pod okiem doświadczonego dietetyka.
          <br />
          Zadbaj o zdrowie i zyskaj lepszą sylwetkę.
        </p>
        <div className="banner__buttonsContainer">
          <a href="#contact" className="banner__button banner__button--green">
            Napisz do mnie
          </a>
          <a href="#offer" className="banner__button">
            Wybierz pakiet
          </a>
        </div>
      </div>
    </section>
  );
};
