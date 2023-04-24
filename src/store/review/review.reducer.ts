import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getReviewsAndDocuments } from "../../utils/firebase/firebase.utils";
import { Review, ReviewState } from "./review.types";

const INITIAL_STATE: ReviewState = {
  reviews: [],
  isLoading: false,
  error: null,
};

export const fetchReviewsAsync = createAsyncThunk(
  "reviews/fetchReviewsAsync",
  async () => {
    const reviewsArray = await getReviewsAndDocuments();
    return reviewsArray.map((review) => {
      return {
        ...review,
        createdAt: new Date(review.createdAt.seconds * 1000),
      } as Review;
    });
  }
);

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviewsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchReviewsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviewsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error | null;
      });
  },
});

export const reviewsReducer = reviewsSlice.reducer;
