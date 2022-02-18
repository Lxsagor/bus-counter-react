import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../../constants/urls";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const fetchTracks =
    (pageNum = 1) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.tracks.index + "?page=" + pageNum, {
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
                        type: types.FETCH_TRACKS,
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

export const addTrack =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.tracks.index, {
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
                        type: types.TRACK_VALIDATE_ERROR,
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
export const fetchTrack =
    (id, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.tracks.show.replace(":id", id), {
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
                        type: types.FETCH_TRACK,
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

export const updateTrack =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        dispatch(toggleButtonLoading(true));
        fetch(api_routes.tracks.show.replace(":id", data.id), {
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
                        type: types.TRACK_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.FETCH_TRACK,
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
export const deleteTrack = (id) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.tracks.show.replace(":id", id), {
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
                    type: types.DELETE_TRACK,
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

export const searchTrack = (data) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.tracks.searchTrack, {
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
                    type: types.FETCH_TRACKS,
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
