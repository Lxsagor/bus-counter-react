import {
    Autocomplete,
    Box,
    Button,
    Grid,
    IconButton,
    TextareaAutosize,
    TextField,
    Typography,
} from "@mui/material";
import Chip from "@mui/material/Chip";
import React, { useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "date-fns";
import { useStyles } from "./styled";
import { DateTimePicker, TimePicker } from "@mui/lab";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addSchedule,
    fetchBusesGet,
    fetchCountersGet,
} from "../../../store/actions/counterAction";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import { ERROR } from "../../../store/types";
import { AdminUrl } from "../../../constants/urls";
import { useHistory } from "react-router-dom";

const AddSchedule = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { counters, buses } = useSelector((state) => state.counter);
    const [formData, setFormData] = useState({
        bus_id: "",
        bus_no: null,
        start_counter_id: null,
        end_counter_id: null,
        mid_counters_id: [],
        date_time: null,
        fares: [],
    });

    const [errors, setErrors] = useState({
        bus_no: { text: "", show: false },
        start_counter_id: { text: "", show: false },
        end_counter_id: { text: "", show: false },
        mid_counters_id: { text: "", show: false },
        date_time: { text: "", show: false },
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
    useEffect(() => {
        dispatch(fetchBusesGet());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchCountersGet());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch({
                type: ERROR,
                payload: null,
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

    const [newFareItemStatus, setNewFareItemStatus] = useState(false);
    const [fareItem, setFareItem] = useState({
        starting_counter_id: null,
        destination_counter_id: null,
        fare: "",
    });
    const [fareItemError, setFareItemError] = useState({
        starting_counter_id: { text: "", show: false },
        destination_counter_id: { text: "", show: false },
        fare: { text: "", show: false },
    });

    const addFareOptions = () => {
        let fares = [...formData.fares, fareItem];
        setFormData((prevState) => ({
            ...prevState,
            fares: fares,
        }));
        setNewFareItemStatus(false);
        setFareItem({
            starting_counter_id: null,
            destination_counter_id: null,
            fare: "",
        });
    };

    const fareFieldChangeHandler = (field, value) => {
        setFareItemError((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));

        setFareItem((prevState) => ({
            ...prevState,
            [field]: value,
        }));
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
        if (formData.fares.length > 0) {
            formData.fares.forEach((item, i) => {
                form["fares"][i]["starting_counter_id"] =
                    item.starting_counter_id.id;
                form["fares"][i]["destination_counter_id"] =
                    item.destination_counter_id.id;
            });
        }
        // if (formData.mid_counters_id.length > 0) {
        //     formData.mid_counters_id.forEach((item, i) => {
        //         form["mid_counters_id"] = [i][item.id];
        //         console.log(item.id);
        //     });
        // }
        if (midCounters.length > 0) {
            midCounters.forEach((item) => {
                form["mid_counters_id"].push(item.id);
            });
        }
        console.log(form);
        dispatch(
            addSchedule(form, () => history.push(AdminUrl.manageSchedule.index))
        );
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
                                            label={item.name}
                                            variant="outlined"
                                            color="primary"
                                            sx={{ margin: "2px" }}
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
                    <Box mt={4} className={classes.fareBox}>
                        <Typography variant="h6" mr={1}>
                            Set Fare
                        </Typography>
                        <IconButton onClick={() => setNewFareItemStatus(true)}>
                            <AddCircleRoundedIcon />
                        </IconButton>
                    </Box>

                    {newFareItemStatus && (
                        <>
                            <Box my={3}>
                                <Grid container spacing={3}>
                                    <Grid item lg={4} xs={12}>
                                        <Typography>
                                            Select Starting Counter
                                        </Typography>

                                        <Autocomplete
                                            options={counters}
                                            optionLabel="name"
                                            getOptionLabel={(option) =>
                                                option.name
                                            }
                                            value={fareItem.starting_counter_id}
                                            onChange={(e, data) =>
                                                fareFieldChangeHandler(
                                                    "starting_counter_id",
                                                    data
                                                )
                                            }
                                            error={
                                                fareItemError
                                                    .starting_counter_id.show
                                            }
                                            helperText={
                                                fareItemError
                                                    .starting_counter_id.text
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    className={classes.field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <Typography>
                                            Select Destination Counter
                                        </Typography>
                                        <Autocomplete
                                            options={counters}
                                            optionLabel="name"
                                            getOptionLabel={(option) =>
                                                option.name
                                            }
                                            value={
                                                fareItem.destination_counter_id
                                            }
                                            onChange={(e, data) =>
                                                fareFieldChangeHandler(
                                                    "destination_counter_id",
                                                    data
                                                )
                                            }
                                            error={
                                                fareItemError
                                                    .destination_counter_id.show
                                            }
                                            helperText={
                                                fareItemError
                                                    .destination_counter_id.text
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    className={classes.field}
                                                />
                                            )}
                                        />
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <Typography>Fare</Typography>
                                        <TextField
                                            fullWidth
                                            className={classes.field}
                                            value={fareItem.fare}
                                            onChange={(e) =>
                                                fareFieldChangeHandler(
                                                    "fare",
                                                    e.target.value
                                                )
                                            }
                                            error={fareItemError.fare.show}
                                            helperText={fareItemError.fare.text}
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        fullWidth
                                        onClick={addFareOptions}
                                    >
                                        Add Fare
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    )}

                    {formData.fares.map((item, i) => (
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
                                                {item?.starting_counter_id.name}
                                                To
                                            </strong>
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            color="black"
                                            mb={1}
                                            ml={1}
                                        >
                                            <strong>
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
                    ))}

                    <Box mt={5}>
                        <Grid container spacing={3}>
                            <Grid item lg={2} xs={6}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.button}
                                    type="submit"
                                >
                                    Assign Bus
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
