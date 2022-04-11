import * as types from "../../types";
const initialState = {
    routes: [],
    id: {},
    error: null,
    assignBusdialog: false,
    // assignBus: {},
    busByType: [],

    confirmTicket: {},
    searchHistory: {},
    ticket: {},
    seats: [],
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
        case types.SEARCH_HISTORY:
            return {
                ...state,
                searchHistory: action.payload,
            };
        case types.FETCH_BUS_BY_TYPE:
            return {
                ...state,
                busByType: action.payload,
            };
        case types.CONFIRM_TICKET:
            return {
                ...state,
                confirmTicket: action.payload,
            };
        case types.SEARCH_TICKET:
            return {
                ...state,
                ticket: action.payload,
            };
        case types.FETCH_SEATS:
            return {
                ...state,
                seats: action.payload,
            };

        case types.UPDATE_COACH_BY_CONFIRM_TICKET:
            let exitstsRoutes = [...state.routes];

            exitstsRoutes.forEach((item) => {
                if (item.id === action.payload.route_id) {
                    item.assignBuses.forEach((assignItem) => {
                        if (assignItem.id === action.payload.coach_id) {
                            // assignItem.ticket_books.push(
                            //     action.payload.data
                            // );
                            assignItem.ticket_books = [
                                ...assignItem.ticket_books,
                                action.payload.data,
                            ];
                        }
                    });
                }
            });

            return {
                ...state,
                routes: exitstsRoutes,
            };

        default:
            return state;
    }
};
export default bookingReducer;
