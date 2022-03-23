import { DateTimePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "date-fns";
import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBusesGet } from "../../../store/actions/Admin/busAction";
import {
    fetchDrivers,
    fetchDriversByget,
    fetchStaffs,
    fetchStaffsByGet,
} from "../../../store/actions/Admin/staffAction";
import { fetchDistricts } from "../../../store/actions/sharedAction";
import { useStyles } from "./styled";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
    assignBus,
    assignBusdialog,
    fetchBusByType,
} from "../../../store/actions/Counter/bookingActions";
import { ASSIGN_BUS_VALIDATE_ERROR, ROUTE_ID } from "../../../store/types";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { fetchCountersGet } from "../../../store/actions/Admin/counterAction";
import moment from "moment";
import DeleteIcon from "@mui/icons-material/Delete";

const AssignBus = ({ controlHandler = () => {} }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { districts, buttonLoading } = useSelector((state) => state.shared);
    const { buses } = useSelector((state) => state.bus);
    const { drivers, staffs } = useSelector((state) => state.staff);
    const { counters } = useSelector((state) => state.counter);
    const { id, error, busByType, searchHistory } = useSelector(
        (state) => state.booking
    );
    const [formData, setFormData] = useState({
        route_id: id.id,
        bus_no: null,
        bus_type: id.bus_type,
        driver_id: null,
        staff_id: null,
        departure_date: searchHistory?.journey_date,
        departure_time: new Date(searchHistory?.journey_date),
        arrival_date_time: new Date(),
        boarding_point: [],
        dropping_point: [],
        coach_name: "",
    });

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const [errors, setErrors] = useState({
        track_id: { text: "", show: false },
        bus_no: { text: "", show: false },
        bus_type: { text: "", show: false },
        driver_id: { text: "", show: false },
        staff_id: { text: "", show: false },
        journey_start_id: { text: "", show: false },
        journey_end_id: { text: "", show: false },
        date_time: { text: "", show: false },
    });
    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            Object.keys(error).forEach((key) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { text: error[key][0], show: true },
                }));
            });
        }
    }, [error]);
    useEffect(() => {
        dispatch(fetchDistricts());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchCountersGet());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchDriversByget());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchStaffsByGet());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(fetchBusesGet());
    // }, [dispatch]);
    useEffect(() => {
        dispatch(fetchBusByType(id.bus_type));
    }, [dispatch, id.bus_type]);

    const [boarding_point_item, setBoarding_point_item] = useState({
        counter_id: null,
        time: new Date(),
    });

    const boardingPointFieldChangeHandler = (field, value) => {
        setBoarding_point_item((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const addBoardingOptions = () => {
        let boardingPoint = [...formData.boarding_point, boarding_point_item];
        setFormData((prevState) => ({
            ...prevState,
            boarding_point: boardingPoint,
        }));
        setBoarding_point_item({
            counter_id: null,
            time: new Date(),
        });
    };
    const [dropping_point_item, setDropping_point_item] = useState({
        counter_id: null,
        time: new Date(),
    });

    const droppingPointFieldChangeHandler = (field, value) => {
        setDropping_point_item((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const addDroppingOptions = () => {
        let droppingPoint = [...formData.dropping_point, dropping_point_item];
        setFormData((prevState) => ({
            ...prevState,
            dropping_point: droppingPoint,
        }));
        setDropping_point_item({
            counter_id: null,
            time: new Date(),
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();

        let form = { ...formData };

        if (form.bus_no && Object.keys(form.bus_no).length > 0) {
            form["bus_no"] = form.bus_no.bus_no;
        }
        if (form.driver_id && Object.keys(form.driver_id).length > 0) {
            form["driver_id"] = form.driver_id.id;
        }
        if (form.staff_id && Object.keys(form.staff_id).length > 0) {
            form["staff_id"] = form.staff_id.id;
        }

        if (formData.boarding_point.length > 0) {
            formData.boarding_point.forEach((item, i) => {
                form["boarding_point"][i]["counter_id"] = item.counter_id.id;
            });
        }
        if (formData.dropping_point.length > 0) {
            formData.dropping_point.forEach((item, i) => {
                form["dropping_point"][i]["counter_id"] = item.counter_id.id;
            });
        }
        // if (
        //     form.journey_start_id &&
        //     Object.keys(form.journey_start_id).length > 0
        // ) {
        //     form["journey_start_id"] = form.journey_start_id.id;
        // }
        // if (
        //     form.journey_end_id &&
        //     Object.keys(form.journey_end_id).length > 0
        // ) {
        //     form["journey_end_id"] = form.journey_end_id.id;
        // }
        // console.log(form);
        dispatch(
            assignBus(form, () => {
                controlHandler();
            })
        );
    };
    useEffect(() => {
        return () => {
            dispatch({
                type: ROUTE_ID,
                payload: "",
            });
        };
    }, [dispatch]);
    useEffect(() => {
        return () => {
            dispatch({
                type: ASSIGN_BUS_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);

    const boardingDelete = (option) => {
        let boardingPoints = formData.boarding_point.filter(
            (item) => item !== option
        );
        setFormData((prevState) => ({
            ...prevState,
            boarding_point: boardingPoints,
        }));
    };
    const droppingDelete = (option) => {
        let droppingPoints = formData.dropping_point.filter(
            (item) => item !== option
        );
        setFormData((prevState) => ({
            ...prevState,
            dropping_point: droppingPoints,
        }));
    };
    return (
        <>
            <Box m={3}>
                <Typography variant="h6">Assign Coach</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form onSubmit={submitHandler}>
                    <Grid container spacing={4}>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Select Bus No.</Typography>
                            <Autocomplete
                                options={busByType}
                                optionLabel="bus_no"
                                getOptionLabel={(option) => option.bus_no}
                                value={formData.bus_no}
                                onChange={(e, data) =>
                                    fieldChangeHandler("bus_no", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        className={classes.field}
                                        error={errors.bus_no.show}
                                        helperText={errors.bus_no.text}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Select Bus Driver</Typography>
                            <Autocomplete
                                options={drivers}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={formData.driver_id}
                                onChange={(e, data) =>
                                    fieldChangeHandler("driver_id", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        className={classes.field}
                                        error={errors.driver_id.show}
                                        helperText={errors.driver_id.text}
                                    />
                                )}
                            />
                        </Grid>
                        {/* <Grid item lg={4} xs={12}>
                            <Typography mb={2}>
                                Select Bus SupperVisor
                            </Typography>

                            <TextField
                                fullWidth
                                className={classes.field}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                        </Grid> */}
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Select Bus Staff</Typography>
                            <Autocomplete
                                options={staffs}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={formData.staff_id}
                                onChange={(e, data) =>
                                    fieldChangeHandler("staff_id", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        className={classes.field}
                                        error={errors.staff_id.show}
                                        helperText={errors.staff_id.text}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}> Coach Name</Typography>
                            <TextField
                                value={formData.coach_name}
                                fullWidth
                                className={classes.field}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "coach_name",
                                        e.target.value
                                    )
                                }

                                // InputProps={{
                                //     readOnly: true,
                                // }}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Departure Time</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    value={formData.departure_time}
                                    onChange={(newValue) =>
                                        fieldChangeHandler(
                                            "departure_time",
                                            newValue
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Time"
                                            className={classes.field}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Arrival Time</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    label="Time"
                                    value={formData.arrival_date_time}
                                    onChange={(newValue) =>
                                        fieldChangeHandler(
                                            "arrival_date_time",
                                            newValue
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className={classes.field}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} sx={{ marginTop: "10px" }}>
                        <Grid item lg={3} xs={12}>
                            <Typography mb={2}>
                                Select Boarding Points
                            </Typography>

                            <Autocomplete
                                options={counters}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={boarding_point_item.counter_id}
                                onChange={(e, data) =>
                                    boardingPointFieldChangeHandler(
                                        "counter_id",
                                        data
                                    )
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        label="Boarding Points"
                                        className={classes.field}
                                    />
                                )}
                            />
                            {formData?.boarding_point?.map((item, i) => (
                                <>
                                    <Grid container alignItems="center">
                                        <Grid item lg={12}>
                                            <Box className={classes.timeBox}>
                                                <Typography
                                                    variant="body1"
                                                    color="black"
                                                >
                                                    <strong>
                                                        {item?.counter_id.name},
                                                        {moment(
                                                            item?.time
                                                        ).format("LT")}
                                                    </strong>
                                                </Typography>
                                                <DeleteIcon
                                                    onClick={() =>
                                                        boardingDelete(item)
                                                    }
                                                    className={classes.dltIcon}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography mb={2}>Select Boarding Time</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Time"
                                    value={boarding_point_item.time}
                                    onChange={(newValue) =>
                                        boardingPointFieldChangeHandler(
                                            "time",
                                            newValue
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className={classes.field}
                                            fullWidth
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            <Box my={2}>
                                <Grid container justifyContent="flex-end">
                                    <Grid item lg={3}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={addBoardingOptions}
                                            mt={3}
                                            className={classes.btn}
                                        >
                                            Add
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid container spacing={5} sx={{ marginTop: "10px" }}>
                        <Grid item lg={3} xs={12}>
                            <Typography mb={2}>
                                Select Dropping Points
                            </Typography>

                            <Autocomplete
                                options={counters}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={dropping_point_item.counter_id}
                                onChange={(e, data) =>
                                    droppingPointFieldChangeHandler(
                                        "counter_id",
                                        data
                                    )
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        label="Dropping Points"
                                        className={classes.field}
                                    />
                                )}
                            />

                            {formData?.dropping_point?.map((item, i) => (
                                <>
                                    <Grid container alignItems="center">
                                        <Grid item lg={12}>
                                            <Box
                                                className={classes.timeBox}
                                                mb={4}
                                            >
                                                <Typography
                                                    variant="body1"
                                                    color="black"
                                                >
                                                    <strong>
                                                        {item?.counter_id.name},
                                                        {moment(
                                                            item?.time
                                                        ).format("LT")}
                                                    </strong>
                                                </Typography>
                                                <DeleteIcon
                                                    onClick={() =>
                                                        droppingDelete(item)
                                                    }
                                                    className={classes.dltIcon}
                                                />
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography mb={2}>Select Dropping Time</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <TimePicker
                                    label="Time"
                                    value={dropping_point_item.time}
                                    onChange={(newValue) =>
                                        droppingPointFieldChangeHandler(
                                            "time",
                                            newValue
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            className={classes.field}
                                            fullWidth
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                            <Box my={2}>
                                <Grid container justifyContent="flex-end">
                                    <Grid item lg={3}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={addDroppingOptions}
                                            mt={3}
                                            className={classes.btn}
                                        >
                                            Add
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Grid container spacing={5}>
                            <Grid item lg={2}>
                                <Box my={3}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        className={classes.submitBtn}
                                        type="submit"
                                        {...(buttonLoading && {
                                            disabled: true,
                                            startIcon: (
                                                <BeatLoader
                                                    color="white"
                                                    loading={true}
                                                    size={10}
                                                />
                                            ),
                                        })}
                                    >
                                        Assign
                                    </Button>
                                </Box>
                            </Grid>
                            <Grid item lg={2}>
                                <Box my={3}>
                                    <Button
                                        fullWidth
                                        variant="outlined"
                                        className={classes.submitBtn}
                                        onClick={() => controlHandler()}
                                    >
                                        Cancel
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default AssignBus;
