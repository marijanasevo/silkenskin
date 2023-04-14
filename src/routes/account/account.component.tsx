import { Link, useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import css from "./account.module.css";

const Account = () => {
  const navigate = useNavigate();

  const signOutHandler = async () => {
    await signOutUser();
    navigate("/");
  };

  return (
    <>
      <h1 className="page-heading">Your Account</h1>
      <div className={css["account-container"]}>
        <ul className={css["account-menu"]}>
          <li className={css["account-menu-item"]}>Orders</li>
          <li className={css["account-menu-item"] + " " + css["settings"]}>
            Settings
          </li>
          <li
            onClick={signOutHandler}
            className={css["account-menu-item"] + " " + css["sign-out"]}
          >
            Sign Out
          </li>
        </ul>
        <div className={css["account-content"]}>
          <div className={css["order-table"]}>
            <div className={css["order-table-header"]}>
              <span>Order #</span>
              <span>Total</span>
              <span>Order Date</span>
              <span>Status</span>
              <span></span>
            </div>

            <div className={css["order-table-row"]}>
              <span>#000001</span>
              <span>$500</span>
              <span>Apr 04, 2023</span>
              <span>Processing</span>
              <span>↓</span>
            </div>

            <div className={css["order-table-row"]}>
              <span>#000002</span>
              <span>$700</span>
              <span>May 18, 2023</span>
              <span>Processing</span>
              <span>↓</span>
            </div>
          </div>

          {/* We're starting to think you're secretly a skincare expert - you haven't ordered anything from us yet! */}
        </div>
      </div>
    </>
  );
};

export default Account;
