import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../../constants/urls";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const fetchCompanies =
    (pageNum = 1) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.companies.index + "?page=" + pageNum, {
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
                        type: types.FETCH_COMPANIES,
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

export const addCompany =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));

        fetch(api_routes.companies.index, {
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
                    // Object.keys(response.data).forEach((key) => {
                    //     toast.error(response.data[key][0]);
                    // });
                    dispatch({
                        type: types.COMPANY_VALIDATE_ERROR,
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
export const fetchCompany =
    (id, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.companies.show.replace(":id", id), {
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
                        type: types.FETCH_COMPANY,
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
export const extendSubs =
    (id, data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.companies.show.replace(":id", id), {
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
                console.log(response);
                if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.TOGGLE_EXTEND_SUBS_STATUS,
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

export const searchCompany = (data) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.companies.searchCompany, {
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
                    type: types.FETCH_COMPANIES,
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
