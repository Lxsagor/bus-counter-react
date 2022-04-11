import * as types from "../../types";
const initialState = {
    fares: [],
    fare: {},
    error: null,
};
const fareReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_FARES:
            return {
                ...state,
                fares: action.payload,
            };
        case types.FETCH_FARE:
            return {
                ...state,
                fare: action.payload,
            };
        case types.FARE_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case types.DELETE_FARE:
            return {
                ...state,
                fares: {
                    ...state.fares,
                    data: state.fares.data.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        default:
            return state;
    }
};
export default fareReducer;
