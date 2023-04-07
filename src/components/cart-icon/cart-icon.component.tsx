import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as ShoppingBagSvg } from "../../assets/cart-bag.svg";
import css from './cart-icon.module.css';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div onClick={toggleIsCartOpen} className={css["cart-icon-container"]}>
      <ShoppingBagSvg className={css['shopping-icon']} />
      <span className={css['item-count']}>10</span>
      { isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;