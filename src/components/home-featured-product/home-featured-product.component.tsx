import featuredImage from "../../assets/featured-product.jpg";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import css from "./home-featured-product.module.css";

const HomeFeaturedProduct = () => {
  return (
    <div className={"section"}>
      <h2 className="section-title">Radiant & youthful glow</h2>
      <p className={css["featured-description"]}>
        Indulge your skin with a luxury moisturizer crafted from the{" "}
        <span className="em">finest natural ingredients</span>. This magical
        cream boasts a rich, creamy texture that melts effortlessly into your
        skin, leaving it <span className="em">silky soft</span> and{" "}
        <span className="em">deeply hydrated</span>.
      </p>

      <img
        className={css["featured-image"]}
        src={featuredImage}
        alt="Featured Product on discount"
      />

      <Button
        buttonType={BUTTON_TYPE_CLASSES.underlinedHome}
        // onClick={}
        //TODO: lead to this cream
      >
        SHOP NOW
      </Button>
    </div>
  );
};

export default HomeFeaturedProduct;
