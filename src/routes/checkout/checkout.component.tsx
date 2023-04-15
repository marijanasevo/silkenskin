import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import css from "./checkout.module.css";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <div className={css["checkout-container"]}>
      <h1 className="page-heading">Checkout</h1>

      <div className={css["cart-heading-details"]}>
        <span className={css["number-of-items"]}>
          <span className={css["accent-detail"]}>
            {" "}
            {cartCount}
            {cartCount === 1 ? ` item ` : ` items `}
          </span>
          in your cart
        </span>
        <span className={css["price"]}>
          Total
          <span className={css["accent-detail"]}>
            ${cartTotal.toLocaleString()}
          </span>
        </span>
      </div>

      <div className={css["checkout-items-container"]}>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
