import { useDispatch, useSelector } from "react-redux";

import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
  selectIsCartEmpty,
} from "../../store/cart/cart.selector";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

import css from "./checkout.module.css";
import PaymentForm from "../../components/payment-form/payment-form.component";

const Checkout = () => {
  const dispatch = useDispatch();
  const cartCount = useSelector(selectCartCount);
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const isCartEmpty = useSelector(selectIsCartEmpty);

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
        {isCartEmpty ? (
          <div className={css["empty-cart-note"]}>
            Your skincare routine must be on point already <br /> - your cart is
            empty!
          </div>
        ) : (
          cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))
        )}
      </div>

      <PaymentForm />
    </div>
  );
};

export default Checkout;
