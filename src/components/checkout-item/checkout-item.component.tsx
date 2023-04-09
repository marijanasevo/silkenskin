import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import css from './checkout-item.module.css';

const CheckoutItem = ({ cartItem }) => {
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);

  const increaseProductCountHandler = () => addItemToCart(cartItem);
  const decreaseProductCountHandler = () => removeItemFromCart(cartItem);

  const { name, quantity } = cartItem;

  return (
  <div>
    <h2>{ name }</h2>
    <div>{ quantity }</div>
    <span onClick={decreaseProductCountHandler}>Decrement</span>
    <br/>
    <span onClick={increaseProductCountHandler}>Increment</span>
  </div>
  )
};

export default CheckoutItem;