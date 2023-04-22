import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { addItemToCart } from "../../store/cart/cart.reducer";
import { CategoryItem } from "../../store/category/category.types";

import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import css from "./product-card.module.css";

type ProductCardProps = {
  product: CategoryItem;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useDispatch();

  const { name, price, thumbnailUrl } = product;

  const addProductToCartHandler = () => dispatch(addItemToCart(product));

  return (
    <div className={css["product"]}>
      <img className={css["product__image"]} src={thumbnailUrl} alt={name} />
      <div className={css["product__details"]}>
        <h3 className={css["product__details__title"]}>
          <Link to={`/product/${product.id}`}>{name}</Link>
        </h3>
        <span className={css["product__details__price"]}>${price}</span>
        <p className={css["product__details__desc"]}>For dry skin</p>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCartHandler}
        >
          ADD TO BAG
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
