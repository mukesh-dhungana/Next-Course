import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { configureStore } from "@reduxjs/toolkit";
import reducer from "./postSlice";

// create a makeStore function
const makeStore = (context) =>
  configureStore({
    reducer: reducer,
  });

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, { debug: false });
