import * as types from "../types";
const initialState = {
    buttonLoading: false,
    siteLoading: false,
    divisions: [],
    districts: [],
};

const sharedReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_BUTTON_LOADING:
            return {
                ...state,
                buttonLoading: action.payload,
            };

        case types.TOGGLE_SITE_LOADING:
            return {
                ...state,
                siteLoading: action.payload,
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
        default:
            return state;
    }
};
export default sharedReducer;
