import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as ShoppingBagSvg } from "../../assets/cart-bag.svg";
import css from './cart-icon.module.css';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const cartContainerRef = useRef(null);

  const closeCartDropdownOnOutsideClick = (event) => {
    if (!cartContainerRef.current.contains(event.target))  {
      setIsCartOpen(false);
    }
  }

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener(
        "mousedown", 
        closeCartDropdownOnOutsideClick
      );
    } else {
      document.removeEventListener(
        "mousedown", 
        closeCartDropdownOnOutsideClick
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown", 
        closeCartDropdownOnOutsideClick
      );
    };
  }, [isCartOpen]);

  const toggleCartDropdown = (event) => {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <div 
      ref={cartContainerRef} 
      className={css["cart-icon-container"]}
    >
      <ShoppingBagSvg 
        className={css['shopping-icon'] + ' icon'} 
        onClick={toggleCartDropdown}
      />
      <span className={css['item-count']}>{ cartCount }</span>
      { isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;