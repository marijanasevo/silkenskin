import { CategoryMap } from "../../store/category/category.types";
import { Filters } from "./shop.component";
import { replaceHyphenWithSpace } from "../../utils/helpers/helpers";

export const applyFilters = (
  categoriesMap: CategoryMap,
  filters: Filters,
  category: string | undefined
) => {
  let newProductsToShow =
    category === undefined
      ? Object.values(categoriesMap).flat()
      : Array.from(categoriesMap[replaceHyphenWithSpace(category)] || []);

  if (filters?.productProperties?.length) {
    newProductsToShow = newProductsToShow.filter((product) =>
      filters?.productProperties?.every((prop) =>
        product.productProperties.includes(prop)
      )
    );
  }

  if (filters?.targets?.length) {
    newProductsToShow = newProductsToShow.filter((product) =>
      filters.targets?.every((prop) => product.targets?.includes(prop))
    );
  }

  if (filters.suited) {
    newProductsToShow = newProductsToShow.filter(
      (product) => filters.suited === product.suited
    );
  }

  if (filters.brand) {
    newProductsToShow = newProductsToShow.filter(
      (product) => filters.brand === product.brand
    );
  }

  if (filters.sort === "lowest") {
    newProductsToShow = newProductsToShow.sort(
      (productA, productB) => productA.price - productB.price
    );
  }

  if (filters.sort === "highest") {
    newProductsToShow = newProductsToShow.sort(
      (productA, productB) => productB.price - productA.price
    );
  }

  if (filters.newArrival) {
    newProductsToShow = newProductsToShow.filter(
      (product) => product.newArrival
    );
  }

  return newProductsToShow;
};
