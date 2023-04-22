import { createSelector } from "reselect";
import { RootState } from "../store";

const selectMenuReducer = (state: RootState) => state.menu;

export const selectIsMenuOpen = createSelector(
  [selectMenuReducer],
  (menu) => menu.isMenuOpen
);
