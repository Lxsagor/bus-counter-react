import * as types from "../../types";
const initialState = {
    admins: "",
    admin: "",
    error: null,
};
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_ADMINS:
            return {
                ...state,
                admins: action.payload,
            };
        case types.FETCH_ADMIN:
            return {
                ...state,
                admin: action.payload,
            };
        case types.ADMIN_VALIDATE_ERROR:
            return {
                ...state,
                error: action.payload,
            };

        case types.TOGGLE_ADMIN_SUSPEND_STATUS:
            return {
                ...state,
                admins: {
                    ...state.admins,
                    data: [
                        ...state.admins.data.filter(
                            (item) => item.id !== action.payload.id
                        ),
                        action.payload,
                    ],
                },
            };

        default:
            return state;
    }
};
export default adminReducer;
