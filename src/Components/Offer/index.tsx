import "./styles.css";

import tile1 from "../../images/tile1.jpg";
import tile2 from "../../images/tile2.jpg";
import tile3 from "../../images/tile3.jpg";

export const Offer = () => {
  return (
    <section className="section offer">
      <h3 className="offer__header">
        Wybierz swój pakiet <br />i ciesz się wyjątkową dietą
      </h3>
      <div className="offer__tilesWrapper">
        <div className="offer__tile">
          <h4 className="offer__tileHeader">
            Konsultacja <br />
            dietetyczna
          </h4>
          <img className="offer__image" src={tile1} width="100%" />
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
          <button className="offer__button">Wybierz</button>
        </div>
        <div className="offer__tile offer__tile--larger">
          <h4 className="offer__tileHeader">
            Pakiet <br />
            miesięczny
          </h4>
          <img className="offer__image" src={tile2} width="100%" />
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
          <button className="offer__button offer__button--special">
            Wybierz
          </button>
        </div>
        <div className="offer__tile">
          <h4 className="offer__tileHeader">
            Pakiet <br />
            dwumiesięczny
          </h4>

          <img className="offer__image" src={tile3} width="100%" />
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

          <button className="offer__button">Wybierz</button>
        </div>
      </div>
    </section>
  );
};
