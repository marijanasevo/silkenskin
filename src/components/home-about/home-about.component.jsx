import css from "./home-about.module.css";

const HomeAbout = () => {
  return (
    <div className={css["home-about-container"] + " section"}>
      <h1 className="section-title">About Silken Skin</h1>

      <blockquote className={css["home-about-quote"]}>
        <p>
          We believe in the transformative power of self-love. Our mission is to
          empower individuals to cultivate a deeper sense of
          <span className="em"> gratitude</span> and{" "}
          <span className="em">appreciation</span> for their bodies. The body is
          a sacred vessel that deserves to be{" "}
          <span className="em">cherished</span> and{" "}
          <span className="em">nurtured</span>.
        </p>
      </blockquote>
    </div>
  );
};

export default HomeAbout;
