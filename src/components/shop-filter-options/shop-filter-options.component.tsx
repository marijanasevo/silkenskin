import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

import { getFilterOptions } from "./getFilterOptions";

import CategoryFilters from "../category-filters/category-filters.component";
import FilterGroup from "../filter-group/filter-group.component";
import TuneIcon from "@mui/icons-material/Tune";
import SortIcon from "@mui/icons-material/Sort";

import { Filters } from "../../routes/shop/shop.component";
import css from "./shop-filter-options.module.css";

export type ShopFiltersProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export type FilterOptions = {
  suited: string[];
  productProperties: string[];
  targets: string[];
  brand: string[];
};

export type SortByPriceState = "" | "lowest" | "highest";

const ShopFilterOptions = ({ filters, setFilters }: ShopFiltersProps) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [sortByPrice, setSortByPrice] = useState<SortByPriceState>("");
  const [isFiltersEmpty, setIsFiltersEmpty] = useState<boolean>(true);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    suited: [],
    productProperties: [],
    targets: [],
    brand: [],
  });

  useEffect(() => {
    const options = getFilterOptions(categoriesMap);
    setFilterOptions(options);
  }, [categoriesMap]);

  useEffect(() => {
    setFilters({ ...filters, sort: sortByPrice });
  }, [sortByPrice]);

  useEffect(() => {
    const newIsFiltersEmpty = () => {
      const { productProperties, targets, suited, brand } = filters;
      return (
        !productProperties?.length && !targets?.length && !suited && !brand
      );
    };

    setIsFiltersEmpty(newIsFiltersEmpty);
  }, [filters]);

  const toggleFiltersExpanded = () => {
    setFiltersExpanded(!filtersExpanded);
  };

  const toggleSort = () => {
    const sortNextState: SortByPriceState =
      sortByPrice === "" ? "lowest" : sortByPrice === "lowest" ? "highest" : "";
    setSortByPrice(sortNextState);
  };

  return (
    <div className={css["filters"]}>
      <CategoryFilters />

      <div className={css["filters-menu"]}>
        <span
          onClick={toggleFiltersExpanded}
          className={`${css["filters-filters"]} ${css["filter-icons"]} ${
            isFiltersEmpty ? "" : css["filters-active"]
          }`}
        >
          <TuneIcon className={`${css["filter-icons"]}`} />
          Filters
        </span>

        <span
          onClick={toggleSort}
          className={`${css["filters-sort"]} ${
            sortByPrice === ""
              ? ""
              : sortByPrice === "lowest"
              ? css["price-lowest"]
              : css["price-highest"]
          }`}
        >
          Sort by price
          <SortIcon className={css["filter-icons"]} />
        </span>
      </div>

      <div
        className={`${css["filters-body"]} ${
          filtersExpanded ? css["expanded"] : ""
        }`}
      >
        <form className={css["filters-form"]}>
          <div
            className={`${css["filters-container"]} ${
              filtersExpanded ? css["displayed-filters"] : ""
            }`}
          >
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={filterOptions.targets}
              filterGroup="targets"
            />
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={filterOptions.productProperties}
              filterGroup="productProperties"
            />
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={filterOptions.suited}
              filterGroup="suited"
            />
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={filterOptions.brand}
              filterGroup="brand"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopFilterOptions;
