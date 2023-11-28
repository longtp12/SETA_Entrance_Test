import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // Get all posts
    getPostsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getPostsSuccess: (state, action) => {
      state.isFetching = false;
      state.posts = action.payload;
    },
    getPostsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // Add post
    addPostStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addPostSuccess: (state) => {
      state.isFetching = false;
      console.log("Post Added");
    },
    addPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
  addPostFailure,
  addPostStart,
  addPostSuccess,
} = postsSlice.actions;

export default postsSlice.reducer;
