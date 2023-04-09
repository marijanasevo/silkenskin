import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import css from './checkout.module.css';

const Checkout = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <>
      <h1 className='page-heading'>Checkout</h1>
      <div className={css['checkout-items-container']}>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
    </>
  )
};

export default Checkout;