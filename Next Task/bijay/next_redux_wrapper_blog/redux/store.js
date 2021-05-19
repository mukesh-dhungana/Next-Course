import { createStore, applyMiddleware, combineReducers } from "redux";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import { blogsReducer } from "./reducers/blogsReducer";
import thunk from "redux-thunk";

const combinedReducer = combineReducers({
  blogs: blogsReducer,
});

const reducer = (state, action) => {
  // return combinedReducer(state, action);
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // if (state.blogs) nextState.blogs.blogs = state.blogs.blogs; // preserve count value on client side navigation
    return nextState;
  } else {
    return combinedReducer(state, action);
  }
};

const middleware = [thunk];

const initStore = () => {
  return createStore(reducer, applyMiddleware(...middleware));
};

export const wrapper = createWrapper(initStore);
