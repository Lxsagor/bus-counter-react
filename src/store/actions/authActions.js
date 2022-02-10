import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../constants/urls";
import * as types from "../types";

toast.configure();

export const toggleAuthLoading = (status) => ({
    type: types.TOGGLE_AUTH_LOADING,
    payload: status,
});

export const login =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));
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
                dispatch(toggleAuthLoading(false));
                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.ERROR,
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

                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };

export const forget =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));

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
                dispatch(toggleAuthLoading(false));

                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.ERROR,
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

                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const confirm =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));

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
                dispatch(toggleAuthLoading(false));

                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);

                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }

                console.log(response);
            })
            .catch((err) => {
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
        dispatch(toggleAuthLoading(true));

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
                dispatch(toggleAuthLoading(false));

                if (response.status === "validate_error") {
                    Object.keys(response.data).forEach((key) => {
                        toast.error(response.data[key][0]);
                    });
                    dispatch({
                        type: types.ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
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

const TOKEN = localStorage.getItem("token");

export const logout =
    (cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));

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
                dispatch(toggleAuthLoading(false));

                console.log(response);

                if (response.status === "success") {
                    toast.success(response.message);
                    localStorage.removeItem("token");
                    dispatch({ type: types.LOGOUT });
                    cb();
                }
            })
            .catch((err) => {
                console.log(err);
                toast.error(err);
            });
    };
