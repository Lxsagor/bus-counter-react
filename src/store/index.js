import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [];
middleWare.push(thunk);

const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
