import { useMemo } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

let store;

const initStore = (preloadedstate) => {
    const customMiddleWare = (store) => (next) => (action) => typeof action === "function" ? action(store.dispatch) : next(action)
    const composeEnhancers = composeWithDevTools({
        // Specify here name, actionsBlacklist, actionsCreators and other options
    });
    return createStore(
        reducers,
        preloadedstate,
        composeEnhancers(
            applyMiddleware(customMiddleWare)
            // other store enhancers if any
        ))
}

export const initializeStore = (preloadedState) => {

    let _store = store ?? initStore(preloadedState)
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })

        store = undefined
    }

    if (typeof window === 'undefined') return _store
    if (!store) store = _store
    return _store
}

export const useStore = (initialState) => {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}