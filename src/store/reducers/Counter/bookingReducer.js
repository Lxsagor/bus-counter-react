import * as types from "../../types";
const initialState = {
    routes: [],
    id: "",
    error: null,
    assignBusdialog: false,
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ROUTES:
            return {
                ...state,
                routes: action.payload,
            };
        case types.ROUTE_ID:
            return {
                ...state,
                id: action.payload,
            };
        case types.ASSIGN_BUS_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case types.ASSIGN_BUS_DIALOG:
            return {
                ...state,
                assignBusdialog: action.payload,
            };

        default:
            return state;
    }
};
export default bookingReducer;
