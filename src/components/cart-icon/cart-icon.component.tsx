import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.reducer";

import Icon from "../icon/icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import css from "./cart-icon.module.css";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const cartContainerRef = useRef<HTMLDivElement>(null);

  const closeCartDropdownOnOutsideClick = (event: MouseEvent) => {
    if (!cartContainerRef.current?.contains(event.target as Node)) {
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

  const toggleCartDropdown = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    dispatch(setIsCartOpen(!isCartOpen));
  };

  return (
    <div ref={cartContainerRef} className={css["cart-icon-container"]}>
      <Icon iconSize={2.5} icon={"bag"} onClick={toggleCartDropdown} />
      <span className={css["item-count"]}>{cartCount}</span>
      {isCartOpen && <CartDropdown />}
    </div>
  );
};

export default CartIcon;
