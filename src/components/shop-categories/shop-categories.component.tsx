import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/category/category.selector";

import css from "./shop-categories.module.css";
import TuneIcon from "@mui/icons-material/Tune";
import SortIcon from "@mui/icons-material/Sort";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";
import { Filters } from "../../routes/shop/shop.component";

interface ShopCategoriesProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const ShopCategories = ({ filters, setFilters }: ShopCategoriesProps) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const [suited, setSuited] = useState<string[]>([]);
  const [properties, setProperties] = useState<string[]>([]);
  const [targets, setTargets] = useState<string[]>([]);
  const [checkedSuitedOption, setCheckedSuitedOption] = useState("");

  useEffect(() => {
    const suitedOptions = [
      ...Object.values(categoriesMap).reduce((acc, category) => {
        category.forEach((item) => acc.add(item.suited));
        return acc;
      }, new Set<string>()),
    ];

    setSuited(suitedOptions);
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

    setProperties(propertiesOptions);
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

    setTargets(targetOptions);
  }, [categoriesMap]);

  const filterCheckboxHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterGroup: "productProperties" | "suited" | "targets"
  ) => {
    const { checked, name } = e.target;

    if (filterGroup === "productProperties" || filterGroup === "targets") {
      if (checked) {
        setFilters({
          ...filters,
          [filterGroup]: [...filters[filterGroup], name],
        });
      } else {
        setFilters({
          ...filters,
          [filterGroup]: filters[filterGroup].filter((prop) => prop !== name),
        });
      }
    } else if (filterGroup === "suited") {
      if (checked) {
        setFilters({ ...filters, suited: name });
        setCheckedSuitedOption(name);
      } else {
        setFilters({ ...filters, suited: "" });
        setCheckedSuitedOption("");
      }
    }
  };

  return (
    <div className={css["filters"]}>
      <div className={css["categories"]}>
        <div className={css["category-item"]}>
          <Link to="/shop">all</Link>
        </div>
        {Object.keys(categoriesMap).map((categoryTitle) => (
          <div key={categoryTitle} className={css["category-item"]}>
            <Link to={`/shop/${categoryTitle.replace(/\s+/g, "-")}`}>
              {categoryTitle}
            </Link>
          </div>
        ))}
      </div>

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
          <fieldset className={css["filters-group"]}>
            <legend>Targets</legend>
            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              {targets.length > 0
                ? targets.map((target) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={target}
                          onChange={(e) => filterCheckboxHandler(e, "targets")}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: "1.8rem" } }}
                        />
                      }
                      label={target}
                    />
                  ))
                : ""}
            </FormGroup>
          </fieldset>

          <fieldset className={css["filters-group"]}>
            <legend>Properties</legend>

            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              {properties.length > 0
                ? properties.map((prop) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          name={prop}
                          onChange={(e) =>
                            filterCheckboxHandler(e, "productProperties")
                          }
                          sx={{ "& .MuiSvgIcon-root": { fontSize: "1.8rem" } }}
                        />
                      }
                      label={prop}
                    />
                  ))
                : ""}
            </FormGroup>
          </fieldset>

          <fieldset className={css["filters-group"]}>
            <legend>Suited</legend>

            <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
              {suited.length > 0
                ? suited.map((item) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={checkedSuitedOption === item}
                          name={item}
                          onChange={(e) => filterCheckboxHandler(e, "suited")}
                          sx={{ "& .MuiSvgIcon-root": { fontSize: "1.8rem" } }}
                        />
                      }
                      label={item}
                    />
                  ))
                : ""}
            </FormGroup>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default ShopCategories;
