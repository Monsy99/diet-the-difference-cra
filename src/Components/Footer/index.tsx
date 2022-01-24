import "./styles.css";
import instagramLogo from "../../images/InstagramLogo.svg";
import facebookLogo from "../../images/FacebookLogo.svg";

export const Footer = () => {
  return (
    <footer className="section footer">
      <div className="footer__socialMedia">
        <a className="footer__link--picture" href="" target="_blank">
          <img width="32" src={facebookLogo} />
        </a>
        <a className="footer__link--picture" href="" target="_blank">
          <img width="32" src={instagramLogo} />
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
