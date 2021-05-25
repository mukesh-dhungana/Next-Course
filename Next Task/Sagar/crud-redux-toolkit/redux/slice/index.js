import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  editMode: false,
};

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    showBlog: (state, action) => {
      console.log("sooo", action.payload.posts);
      state.blogs = [...state.blogs, ...action.payload.posts];
      // console.log("state", state.blogs);
    },

    addBlog: (state, action) => {
      console.log("zzzz", action.payload.data);

      state.blogs = [...state.blogs, action.payload.data];
    },

    deleteBlog: (state, action) => {
      console.log("deleteBlog");
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload.id);
    },

    editToggle: (state, action) => {
      state.editMode = !action.payload.edit;
    },

    editBlog: (state, action) => {
      (state.blogs = [
        ...state.blogs.filter((blog) => blog.id !== action.payload.eData.id),
        action.payload.eData,
      ]),
        (state.editMode = false);
    },
  },
});

export const { showBlog, addBlog, deleteBlog, editToggle, editBlog } =
  blogSlice.actions;
export default blogSlice.reducer;
