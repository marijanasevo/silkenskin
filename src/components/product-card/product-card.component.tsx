import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

import css from "./product-card.module.css";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const { name, price, thumbnailUrl } = product;

  const addProductToCartHandler = () =>
    dispatch(addItemToCart(cartItems, product));

  return (
    <div className={css["product"]}>
      <img className={css["product__image"]} src={thumbnailUrl} alt={name} />
      <div className={css["product__details"]}>
        <h3 className={css["product__details__title"]}>{name}</h3>
        <span className={css["product__details__price"]}>{price}</span>
        <p className={css["product__details__desc"]}>For dry skin</p>
        <button
          onClick={addProductToCartHandler}
          className={css["product__details__button"]}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
