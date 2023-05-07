import ActionTile from "../../components/action-tile/action-tile.component";
import css from "./account-created.module.css";

const AccountCreated = () => {
  return (
    <div className={"page-container"}>
      <h1 className="page-heading">Your Account is all set</h1>
      <span className={css["note"]}>
        Thank you for creating an account with us! We are thrilled to have you
        join our community. Our team is dedicated to providing you with the best
        customer service possible and ensuring that your shopping journey with
        us is enjoyable and hassle-free. Happy shopping!
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

export default AccountCreated;
