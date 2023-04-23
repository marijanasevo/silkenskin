import { createSelector } from "reselect";
import { RootState } from "../store";
import { ReviewState, ReviewMap } from "./review.types";

const selectReviewReducer = (state: RootState): ReviewState => state.reviews;

export const selectReviews = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.reviews
);

export const selectReviewsMap = createSelector(
  [selectReviews],
  (reviews): ReviewMap =>
    reviews.reduce((acc, review) => {
      const id = review.productId;
      acc[id] = review;
      return acc;
    }, {} as ReviewMap)
);

export const selectReviewsLoading = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.isLoading
);

export const selectIsReviewsEmpty = createSelector(
  [selectReviews],
  (reviews) => reviews.length === 0
);
