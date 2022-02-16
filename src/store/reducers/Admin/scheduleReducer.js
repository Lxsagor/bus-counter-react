import * as types from "../../types";
const initialState = {
    error: null,
    schedules: [],
    schedule: {},
};
const scheduleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_SCHEDULES:
            return {
                ...state,
                schedules: action.payload,
            };
        case types.FETCH_SCHEDULE:
            return {
                ...state,
                schedule: action.payload,
            };

        case types.SCHEDULE_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};
export default scheduleReducer;
