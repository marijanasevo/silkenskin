import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";

import ShopCategories from "../../components/shop-categories/shop-categories.component";
import ProductCard from "../../components/product-card/product-card.component";

import css from "./shop.module.css";

import { CategoryItem } from "../../store/category/category.types";

export type Filters = {
  productProperties: string[];
  targets: string[];
  suited: string;
};

const Shop = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [filters, setFilters] = useState<Filters>({
    productProperties: [],
    targets: [],
    suited: "",
  });

  let { category } = useParams();
  const [productsToShow, setProductsToShow] = useState<CategoryItem[]>([]);

  useEffect(() => {
    let categoryProductsToShoW =
      category === undefined
        ? Object.values(categoriesMap).flat()
        : Array.from(categoriesMap[category?.replace(/-/g, " ")] || []);

    if (filters.productProperties) {
      categoryProductsToShoW = categoryProductsToShoW.filter((product) =>
        filters.productProperties.every((prop) =>
          product.productProperties.includes(prop)
        )
      );
    }

    if (filters.targets) {
      categoryProductsToShoW = categoryProductsToShoW.filter((product) =>
        filters.targets?.every((prop) => product.targets?.includes(prop))
      );
    }

    if (filters.suited) {
      categoryProductsToShoW = categoryProductsToShoW.filter(
        (product) => filters.suited === product.suited
      );
    }

    console.log("productsToShow", categoryProductsToShoW, "filters", filters);
    setProductsToShow(categoryProductsToShoW);
  }, [category, categoriesMap, filters]);

  return (
    <>
      <h1 className={"page-heading"}>Shop</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ShopCategories filters={filters} setFilters={setFilters} />

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
