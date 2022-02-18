import * as types from "../types";
const initialState = {
    routes: [],
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_ROUTE:
            return {
                ...state,
                routes: action.payload,
            };

        default:
            return state;
    }
};
export default bookingReducer;
