import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useParams } from "react-router-dom";

import {
  selectCategoriesMap,
  selectIsCategoriesEmpty,
} from "../../store/category/category.selector";

import { fetchCategoriesAsync } from "../../store/category/category.reducer";
import { addItemToCart } from "../../store/cart/cart.reducer";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import Button, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/button.component";

import { AppDispatch } from "../../store/store";
import { CategoryItem } from "../../store/category/category.types";
import css from "./product.module.css";

const carouselSettings = {
  className: "center",
  centerMode: true,
  centerPadding: "60px",
  infinite: true,
  slidesToShow: 1,
  speed: 300,
  adaptiveHeight: true,
  dots: false,
};

const defaultReviewFields = {
  rating: 0,
  formReview: "",
};

const Product = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isCategoriesEmpty = useSelector(selectIsCategoriesEmpty);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [product, setProduct] = useState<CategoryItem>();
  const { id } = useParams();
  const [formFields, setFormFields] = useState(defaultReviewFields);
  const { rating, formReview } = formFields;
  const [value, setValue] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const addProductToCartHandler = () => dispatch(addItemToCart(product));

  useEffect(() => {
    if (isCategoriesEmpty) {
      dispatch(fetchCategoriesAsync());
    }
  }, []);

  useEffect(() => {
    const currentProduct = Object.values(categoriesMap)
      .flat()
      .find((product) => product.id === Number(id));

    setProduct(currentProduct);
  }, [id, categoriesMap]);
  console.log(product, value);

  return (
    <>
      <div className={css["item-main"]}>
        <div className={`${css["item-visual"]}`}>
          {product?.gallery.length && (
            <Slider {...carouselSettings}>
              {product?.gallery?.map((imageSource) => (
                <div className={css["item-image-container"]} key={product.id}>
                  <img
                    className={css["item-image"]}
                    alt={product.name}
                    src={imageSource}
                  />
                </div>
              ))}
            </Slider>
          )}
        </div>

        <div className={css["item-description"]}>
          <div className={css["item-heading"]}>
            <h1 className={css["item-name"]}>
              <span className={css["item-brand"]}>{product?.brand}</span>
              {product?.name}
            </h1>
            <div className={css["item-rating"]}>
              <Rating
                name="text-feedback"
                value={product?.averageStars ?? 0}
                readOnly
                precision={0.1}
                emptyIcon={
                  <StarIcon sx={{ opacity: 0.55 }} fontSize="inherit" />
                }
                sx={{ color: "#333" }}
              />

              <span>{product?.numberOfReviews}</span>
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
              className={
                css["item-ingredients"] + " " + css["item-desc-section"]
              }
            >
              <h3 className={css["item-subtitle"]}>Ingredients:</h3>
              {product?.ingredientsList.map((ingredient, i) => (
                <span className={css["item-ingredient"]} key={ingredient}>
                  {i === 0 ? ingredient : `, ${ingredient}`}
                </span>
              ))}
            </div>
            <div
              className={css["item-targets"] + " " + css["item-desc-section"]}
            >
              <h3 className={css["item-subtitle"]}>Targets</h3>
              {product?.targets.map((target, i) => (
                <span className={css["item-target"]} key={target}>
                  {i === 0 ? target : `, ${target}`}
                </span>
              ))}
            </div>
            <div
              className={css["item-suited-to"] + " " + css["item-desc-section"]}
            >
              <h3 className={css["item-subtitle"]}>Suited to</h3>
              {product?.suited}
            </div>

            <div className={css["item-properties"]}>
              {product?.productProperties.map((prop) => (
                <div className={css["item-property"]}>
                  <span className={css["item-property-name"]}>
                    {prop.toLowerCase()}
                  </span>
                  <span className={css["item-property-check"]}>&#10003;</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={css["reviews-section"]}>
          <h2 className={css["reviews-heading"]}>Review</h2>

          <Box
            component="form"
            noValidate
            autoComplete="off"
            className={css["form-review"]}
            sx={{
              marginTop: "-3rem",
            }}
          >
            <TextField
              id="standard-textarea"
              label="Your experience"
              multiline
              variant="standard"
              onChange={handleChange}
              name="formReview"
              value={formReview}
              sx={{
                "&.MuiTextField-root": {
                  margin: "0",
                },
                "& .Mui-focused.MuiInputLabel-root": {
                  color: "var(--strong-accent-color)",
                  fontSize: "1.9rem",
                  top: "-0.5rem",
                },
                "& .MuiInputLabel-shrink": {
                  top: "-0.5rem",
                  fontSize: "1.9rem",
                  color: "var(--strong-accent-color)",
                },
                "& .MuiInputLabel-root": {
                  fontSize: "1.5rem",
                  color: "var(--strong-accent-color)",
                },
                "& .MuiInputBase-root::before": {
                  borderBottom: "0 !important",
                },
                "& .MuiInputBase-inputMultiline": {
                  fontSize: "1.4rem",
                  padding: "1rem",
                  borderBottom:
                    "2px dashed var(--strong-accent-color) !important",
                  lineHeight: "130%",
                },
                "& .MuiInputBase-multiline.Mui-focused::before": {
                  fontSize: "1.4rem",
                  padding: "1rem",
                  borderBottom: "0",
                },
                "& .MuiInputBase-multiline.Mui-focused::after": {
                  fontSize: "1.4rem",
                  padding: "1rem",
                  borderBottom: "0",
                },
                "& .MuiInputBase-multiline:hover": {
                  borderBottom: "0 !important",
                },
              }}
            />

            <Rating
              sx={{
                "& .MuiRating-icon": {
                  color: "#a89565",
                },
              }}
              name="no-value"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              precision={0.5}
              size="large"
            />

            <Button buttonType={BUTTON_TYPE_CLASSES.basic}>
              Leave Feedback
            </Button>
          </Box>
          <div className={css["all-reviews"]}>
            {product?.reviews?.map((review, i) => (
              <div className={css["review"]} key={i}>
                <div className={css["review-header"]}>
                  <h3
                    className={css["review-title"] + " " + css["item-subtitle"]}
                  >
                    {review.title}
                  </h3>
                  <span className="review-date">June, 2020</span>
                </div>
                <div className="review-body">
                  <p>{review.comment}</p>
                </div>
                <div className={css["review-stars"]}>
                  <Rating
                    name="text-feedback"
                    value={review.stars ?? 0}
                    readOnly
                    precision={0.1}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                    sx={{ color: "var(--moderate-accent-color)" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
