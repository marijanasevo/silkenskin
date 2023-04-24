import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsCategoriesEmpty,
} from "../../store/category/category.selector";
import { selectIsReviewsEmpty } from "../../store/review/review.selector";

import { fetchReviewsAsync } from "../../store/review/review.reducer";
import { fetchCategoriesAsync } from "../../store/category/category.reducer";

import ProductSlider from "../../components/product-slider/product-slider.component";
import ProductInfo from "../../components/product-info/product-info.component";
import ProductReviewsSection from "../../components/product-reviews-section/product-reviews-section.component";

import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";
import css from "./product.module.css";

const Product = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useDispatch<AppDispatch>();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isCategoriesEmpty = useSelector(selectIsCategoriesEmpty);
  const isReviewsEmpty = useSelector(selectIsReviewsEmpty);
  const [product, setProduct] = useState<CategoryItem>();

  useEffect(() => {
    if (isCategoriesEmpty) {
      dispatch(fetchCategoriesAsync());
    }
  }, []);

  useEffect(() => {
    if (isReviewsEmpty) {
      dispatch(fetchReviewsAsync());
    }
  }, []);

  useEffect(() => {
    const currentProduct = Object.values(categoriesMap)
      .flat()
      .find((product) => product.id === Number(id));

    setProduct(currentProduct);
  }, [id, categoriesMap]);

  return (
    <div className={css["item-main"]}>
      <ProductSlider product={product} />
      <ProductInfo product={product} />
      <ProductReviewsSection />
    </div>
  );
};

export default Product;
