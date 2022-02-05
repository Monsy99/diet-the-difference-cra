import "./styles.css";
import ImageGallery from "react-image-gallery";
import patternRight from "../../images/galleryPatternRight.svg";
import patternLeft from "../../images/galleryPatternLeft.svg";
import patternTopMobile from "../../images/patternTopMobile.svg";
import instagramLogoWhite from "../../images/InstagramLogoWhite.svg";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import pic4 from "../../images/pic4.jpg";
import pic5 from "../../images/pic5.jpg";
import mini1 from "../../images/mini1.jpg";
import mini2 from "../../images/mini2.jpg";
import mini3 from "../../images/mini3.jpg";
import mini4 from "../../images/mini4.jpg";
import mini5 from "../../images/mini5.jpg";

export const Gallery = () => {
  const images = [
    {
      original: pic1,
      thumbnail: mini1,
    },
    {
      original: pic2,
      thumbnail: mini2,
    },
    {
      original: pic3,
      thumbnail: mini3,
    },
    {
      original: pic4,
      thumbnail: mini4,
    },
    {
      original: pic5,
      thumbnail: mini5,
    },
  ];
  return (
    <section className="section gallery">
      <img alt="" src={patternTopMobile} className="gallery__mobile--top"></img>
      <h4 className="gallery__header">
        Przykłady potraw, które możesz <br />
        zobaczyć na własnym talerzu
      </h4>
      <img
        alt=""
        src={patternRight}
        className="gallery__backgroundImg gallery__backgroundImg--right"
      />
      <img
        alt=""
        src={patternLeft}
        className="gallery__backgroundImg gallery__backgroundImg--left"
      />
      <div className="gallery__container">
        <ImageGallery autoPlay showBullets lazyLoad items={images} />
      </div>
      <div className="gallery__spacer">
        <a
          href="https://www.instagram.com/diet_the_difference/"
          target="_blank"
          rel="noreferrer"
          className="gallery__button"
        >
          <span>WIĘCEJ NA</span>
          <img
            alt="instagram logo"
            className="gallery__buttonIcon"
            src={instagramLogoWhite}
          />
        </a>
      </div>
    </section>
  );
};
