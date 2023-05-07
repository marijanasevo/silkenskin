import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  addToWishlist,
  removeFromWishlist,
} from "../../store/wishlist/wishlist.reducer";
import { addItemToCart } from "../../store/cart/cart.reducer";
import {
  selectProductAverageStars,
  selectProductReviews,
} from "../../store/review/review.selector";
import { selectIsProductInWishlist } from "../../store/wishlist/wishlist.selector";

import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";

import css from "./product-info.module.css";

type ProductInfoProps = {
  product: CategoryItem | undefined;
  isMobile: boolean;
};

const ProductInfo = ({ product, isMobile }: ProductInfoProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id: productID } = useParams() as { id: string };
  const reviews = useSelector(selectProductReviews(productID));
  const productAverageStars = useSelector(selectProductAverageStars(productID));
  const isProductInWishlist = useSelector(
    selectIsProductInWishlist(+productID)
  );

  const addProductToCartHandler = () => dispatch(addItemToCart(product));

  const addProductToWishlistHandler = () => {
    dispatch(addToWishlist(+productID));
  };

  const removeProductToWishlistHandler = () => {
    dispatch(removeFromWishlist(+productID));
  };

  return (
    <div
      className={`${css["item-description"]} ${
        isMobile ? css["smaller-screen"] : ""
      }`}
    >
      <h1 className={css["item-title"]}>
        <span className={css["item-brand"]}>{product?.brand}</span>
        {product?.name}
      </h1>
      <div className={css["item-rating"]}>
        <Rating
          name="text-feedback"
          value={productAverageStars}
          readOnly
          className={css["full-stars"]}
          precision={0.1}
          emptyIcon={<StarIcon className={css["empty-stars"]} />}
        />

        <span>
          ({reviews.length} {reviews.length !== 1 ? "reviews" : "review"})
        </span>
      </div>

      <div className={css["price-and-volume"]}>
        <div className={css["item-price"]}>${product?.price}</div>
        <div className={css["item-volume"]}>{product?.volume}</div>
      </div>
      <p className={css["item-desc-text"]}>{product?.description}</p>
      <div className={css["item-grouped-buttons"]}>
        <Button
          buttonType={BUTTON_TYPE_CLASSES.basic}
          onClick={addProductToCartHandler}
        >
          ADD TO BAG
        </Button>
        {isProductInWishlist ? (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.basic}
            onClick={removeProductToWishlistHandler}
          >
            REMOVE FROM YOUR WISH LIST
          </Button>
        ) : (
          <Button
            buttonType={BUTTON_TYPE_CLASSES.basic}
            onClick={addProductToWishlistHandler}
          >
            ADD TO YOUR WISH LIST
          </Button>
        )}
      </div>

      <div className={css["item-ingredients"] + " " + css["item-desc-section"]}>
        <h3 className={css["item-subtitle"]}>Ingredients:</h3>
        {product?.ingredientsList.map((ingredient, i) => (
          <span className={css["item-ingredient"]} key={ingredient}>
            {i === 0 ? ingredient : `, ${ingredient}`}
          </span>
        ))}
      </div>
      <div className={css["item-targets"] + " " + css["item-desc-section"]}>
        <h3 className={css["item-subtitle"]}>Targets</h3>
        {product?.targets.map((target, i) => (
          <span className={css["item-target"]} key={target}>
            {i === 0 ? target : `, ${target}`}
          </span>
        ))}
      </div>
      <div className={css["item-suited-to"] + " " + css["item-desc-section"]}>
        <h3 className={css["item-subtitle"]}>Suited to</h3>
        {product?.suited}
      </div>

      <div className={css["item-properties"]}>
        {product?.productProperties.map((prop) => (
          <div key={prop} className={css["item-property"]}>
            <span className={css["item-property-name"]}>
              {prop.toLowerCase()}
            </span>
            <span className={css["item-property-check"]}>&#10003;</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductInfo;
