import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../../constants/urls";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";
import * as types from "../../types";

toast.configure();

export const login =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.auth_login, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));
                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.AUTH_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    localStorage.setItem("token", response.data.token);
                    dispatch({
                        type: types.LOGIN,
                        payload: {
                            token: response.data.token,
                            currentUser: response.data.user,
                            isAuthenticate: true,
                        },
                    });

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

export const forget =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.auth_forget, {
            method: "post",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.AUTH_VALIDATE_ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);

                    dispatch({
                        type: types.FORGET,
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
export const confirm =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.auth_confirm, {
            method: "post",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.AUTH_VALIDATE_ERROR,
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
export const resend =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch(api_routes.auth_resend, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.status === "success") {
                    toast.success(response.message);

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const changePass =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.auth_changePass, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.AUTH_VALIDATE_ERROR,
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

const TOKEN = localStorage.getItem("token");

export const logout =
    (cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.auth_logout, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("token"),
            },
        })
            .then((response) => response.json())
            .then((response) => {
                dispatch(toggleButtonLoading(false));

                if (response.status === "success") {
                    toast.success(response.message);
                    localStorage.removeItem("token");
                    dispatch({ type: types.LOGOUT });
                    cb();
                }
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                console.log(err);
                dispatch(toggleSiteLoading(false));
                toast.error(err);
            });
    };
export const fetchMe = () => (dispatch) => {
    fetch(api_routes.auth_me, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            if (response.status === "success") {
                dispatch({
                    type: types.CURRENT_USER,
                    payload: {
                        token: TOKEN,
                        currentUser: response.user,
                        isAuthenticate: true,
                    },
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
