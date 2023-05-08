import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectReviews } from "../../store/review/review.selector";

import css from "./account.module.css";
import { useEffect } from "react";
import OrderHistory from "../../components/order-history/order-history.component";
import { navigateTo } from "../../utils/helpers/navigate";

const Account = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (!currentUser) handleNavigate("/login");
  }, [currentUser]);

  const signOutHandler = async () => {
    await signOutUser();
    handleNavigate("/login");
  };

  return (
    <div className={`page-container`}>
      <h1 className="page-heading">Hi, {currentUser?.displayName}</h1>
      <div className={css["account-container"]}>
        <ul className={css["account-menu"]}>
          <li className={css["account-menu-item"]}>My Orders</li>
          <li
            onClick={signOutHandler}
            className={css["account-menu-item"] + " " + css["sign-out"]}
          >
            Sign Out
          </li>
        </ul>

        <div className={css["account-content"]}>
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default Account;
