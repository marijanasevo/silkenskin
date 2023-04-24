import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectProductAverageStars,
  selectProductReviews,
} from "../../store/review/review.selector";
import { addItemToCart } from "../../store/cart/cart.reducer";

import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";

import css from "./product-info.module.css";

type ProductInfoProps = {
  product: CategoryItem | undefined;
};

const ProductInfo = ({ product }: ProductInfoProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { id: productID } = useParams() as { id: string };
  const reviews = useSelector(selectProductReviews(productID));
  const productAverageStars = useSelector(selectProductAverageStars(productID));

  const addProductToCartHandler = () => dispatch(addItemToCart(product));
  console.log(productAverageStars, reviews);

  return (
    <div className={css["item-description"]}>
      <div className={css["item-heading"]}>
        <h1 className={css["item-name"]}>
          <span className={css["item-brand"]}>{product?.brand}</span>
          {product?.name}
        </h1>
        <div className={css["item-rating"]}>
          <Rating
            name="text-feedback"
            value={productAverageStars}
            readOnly
            precision={0.1}
            emptyIcon={<StarIcon sx={{ opacity: 0.55 }} fontSize="inherit" />}
            sx={{ color: "#333" }}
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
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCartHandler}
        >
          ADD TO BAG
        </Button>

        <div
          className={css["item-ingredients"] + " " + css["item-desc-section"]}
        >
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
    </div>
  );
};

export default ProductInfo;
