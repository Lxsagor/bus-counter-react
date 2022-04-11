import * as types from "../../types";
const initialState = {
    error: null,
    buses: [],
    bus: {},
};
const busReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_BUSES:
            return {
                ...state,
                buses: action.payload,
            };
        case types.FETCH_BUS:
            return {
                ...state,
                bus: action.payload,
            };
        case types.BUS_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case types.DELETE_BUS:
            return {
                ...state,
                buses: {
                    ...state.buses,
                    data: state.buses.data.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };

        default:
            return state;
    }
};
export default busReducer;
