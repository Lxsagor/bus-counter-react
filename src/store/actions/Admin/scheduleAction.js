import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../../constants/urls";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const addSchedule =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));

        dispatch(toggleSiteLoading(true));
        fetch(api_routes.schedules.index, {
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
                        type: types.SCHEDULE_VALIDATE_ERROR,
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
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const fetchSchedules =
    (pageNum = 1, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.schedules.index + "?page=" + pageNum, {
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
                        type: types.FETCH_SCHEDULES,
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

export const fetchSchedule =
    (id, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.schedules.show.replace(":id", id), {
            method: "GET",
            headers: {
                Accept: "application/json",
                Authorization: TOKEN,
            },
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === "success") {
                    dispatch({
                        type: types.FETCH_SCHEDULE,
                        payload: response.data,
                    });
                    cb();
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };

export const updateSchedule =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.schedules.show.replace(":id", data.id), {
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

                if (response.status === "validate_error") {
                    dispatch({
                        type: types.SCHEDULE_VALIDATE_ERROR,
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
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
