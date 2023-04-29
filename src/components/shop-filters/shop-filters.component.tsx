import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

import CategoryFilters from "../category-filters/category-filters.component";
import FilterGroup from "../filter-group/filter-group.component";
import TuneIcon from "@mui/icons-material/Tune";
import SortIcon from "@mui/icons-material/Sort";

import { Filters } from "../../routes/shop/shop.component";
import css from "./shop-filters.module.css";

export type ShopFiltersProps = {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
};

export type SortByPriceState = "" | "lowest" | "highest";

const ShopFilters = ({ filters, setFilters }: ShopFiltersProps) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [suitedOptions, setSuitedOptions] = useState<string[]>([]);
  const [propertiesOptions, setPropertiesOptions] = useState<string[]>([]);
  const [targetsOptions, setTargetsOptions] = useState<string[]>([]);
  const [brandOptions, setBrandOptions] = useState<string[]>([]);
  const [filtersExpanded, setFiltersExpanded] = useState(false);
  const [sortByPrice, setSortByPrice] = useState<SortByPriceState>("");
  const [isFiltersEmpty, setIsFiltersEmpty] = useState<boolean>(true);

  useEffect(() => {
    const suitedOptions = [
      ...Object.values(categoriesMap).reduce((acc, category) => {
        category.forEach((item) => acc.add(item.suited));
        return acc;
      }, new Set<string>()),
    ];

    setSuitedOptions(suitedOptions);
  }, [categoriesMap]);

  useEffect(() => {
    const propertiesOptions = [
      ...Object.values(categoriesMap).reduce((acc, category) => {
        category.forEach((product) => {
          product.productProperties.forEach((property) => {
            acc.add(property);
          });
        });
        return acc;
      }, new Set<string>()),
    ];

    setPropertiesOptions(propertiesOptions);
  }, [categoriesMap]);

  useEffect(() => {
    const targetOptions = [
      ...Object.values(categoriesMap).reduce((acc, category) => {
        category.forEach((product) => {
          product.targets?.forEach((target) => {
            acc.add(target);
          });
        });
        return acc;
      }, new Set<string>()),
    ];

    setTargetsOptions(targetOptions);
  }, [categoriesMap]);

  useEffect(() => {
    const brandOptions = [
      ...Object.values(categoriesMap).reduce((acc, category) => {
        category.forEach((product) => {
          acc.add(product.brand);
        });
        return acc;
      }, new Set<string>()),
    ];

    setBrandOptions(brandOptions);
  }, [categoriesMap]);

  useEffect(() => {
    setFilters({ ...filters, sort: sortByPrice });
  }, [sortByPrice]);

  useEffect(() => {
    const newIsFiltersEmpty = () => {
      const { productProperties, targets, suited, brand } = filters;
      return !productProperties.length && !targets.length && !suited && !brand;
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
              options={targetsOptions}
              filterGroup="targets"
            />
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={propertiesOptions}
              filterGroup="productProperties"
            />
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={suitedOptions}
              filterGroup="suited"
            />
            <FilterGroup
              filters={filters}
              setFilters={setFilters}
              options={brandOptions}
              filterGroup="brand"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShopFilters;
