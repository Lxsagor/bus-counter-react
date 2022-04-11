import * as types from "../../types";
const initialState = {
    error: null,
    drivers: [],
    driver: {},
    staffs: [],
    staff: {},
};
const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_DRIVERS:
            return {
                ...state,
                drivers: action.payload,
            };
        case types.FETCH_DRIVER:
            return {
                ...state,
                driver: action.payload,
            };
        case types.FETCH_STAFFS:
            return {
                ...state,
                staffs: action.payload,
            };
        case types.FETCH_STAFF:
            return {
                ...state,
                staff: action.payload,
            };

        case types.STAFF_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case types.DELETE_DRIVER:
            return {
                ...state,
                drivers: {
                    ...state.drivers,
                    data: state.drivers.data.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };
        case types.DELETE_STAFF:
            return {
                ...state,
                staffs: {
                    ...state.staffs,
                    data: state.staffs.data.filter(
                        (item) => item.id !== action.payload
                    ),
                },
            };

        default:
            return state;
    }
};
export default staffReducer;
