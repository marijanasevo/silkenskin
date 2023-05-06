import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/category/category.selector";

import { applyFilters } from "./apply-filters";

import Spinner from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";
import ShopFilterOptions, {
  SortByPriceState,
} from "../../components/shop-filter-options/shop-filter-options.component";
import { CategoryItem } from "../../store/category/category.types";

import css from "./shop.module.css";
import { navigateTo } from "../../utils/helpers/navigate";

export type Filters = {
  productProperties?: string[];
  targets?: string[];
  suited?: string;
  brand?: string;
  sort?: SortByPriceState;
  newArrival?: boolean;
};

const Shop = () => {
  const navigate = useNavigate();
  const handleNavigate = navigateTo(navigate);
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
    const categories = [
      "body-care",
      "masks",
      "mens",
      "moisturizers",
      "serums",
      "tools-&-accessories",
      undefined,
    ];

    if (!categories.includes(category)) handleNavigate("/404");

    let newProductsToShoW = applyFilters(categoriesMap, filters, category);
    setProductsToShow(newProductsToShoW);
  }, [category, categoriesMap, filters]);

  return (
    <div className={`${"page-container"}`}>
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
    </div>
  );
};

export default Shop;
