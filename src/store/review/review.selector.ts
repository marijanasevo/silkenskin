import { createSelector } from "reselect";
import { RootState } from "../store";
import { ReviewState } from "./review.types";

const selectReviewReducer = (state: RootState): ReviewState => state.reviews;

export const selectReviews = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.reviews
);

export const selectReviewsLoading = createSelector(
  [selectReviewReducer],
  (reviewsSlice) => reviewsSlice.isLoading
);

export const selectIsReviewsEmpty = createSelector(
  [selectReviews],
  (reviews) => reviews.length === 0
);

export const selectProductReviews = (productId: string) =>
  createSelector([selectReviews], (reviews) =>
    reviews
      .filter((review) => review.productId === productId)
      .sort(
        (reviewA, reviewB) =>
          reviewB.createdAt.getTime() - reviewA.createdAt.getTime()
      )
  );

export const selectProductAverageStars = (productId: string) =>
  createSelector([selectReviews], (reviews) => {
    const productReviews = reviews.filter(
      (reviews) => reviews.productId === productId
    );
    const starsSum = productReviews.reduce((acc, currentReview) => {
      return acc + currentReview.stars;
    }, 0);

    return starsSum / productReviews.length;
  });
