import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/helpers/navigate";

import css from "./home-hero.module.css";

const HomeHero = () => {
  return (
    <div className={css["home-hero"]}>
      <div className={css["home-hero__details"]}>
        <span className={css["home-hero__subtitle"]}>nourish your skin</span>

        <h1 className={css["home-hero__title"]}>
          Experience the power of natural ingredients
        </h1>
      </div>

      <Button
        buttonType={BUTTON_TYPE_CLASSES.accented}
        className={css["accented-link"]}
        onClick={() => handleNavigate("/shop")}
      >
        SHOP NOW
      </Button>
    </div>
  );
};

export default HomeHero;
