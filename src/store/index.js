import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import allReducers from "./reducers/index";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [];
middleWare.push(thunk);

const loggerMiddleware = createLogger({
    predicate: () => process.env.NODE_ENV === "development",
});

middleWare.push(loggerMiddleware);

const store = createStore(
    allReducers,
    composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
