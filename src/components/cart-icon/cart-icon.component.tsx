import { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.action";

import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as ShoppingBagSvg } from "../../assets/cart-bag.svg";
import css from "./cart-icon.module.css";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const cartContainerRef = useRef(null);

  const closeCartDropdownOnOutsideClick = (event) => {
    if (!cartContainerRef.current.contains(event.target)) {
      dispatch(setIsCartOpen(false));
    }
  };

  useEffect(() => {
    if (isCartOpen) {
      document.addEventListener("mousedown", closeCartDropdownOnOutsideClick);
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
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div ref={cartContainerRef} className={css["cart-icon-container"]}>
      <ShoppingBagSvg
        className={css["shopping-icon"] + " icon"}
        onClick={toggleCartDropdown}
      />
      <span className={css["item-count"]}>{cartCount}</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;
