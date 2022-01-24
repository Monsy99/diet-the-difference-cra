import "./styles.css";
import ImageGallery from "react-image-gallery";
import patternRight from "../../images/picturesPatternRight.svg";
import patternLeft from "../../images/picturesPatternLeft.svg";
import patternTopMobile from "../../images/patternTopMobile.svg";
import instagramLogoWhite from "../../images/InstagramLogoWhite.svg";
import pic1 from "../../images/pic1.jpg";
import pic2 from "../../images/pic2.jpg";
import pic3 from "../../images/pic3.jpg";
import mini1 from "../../images/mini1.jpg";
import mini2 from "../../images/mini2.jpg";
import mini3 from "../../images/mini3.jpg";

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
  ];
  return (
    <section className="section pictures">
      <img src={patternTopMobile} className="pictures__mobile--top"></img>
      <h3 className="pictures__header">
        Przykłady potraw, które możesz <br />
        zobaczyć na własnym talerzu
      </h3>
      <img
        src={patternRight}
        className="pictures__backgroundImg pictures__backgroundImg--right"
      />
      <img
        src={patternLeft}
        className="pictures__backgroundImg pictures__backgroundImg--left"
      />
      <div className="pictures__container">
        <ImageGallery autoPlay showBullets lazyLoad items={images} />
      </div>
      <div className="pictures__spacer">
        <button className="pictures__button">
          <span>WIĘCEJ NA</span>
          <img className="pictures__buttonIcon" src={instagramLogoWhite} />
        </button>
      </div>
    </section>
  );
};
