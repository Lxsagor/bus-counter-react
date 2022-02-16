import { DateTimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AdminUrl } from "../../../constants/urls";
import {
    addSchedule,
    fetchSchedule,
    updateSchedule,
} from "../../../store/actions/Admin/scheduleAction.js";
import { fetchBusesGet } from "../../../store/actions/Admin/busAction";
import { fetchCountersGet } from "../../../store/actions/Admin/counterAction";
import { SCHEDULE_VALIDATE_ERROR, FETCH_SCHEDULE } from "../../../store/types";
import { useStyles } from "./styled";

const AddSchedule = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { counters } = useSelector((state) => state.counter);
    const { buses } = useSelector((state) => state.bus);
    const { error, schedule } = useSelector((state) => state.schedule);
    const { buttonLoading } = useSelector((state) => state.shared);
    const { id } = useParams();

    // console.log("Shedule", schedule);

    useEffect(() => {
        if (id) {
            dispatch(fetchSchedule(id));
        }
    }, [dispatch, id]);

    const [formData, setFormData] = useState({
        bus_id: "",
        bus_no: null,
        start_counter_id: null,
        end_counter_id: null,
        mid_counters_id: [],
        date_time: null,
    });

    console.log(formData);

    useEffect(() => {
        if (schedule && Object.keys(schedule).length > 0) {
            let data = {
                ...schedule,
                start_counter_id: schedule.start_counter,
                end_counter_id: schedule.end_counter,
                bus_no: schedule.bus,
            };

            if (schedule.hasOwnProperty("mid_counters")) {
                // data["mid_counters_id"] = schedule.mid_counters;
                setMidCounters(schedule.mid_counters);
            }

            setFormData((prevState) => ({
                ...prevState,
                ...data,
            }));
        }
    }, [schedule]);

    const [errors, setErrors] = useState({
        bus_no: { text: "", show: false },
        start_counter_id: { text: "", show: false },
        end_counter_id: { text: "", show: false },
        mid_counters_id: { text: "", show: false },
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
    useEffect(() => {
        dispatch(fetchBusesGet());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCountersGet());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch({
                type: SCHEDULE_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_SCHEDULE,
                payload: {},
            });
        };
    }, [dispatch]);

    const [midCounters, setMidCounters] = useState([]);
    const [selectedMidCounter, setSelecteMidCounter] = useState(null);

    const midCounterFieldChangeHandler = (value) => {
        let counters = [...midCounters, value];
        setMidCounters(counters);
        setSelecteMidCounter(null);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let form = { ...formData };

        if (formData.bus_no && formData.bus_no.hasOwnProperty("id")) {
            form["bus_id"] = formData.bus_no.id;
            form["bus_no"] = formData.bus_no.bus_no;
        }

        if (
            formData.start_counter_id &&
            formData.start_counter_id.hasOwnProperty("id")
        ) {
            form["start_counter_id"] = formData.start_counter_id.id;
        }
        if (
            formData.end_counter_id &&
            formData.end_counter_id.hasOwnProperty("id")
        ) {
            form["end_counter_id"] = formData.end_counter_id.id;
        }
        // if (formData.fares.length > 0) {
        //     formData.fares.forEach((item, i) => {
        //         form["fares"][i]["starting_counter_id"] =
        //             item.starting_counter_id.id;
        //         form["fares"][i]["destination_counter_id"] =
        //             item.destination_counter_id.id;
        //     });
        // }

        if (midCounters.length > 0) {
            console.log("mid", form.mid_counters_id);
            let mid_counters_id = [];

            midCounters.forEach((item) => {
                mid_counters_id.push(item.id);
                // form["mid_counters_id"].push(item.id);
            });

            form["mid_counters_id"] = mid_counters_id;
        }
        console.log(form);

        if (form.hasOwnProperty("id")) {
            dispatch(
                updateSchedule(form, () =>
                    history.push(AdminUrl.manageSchedule.index)
                )
            );
        } else {
            dispatch(
                addSchedule(form, () =>
                    history.push(AdminUrl.manageSchedule.index)
                )
            );
        }
    };

    const midCounterDelete = (counter) => {
        let counters = midCounters.filter((item) => item !== counter);
        setMidCounters(counters);
    };

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Assign Bus</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form onSubmit={submitHandler}>
                    <Box mt={4}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography variant="h6" mb={2}>
                                    Select Bus No.
                                </Typography>
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
                        </Grid>
                    </Box>

                    <Box mt={3}>
                        <Typography variant="h6" mb={2}>
                            Location
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Autocomplete
                                    options={counters}
                                    optionLabel="name"
                                    getOptionLabel={(option) => option.name}
                                    value={formData.start_counter_id}
                                    onChange={(e, data) =>
                                        fieldChangeHandler(
                                            "start_counter_id",
                                            data
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            className={classes.field}
                                            label="Start from"
                                            error={errors.start_counter_id.show}
                                            helperText={
                                                errors.start_counter_id.text
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Autocomplete
                                    options={counters}
                                    optionLabel="name"
                                    getOptionLabel={(option) => option.name}
                                    value={formData.end_counter_id}
                                    onChange={(e, data) =>
                                        fieldChangeHandler(
                                            "end_counter_id",
                                            data
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            className={classes.field}
                                            label="Journey End"
                                            error={errors.end_counter_id.show}
                                            helperText={
                                                errors.end_counter_id.text
                                            }
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={3}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography variant="h6" mb={2}>
                                    Select Mid Counters
                                </Typography>
                                <Autocomplete
                                    options={counters}
                                    optionLabel="name"
                                    getOptionLabel={(option) => option.name}
                                    value={selectedMidCounter}
                                    filterSelectedOptions
                                    clearOnBlur
                                    onChange={(e, data) =>
                                        midCounterFieldChangeHandler(data)
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            className={classes.field}
                                        />
                                    )}
                                />
                                <Box my={1}>
                                    {midCounters.map((item, i) => (
                                        <Chip
                                            key={i}
                                            label={item.name}
                                            variant="outlined"
                                            color="primary"
                                            sx={{ margin: "2px" }}
                                            onDelete={() =>
                                                midCounterDelete(item)
                                            }
                                        />
                                    ))}
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box mt={3}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography variant="h6" mb={2}>
                                    Date
                                </Typography>

                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <DateTimePicker
                                        // label="Subscription End Date"
                                        onChange={(newValue) =>
                                            fieldChangeHandler(
                                                "date_time",
                                                newValue
                                            )
                                        }
                                        value={formData.date_time}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                fullWidth
                                                className={classes.field}
                                            />
                                        )}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* {formData.fares.map((item, i) => (
                        <>
                            <Grid container alignItems="center">
                                <Grid item lg={3}>
                                    <Box display="flex">
                                        <Typography
                                            variant="body1"
                                            color="black"
                                            mb={1}
                                        >
                                            <strong>
                                                {item?.starting_counter_id.name}{" "}
                                                To{" "}
                                                {
                                                    item?.destination_counter_id
                                                        .name
                                                }
                                            </strong>
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item lg={1}>
                                    <Typography
                                        variant="body1"
                                        color="black"
                                        mb={1}
                                        ml={8}
                                    >
                                        {item?.fare}.00BDT
                                    </Typography>
                                </Grid>
                            </Grid>
                        </>
                    ))} */}

                    <Box mt={5}>
                        <Grid container spacing={3}>
                            <Grid item lg={2} xs={6}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.button}
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
                                    {formData.hasOwnProperty("id")
                                        ? "Update Assign Bus"
                                        : "Assign Bus"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default AddSchedule;
