import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import css from "./cart-dropdown.module.css";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => navigate("/checkout");

  return (
    <>
      <div className={css["triangle"]}></div>
      <div className={css["cart-dropdown-container"]}>
        <div className={css["cart-items"]}>
          {cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler} buttonType={"transparentBg"}>
          Go To Checkout
        </Button>
      </div>
    </>
  );
};

export default CartDropdown;
