import { DateTimePicker, TimePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import {
    Autocomplete,
    Box,
    Button,
    Grid,
    IconButton,
    TextField,
    Typography,
    FormControl,
    Select,
    InputLabel,
    MenuItem,
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
import { fetchDistricts } from "../../../store/actions/sharedAction";
import { SCHEDULE_VALIDATE_ERROR, FETCH_SCHEDULE } from "../../../store/types";
import { useStyles } from "./styled";
import moment from "moment";

const AddSchedule = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { error, schedule } = useSelector((state) => state.schedule);
    const { buttonLoading, districts } = useSelector((state) => state.shared);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchSchedule(id));
        }
    }, [dispatch, id]);

    const [formData, setFormData] = useState({
        bus_type: "",
        bus_seat_type: "",
        routes_id: [],
        day_time: [],
        fares: [],
    });

    console.log(formData);

    // useEffect(() => {
    //     if (schedule && Object.keys(schedule).length > 0) {
    //         let data = {
    //             ...schedule,
    //             start_counter_id: schedule.start_counter,
    //             end_counter_id: schedule.end_counter,
    //             bus_no: schedule.bus,
    //         };

    //         if (schedule.hasOwnProperty("mid_counters")) {
    //             // data["mid_counters_id"] = schedule.mid_counters;
    //             setMidCounters(schedule.mid_counters);
    //         }

    //         setFormData((prevState) => ({
    //             ...prevState,
    //             ...data,
    //         }));
    //     }
    // }, [schedule]);

    const [errors, setErrors] = useState({
        bus_type: { text: "", show: false },
        bus_seat_type: { text: "", show: false },
        routes_id: { text: "", show: false },
        day: { text: "", show: false },
        time: { text: "", show: false },
        fares: { text: "", show: false },
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
        dispatch(fetchDistricts());
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
    const [fareItem, setFareItem] = useState({
        starting_district_id: null,
        destination_district_id: null,
        fare: "",
    });
    const [fareItemError, setFareItemError] = useState({
        starting_district_id: { text: "", show: false },
        destination_district_id: { text: "", show: false },
        fare: { text: "", show: false },
    });
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
    const addFareOptions = () => {
        let fares = [...formData.fares, fareItem];
        setFormData((prevState) => ({
            ...prevState,
            fares: fares,
        }));
        setFareItem({
            starting_district_id: null,
            destination_district_id: null,
            fare: "",
        });
    };

    const [dayTime, setDayTime] = useState({
        day: "",
        time: new Date(),
    });
    const [dayTimeError, setDayTimeError] = useState({
        day: { text: "", show: false },
        time: { text: "", show: false },
    });

    const dayTimeChangeHandler = (field, value) => {
        setDayTimeError((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));

        setDayTime((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    const addDayTimeOptions = () => {
        let dayTimes = [...formData.day_time, dayTime];
        setFormData((prevState) => ({
            ...prevState,
            day_time: dayTimes,
        }));
        setDayTime({
            day: "",
            time: new Date(),
        });
    };
    const submitHandler = (e) => {
        e.preventDefault();
        let form = { ...formData };

        if (formData.fares.length > 0) {
            formData.fares.forEach((item, i) => {
                form["fares"][i]["starting_district_id"] =
                    item.starting_district_id.id;
                form["fares"][i]["destination_district_id"] =
                    item.destination_district_id.id;
            });
        }

        if (midCounters.length > 0) {
            console.log("mid", form.mid_counters_id);
            let mid_counters_id = [];

            midCounters.forEach((item) => {
                mid_counters_id.push(item.id);
                // form["mid_counters_id"].push(item.id);
            });

            form["routes_id"] = mid_counters_id;
        }
        console.log(form);
        dispatch(addSchedule(form));

        // if (form.hasOwnProperty("id")) {
        //     dispatch(
        //         updateSchedule(form, () =>
        //             history.push(AdminUrl.manageSchedule.index)
        //         )
        //     );
        // } else {
        //
        // }
    };

    const midCounterDelete = (counter) => {
        let counters = midCounters.filter((item) => item !== counter);
        setMidCounters(counters);
    };
    const timeDelete = (option) => {
        let dayTimes = formData.day_time.filter((item) => item !== option);
        setFormData((prevState) => ({
            ...prevState,
            day_time: dayTimes,
        }));
    };
    const fareDelete = (option) => {
        let fareitems = formData.fares.filter((item) => item !== option);
        setFormData((prevState) => ({
            ...prevState,
            fares: fareitems,
        }));
    };

    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Add Schedule</Typography>
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
                                    Select Bus Type.
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Bus Type
                                    </InputLabel>
                                    <Select
                                        value={formData.bus_type}
                                        label="Bus Type"
                                        className={classes.selectBox}
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "bus_type",
                                                e.target.value
                                            )
                                        }
                                        error={errors.bus_type.show}
                                        helperText={errors.bus_type.text}
                                    >
                                        <MenuItem value="ac">AC</MenuItem>
                                        <MenuItem value="non_ac">
                                            Non-AC
                                        </MenuItem>
                                        <MenuItem value="business">
                                            Business
                                        </MenuItem>
                                        <MenuItem value="classic">
                                            Classic
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Typography variant="h6" mb={2}>
                                    Select Bus Seat Type.
                                </Typography>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Seat Type
                                    </InputLabel>
                                    <Select
                                        value={formData.bus_seat_type}
                                        className={classes.selectBox}
                                        label="Seat Type"
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "bus_seat_type",
                                                e.target.value
                                            )
                                        }
                                        error={errors.bus_seat_type.show}
                                        helperText={errors.bus_seat_type.text}
                                    >
                                        <MenuItem value="single">
                                            Single{" "}
                                        </MenuItem>
                                        <MenuItem value="double">
                                            Double
                                        </MenuItem>
                                        <MenuItem value="triple">
                                            Triple
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box mt={3}>
                        {/* <Typography variant="h6" mb={2}>
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
                        </Grid> */}
                    </Box>
                    <Box mt={3}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography variant="h6" mb={2}>
                                    Select Routes
                                </Typography>
                                {/* <Autocomplete
                                    options={districts}
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
                                /> */}
                                <Select
                                    fullWidth
                                    value={null}
                                    onChange={(e) =>
                                        midCounterFieldChangeHandler(
                                            e.target.value
                                        )
                                    }
                                    className={classes.selectBox}
                                >
                                    {districts?.map(
                                        (item, i) =>
                                            !midCounters.includes(item) && (
                                                <MenuItem value={item} key={i}>
                                                    {item.name}
                                                </MenuItem>
                                            )
                                    )}
                                </Select>
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
                        <Box my={3} className={classes.fareBox}>
                            <Typography variant="h6" mr={1}>
                                Set Day and Time
                            </Typography>
                            <IconButton>
                                <AddCircleRoundedIcon />
                            </IconButton>
                        </Box>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Day
                                    </InputLabel>
                                    <Select
                                        className={classes.selectBox}
                                        value={dayTime.day}
                                        label="Day"
                                        onChange={(e) =>
                                            dayTimeChangeHandler(
                                                "day",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <MenuItem value="saturday">
                                            Saturday
                                        </MenuItem>
                                        <MenuItem value="sunday">
                                            Sunday
                                        </MenuItem>
                                        <MenuItem value="monday">
                                            Monday
                                        </MenuItem>
                                        <MenuItem value="tuesday">
                                            Tuesday
                                        </MenuItem>
                                        <MenuItem value="wednesday">
                                            Wednesday
                                        </MenuItem>
                                        <MenuItem value="thursday">
                                            Thursday
                                        </MenuItem>
                                        <MenuItem value="friday">
                                            Friday
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                >
                                    <TimePicker
                                        label="Time"
                                        value={dayTime.time}
                                        onChange={(newValue) =>
                                            dayTimeChangeHandler(
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
                                {/* <TextField
                                    mb={3}
                                    label="Time"
                                    onChange={(e) =>
                                        dayTimeChangeHandler(
                                            "time",
                                            e.target.value
                                        )
                                    }
                                    value={dayTime.time}
                                /> */}
                                <Box mt={3}>
                                    <Grid container justifyContent="flex-end">
                                        <Grid item lg={3}>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={addDayTimeOptions}
                                                mt={3}
                                                className={classes.btn}
                                            >
                                                Add Time
                                            </Button>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    {formData?.day_time?.map((item, i) => (
                        <>
                            <Grid container alignItems="center">
                                <Grid item lg={3}>
                                    <Box className={classes.timeBox}>
                                        <Typography
                                            variant="body1"
                                            color="black"
                                        >
                                            <strong>
                                                {item?.day},{""}
                                                {moment(item?.time).format(
                                                    "LT"
                                                )}
                                            </strong>
                                        </Typography>
                                        <DeleteIcon
                                            onClick={() => timeDelete(item)}
                                            className={classes.dltIcon}
                                        />
                                    </Box>
                                </Grid>
                            </Grid>
                        </>
                    ))}

                    {midCounters?.length > 1 && (
                        <>
                            <Box mt={3} className={classes.fareBox}>
                                <Typography variant="h6" mr={1}>
                                    Set Fare
                                </Typography>
                                <IconButton>
                                    <AddCircleRoundedIcon />
                                </IconButton>
                            </Box>

                            <Box my={3}>
                                <Grid container spacing={3}>
                                    <Grid item lg={4} xs={12}>
                                        <Typography>Starting From</Typography>
                                        <Select
                                            fullWidth
                                            value={
                                                fareItem.starting_district_id
                                            }
                                            onChange={(e) =>
                                                fareFieldChangeHandler(
                                                    "starting_district_id",
                                                    e.target.value
                                                )
                                            }
                                            className={classes.selectBox}
                                        >
                                            {midCounters?.map((item, i) => (
                                                <MenuItem value={item} key={i}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>

                                        {/* <Autocomplete
                                    options={districts}
                                    optionLabel="name"
                                    getOptionLabel={(option) => option.name}
                                    value={fareItem.starting_district_id}
                                    onChange={(e, data) =>
                                        fareFieldChangeHandler(
                                            "starting_district_id",
                                            data
                                        )
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            fullWidth
                                            className={classes.field}
                                            error={
                                                fareItemError
                                                    .starting_district_id.show
                                            }
                                            helperText={
                                                fareItemError
                                                    .starting_district_id.text
                                            }
                                        />
                                    )}
                                /> */}
                                    </Grid>
                                    <Grid item lg={4} xs={12}>
                                        <Typography>Destination</Typography>
                                        <Select
                                            fullWidth
                                            value={
                                                fareItem.destination_district_id
                                            }
                                            onChange={(e) =>
                                                fareFieldChangeHandler(
                                                    "destination_district_id",
                                                    e.target.value
                                                )
                                            }
                                            className={classes.selectBox}
                                        >
                                            {midCounters?.map((item, i) => (
                                                <MenuItem value={item} key={i}>
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                        </Select>
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
                                        className={classes.btn}
                                    >
                                        Add Fare
                                    </Button>
                                </Grid>
                            </Grid>

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
                                                        {
                                                            item
                                                                ?.starting_district_id
                                                                .name
                                                        }{" "}
                                                        To{" "}
                                                        {
                                                            item
                                                                ?.destination_district_id
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
                        </>
                    )}

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
                                        ? "Update Schedule"
                                        : "Assign Schedule"}
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
