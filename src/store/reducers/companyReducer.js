import * as types from "../types";
const initialState = {
    companies: "",
    company: "",
    error: null,
    admins: "",
    admin: "",
};
const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMPANIES:
            return {
                ...state,
                companies: action.payload,
            };
        case types.FETCH_COMPANY:
            return {
                ...state,
                company: action.payload,
            };
        case types.ERROR:
            return {
                ...state,
                error: action.payload,
            };
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
        case types.TOGGLE_EXTEND_SUBS_STATUS:
            return {
                ...state,
                companies: {
                    ...state.companies,
                    data: [
                        ...state.companies.data.filter(
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
export default companyReducer;
