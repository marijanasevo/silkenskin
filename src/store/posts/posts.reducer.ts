import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPostsAndDocuments } from "../../utils/firebase/firebase.utils";
import { Post, PostsState } from "./posts.types";

const INITIAL_STATE: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

export const fetchPostsAsync = createAsyncThunk(
  "posts/fetchPostsAsync",
  async () => {
    const postsArray = await getPostsAndDocuments();
    return postsArray
      .map(
        (post) =>
          ({
            ...post,
            createdAt: new Date(post.createdAt.seconds * 1000),
          } as Post)
      )
      .sort(
        (postA, postB) => postB.createdAt.getTime() - postA.createdAt.getTime()
      );
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchPostsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as Error | null;
      });
  },
});

export const postsReducer = postsSlice.reducer;
