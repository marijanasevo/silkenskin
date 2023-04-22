import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoryState, CategoryMap } from "./category.types";

const selectCategoryReducer = (state: RootState): CategoryState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.isLoading
);

export const selectIsCategoriesEmpty = createSelector(
  [selectCategories],
  (categories) => categories.length === 0
);
