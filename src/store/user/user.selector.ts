import { createSelector } from "reselect";
import { RootState } from "../store";
import { UserState } from "./user.types";

export const selectUserReducer = (state: RootState): UserState => state.user;

export const selectCurrentUser = createSelector(
  [selectUserReducer],
  (user) => user.currentUser
);

export const selectIsUserLoggedIn = createSelector(
  [selectCurrentUser],
  (user) => user !== null
);
