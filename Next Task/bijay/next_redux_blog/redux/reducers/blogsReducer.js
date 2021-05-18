import { FETCH, DELETE, EDIT } from "../types";

const initialState = {
  blogs: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      //   return Object.assign({}, state, { token: action.payload });
      return {
        ...state,
        blogs: action.payload,
      };

    case EDIT:
      console.log(action.payload);
      return {
        ...state,
        blogs: state.blogs.map((x) =>
          x.id === action.payload.id ? action.payload : x
        ),
      };

    case DELETE:
      return {
        ...state,
        blogs: state.blogs.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
};
