import * as types from "../types";
const initialState = {
    counters: [],
    counter: [],
    divisions: [],
    districts: [],
    error: null,
    buses: [],
    bus: "",
    schedules: [],
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
        case types.FETCH_DIVISIONS:
            return {
                ...state,
                divisions: action.payload,
            };
        case types.FETCH_DISTRICTS:
            return {
                ...state,
                districts: action.payload,
            };
        case types.FETCH_BUSES:
            return {
                ...state,
                buses: action.payload,
            };
        case types.FETCH_SCHEDULES:
            return {
                ...state,
                schedules: action.payload,
            };
        case types.FETCH_BUS:
            return {
                ...state,
                bus: action.payload,
            };
        case types.ERROR:
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
export default counterReducer;
