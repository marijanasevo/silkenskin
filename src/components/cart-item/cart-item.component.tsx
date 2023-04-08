import css from './cart-item.module.css';

const CartItem = ({ cartItem }) => {
  const { 
    name, 
    quantity, 
    thumbnailUrl, 
    price 
  } = cartItem;
  
  return (
    <div className={css['cart-item-container']}>
      <img src={thumbnailUrl} alt={name} className={css['cart-item-thumbnail']} />
      <div className={css['cart-item-details']}>
        <h2 className={css['cart-item-title']}>{ name }</h2>
        <span className={css["cart-item-price-quantity"]}>
          { quantity } x ${ price }
        </span>
      </div>
    </div>
  )
};

export default CartItem;