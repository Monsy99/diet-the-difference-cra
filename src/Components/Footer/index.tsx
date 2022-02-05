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
        <a
          className="footer__link"
          href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;&#100;&#105;&#101;&#116;&#116;&#104;&#101;&#100;&#105;&#102;&#102;&#101;&#114;&#101;&#110;&#99;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
        >
          &#100;&#105;&#101;&#116;&#116;&#104;&#101;&#100;&#105;&#102;&#102;&#101;&#114;&#101;&#110;&#99;&#101;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;
        </a>
      </div>
    </footer>
  );
};
