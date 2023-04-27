import { createSlice } from "@reduxjs/toolkit";

type WishlistState = {
  productIDs: number[];
};

const INITIAL_STATE: WishlistState = {
  productIDs: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: INITIAL_STATE,
  reducers: {
    addToWishlist: (state, action) => {
      state.productIDs.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.productIDs = state.productIDs.filter(
        (productID) => productID !== action.payload
      );
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
