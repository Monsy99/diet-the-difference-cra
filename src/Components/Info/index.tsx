import "./styles.css";

import cloudArrowDown from "../../images/CloudArrowDown.svg";
import envelopeSimple from "../../images/EnvelopeSimple.svg";
import handshake from "../../images/Handshake.svg";
import downloadSimple from "../../images/DownloadSimple.svg";

export const Info = () => {
  return (
    <section className="section info">
      <h3 className="info__header">Rozpoczęcie współpracy krok po kroku</h3>
      <div className="info__steps">
        <div className="info__tile">
          <img className="info__tileImage" src={cloudArrowDown} />
          <h4 className="info__tileHeader">Wypełnij wywiad</h4>
          <p className="info__tileParagraph">
            Wypełnij arkusz z wywiadem żywieniowym, który pobierzesz
            bezpośrednio z tej strony klikając poniższy przycisk.
          </p>
        </div>
        <div className="info__tile">
          <img className="info__tileImage" src={envelopeSimple} />
          <h4 className="info__tileHeader">Wyślij go do mnie</h4>
          <p className="info__tileParagraph">
            Wypełniony arkusz wyślij wraz z nazwą wybranego przez Ciebie pakietu
            dietetycznego na mail
            <a href="mailto:123@gmail.com">mail@mail.com</a> lub korzystając z
            <a href="#form">formularza</a>.
          </p>
        </div>
        <div className="info__tile">
          <img className="info__tileImage" src={handshake} />
          <h4 className="info__tileHeader">Otrzymaj odpowiedź</h4>
          <p className="info__tileParagraph">
            Gotowe! Właśnie rozpoczynam pracę nad ofertą dla Ciebie. W ciągu 2
            dni otrzymasz odpowiedź mailową ze szczegółami naszej współpracy.
          </p>
        </div>
      </div>
      <button className="info__button">
        <a
          href="./images/background.jpg"
          download
          className="info__link--download"
        >
          <span className="info__buttonText">ARKUSZ Z WYWIADEM</span>
          <img
            width="24px"
            className="info__buttonImage"
            src={downloadSimple}
          />
        </a>
      </button>
    </section>
  );
};
