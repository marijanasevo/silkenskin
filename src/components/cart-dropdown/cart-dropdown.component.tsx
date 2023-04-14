import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import css from "./cart-dropdown.module.css";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
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
