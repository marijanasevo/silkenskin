import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCategoriesMap,
  selectIsCategoriesEmpty,
} from "../../store/category/category.selector";
import { selectIsReviewsEmpty } from "../../store/review/review.selector";

import { fetchReviewsAsync } from "../../store/review/review.reducer";
import { fetchCategoriesAsync } from "../../store/category/category.reducer";

import { navigateTo } from "../../utils/helpers/navigate";

import ProductSideImages from "../../components/product-side-images/product-side-images.component";
import ProductSlider from "../../components/product-slider/product-slider.component";
import ProductInfo from "../../components/product-info/product-info.component";
import ProductReviewsSection from "../../components/product-reviews-section/product-reviews-section.component";

import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";
import css from "./product.module.css";

const Product = () => {
  const { id } = useParams() as { id: string };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
  const categoriesMap = useSelector(selectCategoriesMap);
  const isCategoriesEmpty = useSelector(selectIsCategoriesEmpty);
  const isReviewsEmpty = useSelector(selectIsReviewsEmpty);
  const [product, setProduct] = useState<CategoryItem>();
  const [isMobile, setIsMobile] = useState(true);

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

    console.log(categoriesMap);

    if (!currentProduct && Object.values(categoriesMap).length)
      handleNavigate("/404");
    setProduct(currentProduct);
  }, [id, categoriesMap]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 800) setIsMobile(true);
      else setIsMobile(false);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`${css["product-container"]} ${
        isMobile ? css["smaller-screen"] : ""
      }`}
    >
      <div className={!isMobile ? css["about-product"] : ""}>
        {isMobile ? (
          <ProductSlider product={product} />
        ) : (
          <ProductSideImages product={product} />
        )}
        <ProductInfo product={product} isMobile={isMobile} />
      </div>
      <ProductReviewsSection isMobile={isMobile} />
    </div>
  );
};

export default Product;

// sredi product i abnout page
