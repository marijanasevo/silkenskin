import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";
import Spinner from "../../components/spinner/spinner.component";

import ShopFilterOptions, {
  SortByPriceState,
} from "../../components/shop-filter-options/shop-filter-options.component";
import ProductCard from "../../components/product-card/product-card.component";

import css from "./shop.module.css";

import { CategoryItem } from "../../store/category/category.types";
import { applyFilters } from "./apply-filters";

export type Filters = {
  productProperties?: string[];
  targets?: string[];
  suited?: string;
  brand?: string;
  sort?: SortByPriceState;
  newArrival?: boolean;
};

const Shop = () => {
  let { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [productsToShow, setProductsToShow] = useState<CategoryItem[]>([]);
  const [filters, setFilters] = useState<Filters>({
    productProperties: [],
    targets: [],
    suited: "",
    brand: "",
    sort: "",
  });

  useEffect(() => {
    let newProductsToShoW = applyFilters(categoriesMap, filters, category);
    setProductsToShow(newProductsToShoW);
  }, [category, categoriesMap, filters]);

  return (
    <>
      <h1 className={"page-heading"}>Shop</h1>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <ShopFilterOptions filters={filters} setFilters={setFilters} />

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
