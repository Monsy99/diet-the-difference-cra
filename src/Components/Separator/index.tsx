import "./styles.css";

import leafsLeft from "../../images/leafLeft.svg";
import leafsRight from "../../images/leafRight.svg";

export const Separator = () => {
  return (
    <section className="section separator">
      <img className="separator__image" src={leafsLeft} width="200px" alt="" />
      <article className="separator__article">
        <h2 className="separator__header">
          Jakie diety mogę <br />
          Ci zaoferować?
        </h2>
        <p className="separator__paragraph">
          Zastanawiasz się, czy moja oferta jest dla Ciebie? Sprawdź, jakie
          diety serwuję swoim klientom!
        </p>
      </article>
      <img className="separator__image" src={leafsRight} width="200px" alt="" />
    </section>
  );
};
