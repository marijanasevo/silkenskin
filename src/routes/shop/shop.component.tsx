import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import { fetchCategoriesAsync } from "../../store/category/category.reducer";
import Spinner from "../../components/spinner/spinner.component";

import ShopCategories from "../../components/shop-categories/shop-categories.component";
import ProductCard from "../../components/product-card/product-card.component";

import css from "./shop.module.css";
import { CategoryItem } from "../../store/category/category.types";
import { AppDispatch } from "../../store/store";

const Shop = () => {
  const dispatch = useDispatch<AppDispatch>();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);

  let { category } = useParams();
  const [productsToShow, setProductsToShow] = useState<CategoryItem[]>([]);

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, []);

  useEffect(() => {
    const filteredProducts =
      category === undefined
        ? Object.values(categoriesMap).flat()
        : Array.from(categoriesMap[category?.replace(/-/g, " ")] || []);

    setProductsToShow(filteredProducts);
  }, [category, categoriesMap]);

  return (
    <>
      <h1 className={"page-heading"}>Shop</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ShopCategories />

          <div className={css["products"]}>
            {productsToShow.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Shop;
