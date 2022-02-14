import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../constants/urls";
import * as types from "../types";
import { toggleAuthLoading, toggleSiteLoading } from "./authActions";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const fetchFares =
    (pageNum = 1) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.fares.index + "?page=" + pageNum, {
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
                        type: types.FETCH_FARES,
                        payload: response.data,
                    });
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };

export const addFare =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.fares.index, {
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
                dispatch(toggleAuthLoading(false));
                if (response.status === "validate_error") {
                    dispatch({
                        type: types.TOGGLE_FARE_VALIDATION_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }

                dispatch(toggleSiteLoading(false));
                console.log(response);
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const fetchFare =
    (id, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.fares.show.replace(":id", id), {
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
                        type: types.FETCH_FARE,
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

export const updateFare =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        dispatch(toggleAuthLoading(true));
        fetch(api_routes.fares.show.replace(":id", data.id), {
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
                dispatch(toggleAuthLoading(false));

                console.log(response);
                if (response.status === "validate_error") {
                    dispatch({
                        type: types.ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.FETCH_FARE,
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
export const deleteFare = (id) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.fares.show.replace(":id", id), {
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
                    type: types.DELETE_FARE,
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
