import { useMemo } from "react";
import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "./reducers";
let store;
const initStore = (preloadedstate) => {
  return createStore(rootReducer, preloadedstate);
};
export const initializeStore = (preloadedState = rootReducer.state) => {
  let _store = store ?? initStore(preloadedState);
  if (preloadedState && store) {
    _store = initStore({
      ...preloadedState,
      ...store.getState(),
    });
    store = undefined;
  }
  if (typeof window === "undefined") return _store;
  if (!store) store = _store;
  return _store;
};
export const useStore = (initialState) => {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
