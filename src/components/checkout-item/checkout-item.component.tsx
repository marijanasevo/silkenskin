import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { navigateTo } from "../../utils/helpers/navigate";

import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.reducer";

import { CartItem } from "../../store/cart/cart.types";
import css from "./checkout-item.module.css";

type CheckoutItemProps = {
  cartItem: CartItem;
};

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);

  const increaseProductCountHandler = () => dispatch(addItemToCart(cartItem));
  const decreaseProductCountHandler = () =>
    dispatch(removeItemFromCart(cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItem));

  const { name, quantity, thumbnailUrl, suited, price } = cartItem;

  let cost;

  useEffect(() => {
    cost = quantity * price;
  }, [quantity, price]);

  return (
    <div className={css["checkout-item-container"]}>
      <img
        onClick={() => handleNavigate(`/product/${cartItem.id}`)}
        className={css["thumbnail"]}
        src={thumbnailUrl}
        alt={name}
      />

      <div className={css["description"]}>
        <h2 className={css["title"]}>{name}</h2>
        <span className={css["suited"]}>{suited}</span>
        <span className={`${css["price"]} ${css["individual-price"]}`}>
          <span className={css["currency"]}>$</span>
          {price}
        </span>
      </div>

      <div className={css["quantity"]}>
        <span className={css["arrow"]} onClick={decreaseProductCountHandler}>
          &#10094;
        </span>

        <span> {quantity} </span>

        <span className={css["arrow"]} onClick={increaseProductCountHandler}>
          &#10095;
        </span>
      </div>

      <div className={`${css["total-price"]}`}>
        <span className={`${css["price"]}`}>
          <span className={css["currency"]}>$</span>
          {(price * quantity).toLocaleString()}
        </span>

        <span onClick={clearItemHandler} className={css["clear-item"]}>
          &#10005;
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
