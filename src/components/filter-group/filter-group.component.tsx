import { useState } from "react";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import css from "../shop-categories/shop-filters.module.css";

import { ShopFiltersProps } from "../shop-categories/shop-filters.component";

type FilterGroupProps = {
  options: string[];
  filterGroup: "productProperties" | "suited" | "targets";
} & ShopFiltersProps;

function formatFilterGroupName(name: string): string {
  const formattedName = name.replace(/([a-z])([A-Z])/g, "$1 $2"); // separate camelCase
  return formattedName.charAt(0).toUpperCase() + formattedName.slice(1); // capitalize first letter
}

const FilterGroup = ({
  options,
  filterGroup,
  filters,
  setFilters,
}: FilterGroupProps) => {
  const [checkedSuitedOption, setCheckedSuitedOption] = useState("");

  const onFilterCheckboxChange = (
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
    <fieldset className={css["filters-group"]}>
      <legend>{formatFilterGroupName(filterGroup)}</legend>

      <FormGroup sx={{ display: "flex", flexDirection: "row" }}>
        {options.map((option) => (
          <FormControlLabel
            key={option}
            label={option}
            control={
              filterGroup === "suited" ? (
                <Checkbox
                  name={option}
                  onChange={(e) => onFilterCheckboxChange(e, filterGroup)}
                  checked={checkedSuitedOption === option}
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
