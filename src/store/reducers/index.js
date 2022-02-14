import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer.js";
import companyReducer from "./companyReducer.js";
import counterReducer from "./counterReducer.js";
import fareReducer from "./fareReducer.js";

const allReducers = combineReducers({
    auth: AuthReducer,
    company: companyReducer,
    counter: counterReducer,
    fare: fareReducer,
});

export default allReducers;
