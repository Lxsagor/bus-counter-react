import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer.js";
import companyReducer from "./companyReducer.js";
import counterReducer from "./counterReducer.js";

const allReducers = combineReducers({
    auth: AuthReducer,
    company: companyReducer,
    counter: counterReducer,
});

export default allReducers;
