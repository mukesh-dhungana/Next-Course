import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const postReducer = createSlice({
  name: "post",
  initialState: {
    posts: [],
  },
  reducers: {
    getAllPost: (state, action) => {
      state.posts = action.payload;
    },

    addPost: (state, action) => {
      state.posts = [...state.posts, action.payload];
    },

    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },

    editPost: (state, action) => {
      state.posts = state.posts.map((post) =>
        post.id === action.payload.id
          ? {
              ...post,
              ...action.payload,
            }
          : post
      );
    },
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { getAllPost, addPost, removePost, editPost } =
  postReducer.actions;

export default postReducer.reducer;
