import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../constants/urls";
import * as types from "../types";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const toggleButtonLoading = (status) => ({
    type: types.TOGGLE_BUTTON_LOADING,
    payload: status,
});

export const toggleSiteLoading = (status) => ({
    type: types.TOGGLE_SITE_LOADING,
    payload: status,
});

export const fetchDivisions = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));
    fetch(api_routes.divisions.index, {
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
                    type: types.FETCH_DIVISIONS,
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

export const fetchDistricts =
    (cb = () => {}) =>
    (dispatch) => {
        fetch(api_routes.districts.get, {
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
                        type: types.FETCH_DISTRICTS,
                        payload: response.data,
                    });
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                cb();
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const fetchDistrictsByDivision = (id) => (dispatch) => {
    fetch(api_routes.districts.index.replace(":divisionId", id), {
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
                    type: types.FETCH_DISTRICTS,
                    payload: response.data,
                });
            } else if (response.status === "error") {
                toast.error(response.message);
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const uploadFile =
    (data, cb = (prop) => {}) =>
    (dispatch) => {
        let formData = new FormData();
        formData.append("file", data);
        fetch(api_routes.file, {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.UPLOAD_FILE,
                        payload: response.data,
                    });
                    cb(response.data);
                    console.log(response.data);
                }
            })
            .catch((err) => console.log(err));
    };
