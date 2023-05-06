import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import css from "./page-not-found.module.css";
import { useNavigate } from "react-router-dom";
import { navigateTo } from "../../utils/helpers/navigate";

const PageNotFound = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);

  return (
    <div className={`page-container ${css["page-not-found-container"]}`}>
      <h1 className={`page-heading`}>
        404 PAGE NOT FOUND
        <span className={`${css["subheading"]}`}>
          The page you were looking for does not exist.
        </span>
      </h1>

      <Button
        onClick={() => handleNavigate("/shop")}
        buttonType={BUTTON_TYPE_CLASSES.underlinedHome}
      >
        CONTINUE SHOPPING
      </Button>
    </div>
  );
};

export default PageNotFound;
