import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/helpers/navigate";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import css from "./home-hero.module.css";

const HomeHero = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);

  return (
    <div className={css["home-hero-container"]}>
      <div className={css["home-hero-details"]}>
        <span className={css["home-hero-subtitle"]}>nourish your skin &</span>

        <h1 className={css["home-hero-title"]}>
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
