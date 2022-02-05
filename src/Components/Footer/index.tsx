import "./styles.css";
import instagramLogo from "../../images/InstagramLogo.svg";

export const Footer = () => {
  return (
    <footer className="section footer">
      <a
        href="https://www.instagram.com/diet_the_difference/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          className="footer__link--picture"
          alt="instagram logo"
          width="32"
          src={instagramLogo}
        />
      </a>
      <span className="footer__copyright">
        &copy; Copyright 2022, Diet the Difference
      </span>
      <div className="footer__contactInfo">
        <a className="footer__link" href="mailto:dietthedifference@gmail.com">
          dietthedifference@gmail.com
        </a>
      </div>
    </footer>
  );
};
