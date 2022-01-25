import "./styles.css";
import image from "../../images/dietetyk_roku.jpeg";

export const About = () => {
  return (
    <section className="section about">
      <img
        style={{ gridArea: "picture" }}
        width="100%"
        src={image}
        alt=""
        className="about__image"
      />
      <article style={{ gridArea: "text" }} className="about__article">
        <h2 className="about__header">
          O mnie - czyli jak wybrać dobrego dietetyka?
        </h2>
        <p className="about__paragraph">
          Nazywam się Patrycja Rzepczyńska i jestem dietetykiem klinicznym.
          Ukończyłam studia na Uniwersytecie Przyrodniczym we Wrocławiu na
          kierunku Żywienie człowieka i dietetyka oraz wiele kursów z zakresu
          dietetyki klinicznej, jak i sportowej. W wolnym czasie tworzę ciekawe
          przepisy, które znajdziesz na&nbsp;
          <a
            href="https://www.instagram.com/diet_the_difference/"
            target="_blank"
          >
            moim instagramie
          </a>
          .
        </p>
      </article>
    </section>
  );
};
