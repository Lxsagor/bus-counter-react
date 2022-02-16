import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../../constants/urls";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const addBus =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        dispatch(toggleButtonLoading(true));

        fetch(api_routes.buses.index, {
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
                        type: types.BUS_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                console.log(err);
                dispatch(toggleSiteLoading(false));
            });
    };
export const fetchBuses = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));

    fetch(api_routes.buses.index, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUSES,
                    payload: response.data,
                });
            }

            dispatch(toggleSiteLoading(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(toggleSiteLoading(false));
        });
};
export const fetchBusesGet = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.buses.get, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUSES,
                    payload: response.data,
                });
            }
            dispatch(toggleSiteLoading(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(toggleSiteLoading(false));
        });
};
export const fetchBus = (id) => (dispatch) => {
    dispatch(toggleSiteLoading(true));

    fetch(api_routes.buses.show.replace(":id", id), {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUS,
                    payload: response.data,
                });
            } else if (response.status === "error") {
                toast.error(response.message);
            }

            dispatch(toggleSiteLoading(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(toggleSiteLoading(false));
        });
};
export const updateBus =
    (id, data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        dispatch(toggleButtonLoading(true));
        fetch(api_routes.buses.show.replace(":id", id), {
            method: "PATCH",
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

                console.log(response);
                if (response.status === "validate_error") {
                    dispatch({
                        type: types.BUS_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.FETCH_BUS,
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
export const deleteBus = (id) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.buses.show.replace(":id", id), {
        method: "DELETE",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.status === "success") {
                toast.success(response.message);
                dispatch({
                    type: types.DELETE_BUS,
                    payload: id,
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
