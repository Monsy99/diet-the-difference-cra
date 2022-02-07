import "./styles.css";

import cloudArrowDown from "../../images/CloudArrowDown.svg";
import envelopeSimple from "../../images/EnvelopeSimple.svg";
import handshake from "../../images/Handshake.svg";
import downloadSimple from "../../images/DownloadSimple.svg";

export const Info = () => {
  return (
    <section className="section info">
      <h4 className="info__header">Rozpoczęcie współpracy krok po kroku</h4>
      <div className="info__steps">
        <div className="info__tile">
          <img
            alt="download icon"
            className="info__tileImage"
            src={cloudArrowDown}
          />
          <h4 className="info__tileHeader">Wypełnij wywiad</h4>
          <p className="info__tileParagraph">
            Wypełnij arkusz z wywiadem żywieniowym, który pobierzesz
            bezpośrednio z tej strony klikając poniższy przycisk.
          </p>
        </div>
        <div className="info__tile">
          <img
            alt="envelope"
            className="info__tileImage"
            src={envelopeSimple}
          />
          <h4 className="info__tileHeader">Wyślij go do mnie</h4>
          <p className="info__tileParagraph">
            Wypełniony arkusz wyślij wraz z nazwą wybranego przez Ciebie pakietu
            dietetycznego na mail&nbsp;
            <a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#101;&#116;&#116;&#104;&#101;&#100;&#105;&#102;&#102;&#101;&#114;&#101;&#110;&#99;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;">
              &#100;&#105;&#101;&#116;&#116;&#104;&#101;&#100;&#105;&#102;&#102;&#101;&#114;&#101;&#110;&#99;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
            </a>{" "}
            lub korzystając z&nbsp;
            <a href="#contact">formularza</a>.
          </p>
        </div>
        <div className="info__tile">
          <img
            alt="handshake icon"
            className="info__tileImage"
            src={handshake}
          />
          <h4 className="info__tileHeader">Otrzymaj odpowiedź</h4>
          <p className="info__tileParagraph">
            Gotowe! Właśnie rozpoczynam pracę nad ofertą dla Ciebie. W ciągu 2
            dni otrzymasz odpowiedź mailową ze szczegółami naszej współpracy.
          </p>
        </div>
      </div>
      <button className="info__button">
        <a href="/wywiad.pdf" download className="info__link--download">
          <span className="info__buttonText">ARKUSZ Z WYWIADEM</span>
          <img
            alt="download"
            width="24px"
            className="info__buttonImage"
            src={downloadSimple}
          />
        </a>
      </button>
    </section>
  );
};
