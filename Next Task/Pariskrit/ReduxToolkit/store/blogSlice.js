import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogLists: [],
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogLists = [action.payload, ...state.blogLists];
    },
    deleteBlog: (state, action) => {
      state.blogLists = state.blogLists.filter(
        (blog) => blog.id !== action.payload.id
      );
    },
    updateBlog: (state, action) => {
      state.blogLists = state.blogLists.map((blog) =>
        blog.id === action.payload.id ? action.payload : blog
      );
    },
    setBlogs: (state, action) => {
      state.blogLists = action.payload;
    },
  },
});

export const { addBlog, deleteBlog, updateBlog, setBlogs } = blogSlice.actions;

export default blogSlice.reducer;
