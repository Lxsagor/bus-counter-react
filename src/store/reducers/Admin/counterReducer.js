import * as types from "../../types";
const initialState = {
    counters: [],
    counter: [],
    error: null,
};
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COUNTERS:
            return {
                ...state,
                counters: action.payload,
            };
        case types.FETCH_COUNTER:
            return {
                ...state,
                counter: action.payload,
            };

        case types.COUNTER_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        default:
            return state;
    }
};
export default counterReducer;
