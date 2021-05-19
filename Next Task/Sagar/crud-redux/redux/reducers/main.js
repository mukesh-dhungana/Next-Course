import * as t from "../actions/actionTypes";

const initialState = {
  blogs: [],
  editMode: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case t.SHOW_BLOG:
      return { ...state, blogs: action.payload.posts };

    case t.ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload.data],
      };

    case t.DELETE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog.id !== action.payload.id),
      };

    case t.EDIT_TOGGLE:
      return {
        ...state,
        editMode: !action.payload.edit,
      };

    case t.EDIT_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs.filter((blog) => blog.id !== action.payload.eData.id),
          action.payload.eData,
        ],
        editMode: false,
      };

    default:
      return state;
  }
};

export default reducer;
