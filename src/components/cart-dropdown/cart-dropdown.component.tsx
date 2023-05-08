import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCartItems,
  selectIsCartEmpty,
} from "../../store/cart/cart.selector";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import CartDropdownItem from "../cart-dropdown-item/cart-dropdown-item.component";
import empty from "../../assets/empty.gif";
import css from "./cart-dropdown.module.css";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  const IsCartEmpty = useSelector(selectIsCartEmpty);

  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <>
      <div className={css["triangle"]}></div>
      <div className={css["cart-dropdown-container"]}>
        <div className={css["cart-items"]}>
          {!IsCartEmpty ? (
            cartItems.map((cartItem) => (
              <CartDropdownItem key={cartItem.id} cartItem={cartItem} />
            ))
          ) : (
            <div className={css["empty-cart-message"]}>
              <img src={empty} alt="Empty cart gif" />
              There is nothing to see.
              <br /> Your cart is empty.
            </div>
          )}
        </div>
        <Button
          onClick={goToCheckoutHandler}
          buttonType={BUTTON_TYPE_CLASSES.transparentBg}
        >
          Go To Checkout
        </Button>
      </div>
    </>
  );
};

export default CartDropdown;
