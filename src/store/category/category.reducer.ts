import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { CategoryState } from "./category.types";

const INITIAL_STATE: CategoryState = {
  categories: [],
  isLoading: false,
  error: null,
};

export const fetchCategoriesAsync = createAsyncThunk(
  "categories/fetchCategoriesAsync",
  async () => {
    const categoriesArray = await getCategoriesAndDocuments();
    return categoriesArray;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoriesAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error | null;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
