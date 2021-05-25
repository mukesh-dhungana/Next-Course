import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogSlice";
import { useMemo } from "react";

export const createStore = (preloadedState) =>
  configureStore({
    reducer: {
      blogs: blogReducer,
    },
    preloadedState,
  });

let store;

export const initialiseStore = (preloadedState) => {
  let _store = store ?? createStore(preloadedState);

  if (preloadedState && store) {
    _store = createStore({ ...store.getState(), ...preloadedState });
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initialiseStore(initialState), [initialState]);
  return store;
}
