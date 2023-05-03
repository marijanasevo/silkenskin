import featuredImage from "../../assets/featured-product.jpg";
import css from "./home-featured-product.module.css";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FeaturedImage from "../../assets/featured-product.jpg";

const HomeFeaturedProduct = () => {
  return (
    <div className={css["featured-product-container"]}>
      <h2 className="section-title">Radiant & youthful glow</h2>
      <p className={css["featured-description"]}>
        Indulge your skin with a luxury moisturizer crafted from the finest
        natural ingredients. This magical cream boasts a rich, creamy texture
        that melts effortlessly into your skin, leaving it{" "}
        <span className="em">silky soft</span> and deeply hydrated.
      </p>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.underlinedHome}
        // onClick={}
        //TODO: lead to this cream
      >
        SHOP NOW
      </Button>

      <img
        className={css["featured-image"]}
        src={featuredImage}
        alt="Featured Product on discount"
      />
    </div>
  );
};

export default HomeFeaturedProduct;
