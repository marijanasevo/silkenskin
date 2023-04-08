import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as ShoppingBagSvg } from "../../assets/cart-bag.svg";
import css from './cart-icon.module.css';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const dropdownMenuRef = useRef(null);

  const closeCartDropdownOnOutsideClick = (event) => {
    if (!dropdownMenuRef.current.contains(event.target)) setIsCartOpen(false);
  }

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", closeCartDropdownOnOutsideClick);
    } else {
      document.removeEventListener("mousedown", closeCartDropdownOnOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeCartDropdownOnOutsideClick);
    };
  }, [isCartOpen]);

  const toggleCartDropdown = () => setIsCartOpen(!isCartOpen);

  return (
    <div 
      ref={dropdownMenuRef} 
      className={css["cart-icon-container"]}
      onClick={toggleCartDropdown}
    >
      <ShoppingBagSvg className={css['shopping-icon']} />
      <span className={css['item-count']}>10</span>
      { isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;