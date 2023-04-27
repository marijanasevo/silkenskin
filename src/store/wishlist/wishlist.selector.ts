import { createSelector } from "reselect";
import { RootState } from "../store";

export const selectWishlistReducer = (state: RootState) => state.wishlist;

export const selectWishlistProductsIDs = createSelector(
  [selectWishlistReducer],
  (wishlist) => wishlist.productIDs
);

export const selectIsProductInWishlist = (productID: number) =>
  createSelector([selectWishlistProductsIDs], (productIDs) =>
    productIDs.includes(productID)
  );
