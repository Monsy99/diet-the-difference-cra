import { Form } from "../Form";
import "./styles.css";
import patternTopMobile from "../../images/patternTopMobile.svg";

import contactLeftBackground from "../../images/contactLeftBackground.svg";
import contactRightBackground from "../../images/contactRightBackground.svg";

export const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <img src={patternTopMobile} className="contact__mobile--top"></img>
      <h3 className="contact__header">Skontaktuj się ze mną</h3>
      <Form />
      <div className="contact__background">
        <img className="contact__image--left" src={contactLeftBackground} />
        <img className="contact__image--right" src={contactRightBackground} />
      </div>
    </section>
  );
};
