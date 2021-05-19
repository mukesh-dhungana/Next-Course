import {
  ADD_POST,
  EDIT_POST,
  GET_ALL_POST,
  REMOVE_POST,
} from "../actions/postsAction";

const initial = {
  posts: [],
};

const postReducer = (state = initial, action) => {
  switch (action.type) {
    case GET_ALL_POST:
      return {
        ...state,
        posts: action.payload,
      };

    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload),
      };
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post.id === action.payload.id
            ? {
                ...post,
                ...action.payload,
              }
            : post
        ),
      };
    default:
      return state;
  }
};

export default postReducer;
