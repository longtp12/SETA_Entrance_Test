import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { toastSettings } from "../toastSettings";

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
      toast.success("Post added", { ...toastSettings });
    },
    addPostFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      toast.error("Something went wrong", { ...toastSettings });
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
