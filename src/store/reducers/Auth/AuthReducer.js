import * as types from "../../types";
const initialState = {
    token: null,
    isAuthenticate: false,
    currentUser: null,
    error: null,
    forget: "",
};

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            };
        case types.CURRENT_USER:
            return {
                ...state,
                token: action.payload.token,
                isAuthenticate: action.payload.isAuthenticate,
                currentUser: action.payload.currentUser,
            };

        case types.AUTH_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case types.FORGET:
            return {
                ...state,
                forget: action.payload,
            };

        case types.LOGOUT:
            return {
                ...state,
                token: null,
                isAuthenticate: false,
                currentUser: null,
            };

        default:
            return state;
    }
};
export default AuthReducer;
