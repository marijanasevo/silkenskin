import ActionTile from "../../components/action-tile/action-tile.component";
import css from "./order-made.module.css";

const OrderMade = () => {
  return (
    <div className={"page-container"}>
      <h1 className="page-heading">Thank You</h1>
      <span className={css["note"]}>
        I wanted to take a moment to personally thank you for choosing to shop
        with us at Silken Skin Co! We're thrilled that you decided to trust us
        with your skincare needs, and we hope that you'll be absolutely
        delighted with your purchase.
      </span>

      <div className={css["action-tiles-container"]}>
        <ActionTile
          title="Shop"
          subtitle="Continue Shopping"
          icon="bag"
          link="/shop"
          iconSize="4"
        />
        <ActionTile
          title="FAQs"
          subtitle="Check out FAQs page"
          icon="question"
          link="/shop"
          iconSize="4"
        />
        <ActionTile
          title="Contact"
          subtitle="Reach out to us"
          icon="phone"
          link="/shop"
          iconSize="4"
        />
      </div>
    </div>
  );
};

export default OrderMade;
