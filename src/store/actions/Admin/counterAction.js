import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../../constants/urls";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const addCounter =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.counters.index, {
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
                        type: types.COUNTER_VALIDATE_ERROR,
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

export const fetchCounters = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));

    fetch(api_routes.counters.index, {
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
                    type: types.FETCH_COUNTERS,
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
export const fetchCounter =
    (id, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.counters.show.replace(":id", id), {
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
                        type: types.FETCH_COUNTER,
                        payload: response.data,
                    });
                }
                cb();
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const fetchCountersGet = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.counters.get, {
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
                    type: types.FETCH_COUNTERS,
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
export const searchCounter = (data) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.counters.searchCounter, {
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
                    type: types.FETCH_COUNTERS,
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
