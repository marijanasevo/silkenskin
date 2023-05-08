import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { navigateTo } from "../../utils/helpers/navigate";

import { addItemToCart } from "../../store/cart/cart.reducer";

import Button from "../button/button.component";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { CategoryItem } from "../../store/category/category.types";

import css from "./product-card.module.css";

type ProductCardProps = {
  product: CategoryItem;
  isInWishList?: boolean;
  onRemoveFromWishlist?: () => void;
};

const ProductCard = ({
  product,
  isInWishList = false,
  onRemoveFromWishlist,
}: ProductCardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);

  const { name, price, thumbnailUrl, suited } = product;

  const addProductToCartHandler = () => dispatch(addItemToCart(product));

  const removeFromWishlistHandler = () => {
    if (onRemoveFromWishlist) {
      onRemoveFromWishlist();
    }
  };

  return (
    <div className={`${css["product"]} product`}>
      <img className={css["product-image"]} src={thumbnailUrl} alt={name} />
      <div className={css["product-details"] + " product-details"}>
        <div className={css["product-details-title-price-group"]}>
          <h3
            onClick={() => handleNavigate(`/product/${product.id}`)}
            className={css["product-details-title"]}
          >
            {name}
          </h3>
          <span className={css["product-details-price"]}>${price}</span>
        </div>
        <p className={css["product-details-desc"]}>{suited}</p>
        {isInWishList ? (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.underlinedWishlist}
            onClick={removeFromWishlistHandler}
          >
            Remove from wishlist
          </Button>
        ) : (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.inverted}
            onClick={addProductToCartHandler}
          >
            ADD TO BAG
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
