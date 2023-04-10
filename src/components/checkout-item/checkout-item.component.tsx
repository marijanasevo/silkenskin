import { useContext, useEffect } from 'react';
import { CartContext } from '../../contexts/cart.context';

import css from './checkout-item.module.css';

const CheckoutItem = ({ cartItem }) => {
  const { 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart
  } = useContext(CartContext);

  const increaseProductCountHandler = () => addItemToCart(cartItem);
  const decreaseProductCountHandler = () => removeItemFromCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

  const { name, quantity, thumbnailUrl, suited, price } = cartItem;
  
  let cost;

  useEffect(() => {
    cost = quantity * price;
  }, [quantity, price]);

  return (
  <div className={css['checkout-item-container']}>
    <img 
      className={css['thumbnail']} 
      src={thumbnailUrl} 
      alt={name} 
    />

    <div className={css["description"]}>
      <h2 className={css['title']}>{ name }</h2>
      <span className={css["suited"]}>{suited}</span>
      <span className={css["price"]}>
        <span className={css['currency']}>$</span>
        {price}
      </span>
    </div>

    <div className={css["quantity"]}>
      <span 
        className={css['arrow']} 
        onClick={decreaseProductCountHandler}
      >&#10094;</span>

      <span> { quantity } </span>

      <span 
        className={css['arrow']} 
        onClick={increaseProductCountHandler}
      >&#10095;</span>
    </div>

    <div className={css["total-price"]}>
      <span className={css["price"]}>
        <span className={css['currency']}>$</span>
        { (price * quantity).toLocaleString() }
      </span>

      <span 
        onClick={clearItemHandler} 
        className={css["clear-item"]}
      >&#10005;</span>
    </div>
  </div>
  )
};

export default CheckoutItem;