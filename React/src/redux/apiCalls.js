import axios from "axios";
import { getPostsFailure, getPostsStart, getPostsSuccess } from "./postsSlice";
import { toast } from "react-toastify";

const toastSettings = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "colored",
};

export const getPosts = async (dispatch) => {
  dispatch(getPostsStart());
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    dispatch(getPostsSuccess(res.data));
  } catch (error) {
    dispatch(getPostsFailure());
  }
};

export const addPost = async (post) => {
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/posts", {
      title: post.title,
      body: post.body,
      userId: Math.floor(Math.random() * 100),
    });
    if (res.data) return toast.success("Post added!", { ...toastSettings });
    else return toast.error("Something went wrong", { ...toastSettings });
  } catch (error) {
    console.log(error);
  }
};
