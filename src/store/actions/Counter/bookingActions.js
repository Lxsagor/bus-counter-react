import { api_routes } from "../../../constants/urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

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
    (dispatch) => {
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
