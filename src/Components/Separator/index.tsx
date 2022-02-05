import "./styles.css";

import leafsLeft from "../../images/leafLeft.svg";
import leafsRight from "../../images/leafRight.svg";

export const Separator = () => {
  return (
    <section className="section separator" id="diets">
      <img className="separator__image" src={leafsLeft} width="200px" alt="" />
      <article className="separator__article">
        <h3 className="separator__header">
          Jakie diety mogę <br />
          Ci zaoferować?
        </h3>
        <p className="separator__paragraph">
          Zastanawiasz się, czy moja oferta jest dla Ciebie? Sprawdź, jakie
          diety serwuję swoim klientom!
        </p>
      </article>
      <img className="separator__image" src={leafsRight} width="200px" alt="" />
    </section>
  );
};
