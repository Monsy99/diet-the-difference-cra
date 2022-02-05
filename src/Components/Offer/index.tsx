import "./styles.css";

import tile1 from "../../images/tile1.jpg";
import tile2 from "../../images/tile2.jpg";
import tile3 from "../../images/tile3.jpg";
import { PreferedDietType } from "../Form";

interface IOffer {
  setPreferedDiet: React.Dispatch<React.SetStateAction<PreferedDietType>>;
}

export const Offer: React.FC<IOffer> = ({ setPreferedDiet }) => {
  return (
    <section className="section offer" id="offer">
      <h3 className="offer__header">
        Wybierz swój pakiet <br />i ciesz się wyjątkową dietą
      </h3>
      <div className="offer__tilesWrapper">
        <div className="offer__tile">
          <h5 className="offer__tileHeader">
            Konsultacja <br />
            dietetyczna
          </h5>
          <img
            alt="woman holding a slice of watermelon"
            className="offer__image"
            src={tile1}
            width="100%"
          />
          <ul className="offer__list">
            <li className="offer__item">
              1h konsultacji z analizą sposobu żywienia
            </li>
            <li className="offer__item">materiały edukacyjne</li>
            <li className="offer__item">zamienniki produktów w diecie</li>
            <li className="offer__item">
              zalecenia dietetyczne dopasowane do Twojego indywidualnego
              przypadku
            </li>
          </ul>
          <div className="offer__price">89zł</div>
          <a
            onClick={() => {
              setPreferedDiet("konsultacja dietetyczna");
            }}
            href="#contact"
            className="offer__button"
          >
            Wybierz
          </a>
        </div>
        <div className="offer__tile offer__tile--larger">
          <h5 className="offer__tileHeader">
            Pakiet <br />
            miesięczny
          </h5>
          <img
            alt="woman sitting with a lunch box"
            className="offer__image"
            src={tile2}
            width="100%"
          />
          <ul className="offer__list">
            <li className="offer__item">
              konsultacja z omówieniem nawyków żywieniowych
            </li>
            <li className="offer__item">7-dniowy jadłospis</li>
            <li className="offer__item">jedna poprawka do jadłospisu</li>
            <li className="offer__item">lista zakupów</li>
            <li className="offer__item">indywidualnie dobrana suplementacja</li>
            <li className="offer__item">cotygodniowe raporty postępów</li>
          </ul>
          <div className="offer__price offer__price--larger">159zł</div>
          <a
            href="#contact"
            className="offer__button offer__button--special"
            onClick={() => {
              setPreferedDiet("pakiet miesięczny");
            }}
          >
            Wybierz
          </a>
        </div>
        <div className="offer__tile">
          <h5 className="offer__tileHeader">
            Pakiet <br />
            dwumiesięczny
          </h5>

          <img
            alt="woman holding two containers with a healthy lunch"
            className="offer__image"
            src={tile3}
            width="100%"
          />
          <ul className="offer__list">
            <li className="offer__item">
              konsultacja z omówieniem nawyków żywieniowych
            </li>
            <li className="offer__item offer__item--doubleBullet">
              14-dniowy jadłospis
            </li>
            <li className="offer__item offer__item--doubleBullet">
              dwie poprawki do jadłospisu
            </li>
            <li className="offer__item">lista zakupów</li>
            <li className="offer__item">indywidualnie dobrana suplementacja</li>
            <li className="offer__item">cotygodniowe raporty postępów</li>
          </ul>
          <div className="offer__price">239zł</div>

          <a
            href="#contact"
            onClick={() => {
              setPreferedDiet("pakiet dwumiesięczny");
            }}
            className="offer__button"
          >
            Wybierz
          </a>
        </div>
      </div>
    </section>
  );
};
