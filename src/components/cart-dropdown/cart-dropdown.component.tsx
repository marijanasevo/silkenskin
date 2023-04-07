import Button from '../button/button.component';
import css from './cart-dropdown.module.css';

const CartDropdown = () => {

  return (
    <>
      <div className={css['triangle']}></div>
      <div className={css['cart-dropdown-container']}>
        <div className={css["cart-items"]}></div>
        <Button buttonType={'basic'}>Go To Checkout</Button>
      </div>
    </>
  )
};

export default CartDropdown;