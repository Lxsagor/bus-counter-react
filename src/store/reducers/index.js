import { combineReducers } from "redux";
import AuthReducer from "./Auth/AuthReducer";
import companyReducer from "./SuperAdmin/companyReducer.js";
import counterReducer from "./Admin/counterReducer.js";
import fareReducer from "./Admin/fareReducer.js";
import busReducer from "./Admin/busReducer.js";
import adminReducer from "./SuperAdmin/adminReducer";
import scheduleReducer from "./Admin/scheduleReducer";
import staffReducer from "./Admin/staffReducer";
import sharedReducer from "./sharedReducer";

const allReducers = combineReducers({
    auth: AuthReducer,
    admin: adminReducer,
    company: companyReducer,
    counter: counterReducer,
    fare: fareReducer,
    bus: busReducer,
    schedule: scheduleReducer,
    staff: staffReducer,
    shared: sharedReducer,
});

export default allReducers;
