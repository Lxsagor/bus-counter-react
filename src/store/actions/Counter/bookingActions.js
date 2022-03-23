import { api_routes } from "../../../constants/urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";
import { searchCoachs } from "../User/userActions";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const fetchRoutes =
    (cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.booking.routes, {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: TOKEN,
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    dispatch({
                        type: types.FETCH_ROUTES,
                        payload: response.data,
                    });
                }
                dispatch(toggleSiteLoading(false));
                cb();
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const fetchBusByType =
    (type, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.buses.busgetByType.replace(":type", type), {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: TOKEN,
            },
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    dispatch({
                        type: types.FETCH_BUS_BY_TYPE,
                        payload: response.data,
                    });
                }
                dispatch(toggleSiteLoading(false));
                cb();
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };

export const searchRoute = (data) => (dispatch) => {
    dispatch(toggleButtonLoading(true));
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.booking.searchRoute, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_ROUTES,
                    payload: response.data,
                });
                dispatch({
                    type: types.SEARCH_HISTORY,
                    payload: data,
                });
            } else if (response.status === "error") {
                toast.error(response.message);
            }
            dispatch(toggleButtonLoading(false));
            dispatch(toggleSiteLoading(false));
        })

        .catch((err) => {
            dispatch(toggleButtonLoading(false));
            dispatch(toggleSiteLoading(false));
            console.log(err);
        });
};
export const routeid = (id, bus_type) => ({
    type: types.ROUTE_ID,
    payload: {
        id,
        bus_type,
    },
});
export const assignBusdialog = (status) => ({
    type: types.ASSIGN_BUS_DIALOG,
    payload: status,
});

export const assignBus =
    (data, cb = () => {}) =>
    (dispatch, getStore) => {
        const searchHistory = getStore().booking.searchHistory;

        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.booking.assignBus, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: TOKEN,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "validate_error") {
                    dispatch({
                        type: types.ASSIGN_BUS_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch(searchRoute(searchHistory));
                    // dispatch({
                    //     type: types.ASSIGN_BUS,
                    //     payload: response.data,
                    // });
                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const ticketBooking =
    (data, cb = () => {}) =>
    (dispatch, getStore) => {
        const searchHistory = getStore().ticket.searchCoach;
        const searchRoutes = getStore().booking.searchHistory;

        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.booking.ticketBooking, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: TOKEN,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));
                console.log(data, response.data);
                if (response.status === "validate_error") {
                    // toast.error("Please choose atleast one seat");
                    dispatch({
                        type: types.ASSIGN_BUS_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.CONFIRM_TICKET,
                        payload: response.data,
                    });
                    dispatch(searchCoachs(searchHistory));
                    dispatch(searchRoute(searchRoutes));
                    // dispatch({
                    //     type: types.UPDATE_COACH_BY_CONFIRM_TICKET,
                    //     payload: {
                    //         route_id: data.route_id,
                    //         coach_id: data.coach_id,
                    //         data: response.data,
                    //     },
                    // });
                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const searhTicket =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.booking.searchTicket, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: TOKEN,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "validate_error") {
                    // toast.error("Please choose atleast one seat");
                    dispatch({
                        type: types.ASSIGN_BUS_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.SEARCH_TICKET,
                        payload: response.data,
                    });

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const cancelTicket =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.booking.cancelTicket, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: TOKEN,
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "validate_error") {
                    dispatch({
                        type: types.ASSIGN_BUS_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.SEARCH_TICKET,
                        payload: {},
                    });

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
