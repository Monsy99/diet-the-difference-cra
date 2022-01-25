import "./styles.css";
import instagramLogo from "../../images/InstagramLogo.svg";
import facebookLogo from "../../images/FacebookLogo.svg";

export const Footer = () => {
  return (
    <footer className="section footer">
      <div className="footer__socialMedia">
        <a
          className="footer__link--picture"
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="facebook logo" width="32" src={facebookLogo} />
        </a>
        <a
          className="footer__link--picture"
          href="https://www.instagram.com/diet_the_difference/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="instagram logo" width="32" src={instagramLogo} />
        </a>
      </div>
      <div className="footer__contactInfo">
        <a className="footer__link" href="mailto:mockmail@gmail.com">
          mockmail@gmail.com
        </a>
      </div>
    </footer>
  );
};
