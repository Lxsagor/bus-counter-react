import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { api_routes } from "../../constants/urls";
import * as types from "../types";
import { toggleAuthLoading, toggleSiteLoading } from "./authActions";

toast.configure();

const TOKEN = localStorage.getItem("token");

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

export const addCounter =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));
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
                dispatch(toggleAuthLoading(false));

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

export const addBus =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        dispatch(toggleAuthLoading(true));

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
                dispatch(toggleAuthLoading(false));

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
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                console.log(err);
                dispatch(toggleSiteLoading(false));
            });
    };
export const fetchBuses = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));

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
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUSES,
                    payload: response.data,
                });
            }

            dispatch(toggleSiteLoading(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(toggleSiteLoading(false));
        });
};
export const fetchBusesGet = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));
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
            dispatch(toggleSiteLoading(false));
        })
        .catch((err) => {
            console.log(err);
            dispatch(toggleSiteLoading(false));
        });
};
export const fetchBus = (id) => (dispatch) => {
    dispatch(toggleSiteLoading(true));

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
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_BUS,
                    payload: response.data,
                });
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
export const updateBus =
    (id, data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleSiteLoading(true));
        dispatch(toggleAuthLoading(true));
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
                dispatch(toggleAuthLoading(false));

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
                dispatch(toggleSiteLoading(false));
            })

            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const deleteBus = (id) => (dispatch) => {
    dispatch(toggleSiteLoading(true));
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
            dispatch(toggleSiteLoading(false));
        })

        .catch((err) => {
            dispatch(toggleSiteLoading(false));
            console.log(err);
        });
};
export const addSchedule =
    (data, cb = () => {}) =>
    (dispatch) => {
        dispatch(toggleAuthLoading(true));

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
                dispatch(toggleAuthLoading(false));

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
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const fetchSchedules = () => (dispatch) => {
    dispatch(toggleSiteLoading(true));
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
            console.log(response);
            if (response.status === "success") {
                dispatch({
                    type: types.FETCH_SCHEDULES,
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
                console.log(response);
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
        dispatch(toggleAuthLoading(true));
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
                dispatch(toggleAuthLoading(false));

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
                dispatch(toggleSiteLoading(false));
            })
            .catch((err) => {
                dispatch(toggleSiteLoading(false));
                console.log(err);
            });
    };
export const uploadDriverImage =
    (data, cb = () => {}) =>
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
                }
            })
            .catch((err) => console.log(err));
    };
