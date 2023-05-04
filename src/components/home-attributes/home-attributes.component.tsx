import AutorenewIcon from "@mui/icons-material/Autorenew";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import css from "./home-attributes.module.css";
const HomeAttributes = () => {
  return (
    <div className={css["home-attributes-container"]}>
      <div className={css["attributes"]}>
        <div className={css["attribute"]}>
          <DeliveryDiningIcon
            sx={{
              fontSize: "4.5rem",
            }}
          />
          <h3 className={css["attribute-title"]}>Free Delivery Worldwide</h3>
          <span className={css["attribute-desc"]}>Available everywhere</span>
        </div>
        <div className={css["attribute"]}>
          <AutorenewIcon
            sx={{
              fontSize: "4.5rem",
            }}
          />
          <h3 className={css["attribute-title"]}>Returns</h3>
          <span className={css["attribute-desc"]}>Return goods in 30 days</span>
        </div>
        <div className={css["attribute"]}>
          <CreditCardIcon
            sx={{
              fontSize: "4.5rem",
            }}
          />
          <h3 className={css["attribute-title"]}>Secured Payment</h3>
          <span className={css["attribute-desc"]}>Shop safely</span>
        </div>
      </div>
    </div>
  );
};

export default HomeAttributes;
