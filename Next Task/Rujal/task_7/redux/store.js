import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import userReducer from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension'

const customMiddleWare = (store) => (next) => (action) => typeof action === "function" ? action(store.dispatch) : next(action)

const combinedReducer = combineReducers({
    userData: userReducer,
})

const initStore = () => createStore(combinedReducer, composeWithDevTools(applyMiddleware(customMiddleWare)))


export const wrapper = createWrapper(initStore)