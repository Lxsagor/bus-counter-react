import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../constants/urls";
import * as types from "../types";

toast.configure();

const TOKEN = localStorage.getItem("token");

export const fetchCompanies = () => (dispatch) => {
    fetch(api_routes.companies.index, {
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
                    type: types.FETCH_COMPANIES,
                    payload: response.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};

export const addCompany =
    (data, cb = () => {}) =>
    (dispatch) => {
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
                if (response.status === "validate_error") {
                    // Object.keys(response.data).forEach((key) => {
                    //     toast.error(response.data[key][0]);
                    // });
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
export const fetchCompany =
    (id, cb = () => {}) =>
    (dispatch) => {
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
            })

            .catch((err) => {
                console.log(err);
            });
    };
export const extendSubs =
    (id, data, cb = () => {}) =>
    (dispatch) => {
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
            })

            .catch((err) => {
                console.log(err);
            });
    };

export const addAdmin =
    (id, data, cb = () => {}) =>
    (dispatch) => {
        fetch(api_routes.admins.index.replace(":id", id), {
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
                if (response.status === "validate_error") {
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

export const fetchAdmins = (id) => (dispatch) => {
    fetch(api_routes.admins.index.replace(":id", id), {
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
                    type: types.FETCH_ADMINS,
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

export const fetchAdmin = (companyId, id) => (dispatch) => {
    fetch(
        api_routes.admins.show
            .replace(":companyId", companyId)
            .replace(":id", id),
        {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: TOKEN,
            },
        }
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_ADMIN,
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

export const suspendAdmin = (companyId, id) => (dispatch) => {
    fetch(
        api_routes.admins.suspend
            .replace(":companyId", companyId)
            .replace(":id", id),
        {
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                Authorization: TOKEN,
            },
        }
    )
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            if (response.status === "success") {
                toast.success(response.message);
                dispatch({
                    type: types.TOGGLE_ADMIN_SUSPEND_STATUS,
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
export const searchCompany = (data) => (dispatch) => {
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
        })

        .catch((err) => {
            console.log(err);
        });
};
export const searchAdmin = (id, data) => (dispatch) => {
    fetch(api_routes.admins.searchAdmin.replace(":companyId", id), {
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
                    type: types.FETCH_ADMINS,
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

// export const fetchAdmin = (companyId, id) => (dispatch) => {
//     fetch(api_routes.company.index.replace(":id", id).replace(":id", id), {
//         method: "GET",
//         headers: {
//             "Content-type": "application/json",
//             Accept: "application/json",
//             Authorization: TOKEN,
//         },
//     })
//         .then((response) => response.json())
//         .then((response) => {
//             console.log(response);
//             if (response.status === "success") {
//                 dispatch({
//                     type: types.FETCH_ADMINS,
//                     payload: response.data,
//                 });
//             } else if (response.status === "error") {
//                 toast.error(response.message);
//             }
//         })

//         .catch((err) => {
//             console.log(err);
//         });
// };
