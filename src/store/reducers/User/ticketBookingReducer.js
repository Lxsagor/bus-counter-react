import * as types from "../../types";
const initialState = {
    coaches: [],
    searchCoach: {},
};

const ticketBooking = (state = initialState, action) => {
    switch (action.type) {
        case types.SEARCH_COACHES:
            return {
                ...state,
                coaches: action.payload,
            };
        case types.SEARCH_COACH_HISTORY:
            return {
                ...state,
                searchCoach: action.payload,
            };

        default:
            return state;
    }
};
export default ticketBooking;
