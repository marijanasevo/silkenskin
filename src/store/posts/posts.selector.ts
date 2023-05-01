import { createSelector } from "reselect";
import { RootState } from "../store";
import { PostsState } from "./posts.types";

const selectPostsReducer = (state: RootState): PostsState => state.posts;

export const selectPosts = createSelector(
  [selectPostsReducer],
  (postsSlice) => postsSlice.posts
);

export const selectPostsLoading = createSelector(
  [selectPostsReducer],
  (postsSlice) => postsSlice.isLoading
);

export const selectIsPostsEmpty = createSelector(
  [selectPosts],
  (posts) => posts.length === 0
);
