import { useContext, useRef, useEffect } from "react";
import { CartContext } from "../../contexts/cart.context";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as ShoppingBagSvg } from "../../assets/cart-bag.svg";
import css from './cart-icon.module.css';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const dropdownMenuRef = useRef(null);

  useEffect(() => {
    const toggleIsCartOpen = (event) => {
      if (
        !isCartOpen
        && dropdownMenuRef.current.contains(event.target)
         ) {
          setIsCartOpen(true);
      } else if (
        isCartOpen
        && !dropdownMenuRef.current.contains(event.target)
        || event.target instanceof SVGElement
      ) {
          setIsCartOpen(false)
      }
    }

    document.addEventListener('click', toggleIsCartOpen);

    return() => document.removeEventListener('click', toggleIsCartOpen);
  }, [isCartOpen]);


  return (
    <div ref={dropdownMenuRef} className={css["cart-icon-container"]}>
      <ShoppingBagSvg className={css['shopping-icon']} />
      <span className={css['item-count']}>10</span>
      { isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;