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

const ShopFilters = ({ filters, setFilters }: ShopFiltersProps) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [suitedOptions, setSuitedOptions] = useState<string[]>([]);
  const [propertiesOptions, setPropertiesOptions] = useState<string[]>([]);
  const [targetsOptions, setTargetsOptions] = useState<string[]>([]);

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

  return (
    <div className={css["filters"]}>
      <CategoryFilters />

      <div className={css["filters-menu"]}>
        <span className={css["filters-filters"]}>
          <TuneIcon className={css["filter-icons"]} />
          Filters
        </span>

        <span className={css["filters-sort"]}>
          Sort
          <SortIcon className={css["filter-icons"]} />
        </span>
      </div>

      <div className={css["filters-body"]}>
        <form className={css["filters-form"]}>
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
        </form>
      </div>
    </div>
  );
};

export default ShopFilters;
