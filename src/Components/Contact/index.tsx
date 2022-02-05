import { Form, PreferedDietType } from "../Form";
import "./styles.css";
import patternTopMobile from "../../images/patternTopMobile.svg";
import patternBottomMobile from "../../images/patternBottomMobile.svg";

import contactLeftBackground from "../../images/contactLeftBackground.svg";
import contactRightBackground from "../../images/contactRightBackground.svg";

interface IContact {
  preferedDiet?: PreferedDietType;
}

export const Contact: React.FC<IContact> = ({ preferedDiet }) => {
  return (
    <section id="contact" className="section contact">
      <h3 className="contact__header">Skontaktuj się ze mną</h3>
      <Form initialValue={preferedDiet} />
      <div className="contact__background">
        <img
          alt=""
          src={patternTopMobile}
          className="mobile contact__mobilePicture--top"
        ></img>
        <img
          alt=""
          src={patternBottomMobile}
          className="mobile contact__mobilePicture--bottom"
        ></img>
        <img
          alt=""
          className="contact__image--left"
          src={contactLeftBackground}
        />
        <img
          alt=""
          className="contact__image--right"
          src={contactRightBackground}
        />
      </div>
    </section>
  );
};
