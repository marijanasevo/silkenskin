import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./user.types";

const INITIAL_STATE: UserState = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setPurchases: (state, action) => {
      if (state.currentUser) state.currentUser.purchases = action.payload;
    },
  },
});

export const { setCurrentUser, setPurchases } = userSlice.actions;
export const userReducer = userSlice.reducer;
