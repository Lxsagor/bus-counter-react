import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../constants/urls";
import * as types from "../types";

toast.configure();
export const toggleLoading = (status) => ({
    type: types.TOGGLE_LOADING,
    payload: status,
});

const TOKEN = localStorage.getItem("token");

export const fetchDivisions = () => (dispatch) => {
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

export const addCounter =
    (data, cb = () => {}) =>
    (dispatch) => {
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
            })
            .catch((err) => {
                console.log(err);
            });
    };

export const fetchCounters = () => (dispatch) => {
    dispatch(toggleLoading(true));

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
            dispatch(toggleLoading(false));

            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_COUNTERS,
                    payload: response.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
export const fetchCountersGet = () => (dispatch) => {
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
        })
        .catch((err) => {
            console.log(err);
        });
};
export const searchCounter = (data) => (dispatch) => {
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
        })

        .catch((err) => {
            console.log(err);
        });
};

export const addBus =
    (data, cb = () => {}) =>
    (dispatch) => {
        fetch(api_routes.buses.index, {
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
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const fetchBuses = () => (dispatch) => {
    dispatch(toggleLoading(true));

    fetch(api_routes.buses.index, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            dispatch(toggleLoading(false));

            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUSES,
                    payload: response.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
export const fetchBusesGet = () => (dispatch) => {
    fetch(api_routes.buses.get, {
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
                    type: types.FETCH_BUSES,
                    payload: response.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
export const fetchBus = (id) => (dispatch) => {
    dispatch(toggleLoading(true));

    fetch(api_routes.buses.show.replace(":id", id), {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            dispatch(toggleLoading(false));

            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUS,
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
export const updateBus =
    (id, data, cb = () => {}) =>
    (dispatch) => {
        fetch(api_routes.buses.show.replace(":id", id), {
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
                if (response.status === "validate_error") {
                    dispatch({
                        type: types.ERROR,
                        payload: response.data,
                    });
                } else if (response.status === "success") {
                    toast.success(response.message);
                    dispatch({
                        type: types.FETCH_BUS,
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
export const deleteBus = (id) => (dispatch) => {
    fetch(api_routes.buses.show.replace(":id", id), {
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
                    type: types.DELETE_BUS,
                    payload: id,
                });
            } else if (response.status === "error") {
                toast.error(response.message);
            }
        })

        .catch((err) => {
            console.log(err);
        });
};
export const addSchedule =
    (data, cb = () => {}) =>
    (dispatch) => {
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
            })
            .catch((err) => {
                console.log(err);
            });
    };
export const fetchSchedules = () => (dispatch) => {
    dispatch(toggleLoading(true));
    fetch(api_routes.schedules.index, {
        method: "GET",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: TOKEN,
        },
    })
        .then((response) => response.json())
        .then((response) => {
            dispatch(toggleLoading(false));
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_SCHEDULES,
                    payload: response.data,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
};
