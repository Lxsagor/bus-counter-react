import { api_routes } from "../../../constants/urls";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as types from "../../types";
import { toggleButtonLoading, toggleSiteLoading } from "../sharedAction";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const searchCoach =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleButtonLoading(true));
        dispatch(toggleSiteLoading(true));
        fetch(api_routes.ticket.searchCoach, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
                if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.SEARCH_COACHES,
                        payload: response.data,
                    });
                    dispatch({
                        type: types.SEARCH_COACH_HISTORY,
                        payload: data,
                    });
                    cb();
                } else if (response.status === "error") {
                    toast.error(response.message);
                }
                dispatch(toggleButtonLoading(false));
                dispatch(toggleSiteLoading(false));
            })

            .catch((err) => {
                dispatch(toggleButtonLoading(false));
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
