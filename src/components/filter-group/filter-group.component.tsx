import { useState } from "react";

import { formatCamelCasedName } from "../../utils/helpers/helpers";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import css from "../shop-filter-options/shop-filter-options.module.css";

import { ShopFiltersProps } from "../shop-filter-options/shop-filter-options.component";

type FilterGroupProps = {
  options: string[];
  filterGroup: "productProperties" | "suited" | "targets" | "brand";
} & ShopFiltersProps;

const FilterGroup = ({
  options,
  filterGroup,
  filters,
  setFilters,
}: FilterGroupProps) => {
  const [checkedSuitedOption, setCheckedSuitedOption] = useState("");
  const [checkedBrandOption, setCheckedBrandOption] = useState("");

  const onFilterCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filterGroup: "productProperties" | "suited" | "targets" | "brand"
  ) => {
    const { checked, name } = e.target;

    if (filterGroup === "productProperties" || filterGroup === "targets") {
      if (checked) {
        setFilters({
          ...filters,
          [filterGroup]: [...(filters?.[filterGroup] ?? []), name],
        });
      } else {
        setFilters({
          ...filters,
          [filterGroup]: filters?.[filterGroup]?.filter(
            (prop) => prop !== name
          ),
        });
      }
    } else if (filterGroup === "suited" || filterGroup === "brand") {
      if (checked) {
        setFilters({ ...filters, [filterGroup]: name });
        filterGroup === "suited"
          ? setCheckedSuitedOption(name)
          : setCheckedBrandOption(name);
      } else {
        setFilters({ ...filters, [filterGroup]: "" });
        filterGroup === "suited"
          ? setCheckedSuitedOption("")
          : setCheckedBrandOption("");
      }
    }
  };

  return (
    <fieldset className={css["filter-group"]}>
      <legend className={css["legend"]}>
        {formatCamelCasedName(filterGroup)}
      </legend>

      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            label={option}
            sx={{
              "& .MuiFormControlLabel-label": {
                fontSize: "var(--small-text-font-size)",
              },
            }}
            control={
              filterGroup === "suited" || filterGroup === "brand" ? (
                <Checkbox
                  name={option}
                  onChange={(e) => onFilterCheckboxChange(e, filterGroup)}
                  checked={
                    filterGroup === "suited"
                      ? checkedSuitedOption === option
                      : checkedBrandOption === option
                  }
                  sx={{ "& .MuiSvgIcon-root": { fontSize: "1.8rem" } }}
                />
              ) : (
                <Checkbox
                  name={option}
                  onChange={(e) => onFilterCheckboxChange(e, filterGroup)}
                  sx={{ "& .MuiSvgIcon-root": { fontSize: "1.8rem" } }}
                />
              )
            }
          />
        ))}
      </FormGroup>
    </fieldset>
  );
};

export default FilterGroup;
