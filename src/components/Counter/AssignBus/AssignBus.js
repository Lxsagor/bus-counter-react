import { DateTimePicker, LocalizationProvider } from "@mui/lab";
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
} from "../../../store/actions/Counter/bookingActions";
import { ASSIGN_BUS_VALIDATE_ERROR, ROUTE_ID } from "../../../store/types";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";

const AssignBus = ({ controlHandler = () => {} }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { districts, buttonLoading } = useSelector((state) => state.shared);
    const { buses } = useSelector((state) => state.bus);
    const { drivers, staffs } = useSelector((state) => state.staff);
    const { id, error } = useSelector((state) => state.booking);
    const [formData, setFormData] = useState({
        track_id: id,
        bus_no: null,
        bus_type: "",
        driver_id: null,
        staff_id: null,
        journey_start_id: null,
        journey_end_id: null,
        date_time: null,
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
        dispatch(fetchDriversByget());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchStaffsByGet());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchBusesGet());
    }, [dispatch]);

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
                                options={buses}
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
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>
                                Select Bus SupperVisor
                            </Typography>
                            {/* <Autocomplete
                                renderInput={(params) => ( */}
                            <TextField
                                fullWidth
                                className={classes.field}
                                InputProps={{
                                    readOnly: true,
                                }}
                            />
                            {/* )} */}
                            {/* /> */}
                        </Grid>{" "}
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
                            <Typography mb={2}>Select Bus Type</Typography>
                            <FormControl fullWidth>
                                <Select
                                    value={formData.bus_type}
                                    class={classes.field}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "bus_type",
                                            e.target.value
                                        )
                                    }
                                >
                                    <MenuItem value="ac">Ac</MenuItem>
                                    <MenuItem value="non_ac">Non Ac</MenuItem>
                                    <MenuItem value="business">
                                        Business
                                    </MenuItem>
                                    <MenuItem value="classic">Classic</MenuItem>
                                    <MenuItem value="double_decker">
                                        Double Decker
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* <Box my={2}>
                        <Typography variant="h6">Location</Typography>
                    </Box>
                    <Grid container spacing={3}>
                        <Grid item lg={4} xs={12}>
                            <Autocomplete
                                options={districts}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={formData.journey_start_id}
                                onChange={(e, data) =>
                                    fieldChangeHandler("journey_start_id", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        label="Start from"
                                        className={classes.field}
                                        error={errors.journey_start_id.show}
                                        helperText={
                                            errors.journey_start_id.text
                                        }
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Autocomplete
                                options={districts}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={formData.journey_end_id}
                                onChange={(e, data) =>
                                    fieldChangeHandler("journey_end_id", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        label="Journey End"
                                        className={classes.field}
                                        error={errors.journey_end_id.show}
                                        helperText={errors.journey_end_id.text}
                                    />
                                )}
                            />
                        </Grid>{" "}
                        <Grid item lg={4} xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DateTimePicker
                                    value={formData.date_time}
                                    onChange={(newValue) =>
                                        fieldChangeHandler(
                                            "date_time",
                                            newValue
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            label="Date and Time"
                                            className={classes.field}
                                            error={errors.date_time.show}
                                            helperText={errors.date_time.text}
                                        />
                                    )}
                                />
                            </LocalizationProvider>
                        </Grid>
                    </Grid> */}
                    <Grid container>
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
                                    Assign Bus
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default AssignBus;
