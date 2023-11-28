import axios from "axios";
import {
  addPostFailure,
  addPostStart,
  addPostSuccess,
  getPostsFailure,
  getPostsStart,
  getPostsSuccess,
} from "./postsSlice";

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(getPostsSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure());
  }
};

export const addPost = async (dispatch, post) => {
  dispatch(addPostStart());
  try {
    await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: post.title,
      body: post.body,
      userId: Math.floor(Math.random() * 100),
    });
    dispatch(addPostSuccess());
  } catch (error) {
    dispatch(addPostFailure());
  }
};
