import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducers from "./slice";
import { useMemo } from "react";

// let store;

// export const initStore = (preloadedstate = {}) => {
//   return configureStore({
//     reducer: {
//       blogs: reducers,
//     },
//     preloadedstate: { ...preloadedstate },
//   });
// };

// // export function initStore(preloadedState) {
// //   return createStore(reducers, preloadedState);
// // }

// export const initializeStore = (preloadedState) => {
//   // console.log("pre", preloadedState);
//   let _store = store ?? initStore(preloadedState);
//   if (preloadedState && store) {
//     _store = initStore({
//       ...store.getState(),
//       ...preloadedState,
//     });

//     store = undefined;
//   }
//   console.log("sss", _store.getState());
//   console.log("storee", store);

//   if (typeof window === "undefined") return _store;
//   if (!store) store = _store;
//   return _store;
// };

// export const useStore = (initialState) => {
//   const store = useMemo(() => initializeStore(initialState), [initialState]);
//   // console.log("init", store.getState());
//   return store;
// };

////////////////////////////////////

let store;

function initStore(preloadedState) {
  return configureStore({
    reducer: {
      BLOGS: reducers,
    },
    preloadedState,
  });
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}
