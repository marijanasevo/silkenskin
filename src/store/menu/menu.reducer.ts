import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isMenuOpen: false,
};

export const menuSlice = createSlice({
  name: "menu",
  initialState: INITIAL_STATE,
  reducers: {
    setIsMenuOpen(state, action) {
      state.isMenuOpen = action.payload;
    },
  },
});

export const { setIsMenuOpen } = menuSlice.actions;

export const menuReducer = menuSlice.reducer;
