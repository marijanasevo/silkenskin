import { ReactComponent as BagSvg } from "../../assets/cart-bag.svg";
import css from './cart-icon.module.css';

const CartIcon = () => {
  return (
    <BagSvg className={css['cart-icon']} />
  );
};

export default CartIcon;