import React, { useEffect, useState } from "react";
import {
    Autocomplete,
    Box,
    Grid,
    Typography,
    TextField,
    Chip,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    IconButton,
    Button,
} from "@mui/material";
import { useStyles } from "./styled";
import { useDispatch } from "react-redux";
import { fetchDistricts } from "../../../store/actions/sharedAction";
import { useSelector } from "react-redux";
import { DateTimePicker, LocalizationProvider, TimePicker } from "@mui/lab";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import "date-fns";
import moment from "moment";
import {
    addTrack,
    fetchTrack,
    updateTrack,
} from "../../../store/actions/Admin/trackActions";
import { useHistory, useParams } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { FETCH_TRACK, TRACK_VALIDATE_ERROR } from "../../../store/types";

const AddTrack = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { districts } = useSelector((state) => state.shared);
    const { track } = useSelector((state) => state.track);
    const { error } = useSelector((state) => state.track);
    const { id } = useParams();

    const [formData, setFormData] = useState({
        route: [],
        bus_type: "",
        day_time: [],
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
        if (id) {
            dispatch(fetchTrack(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (track && Object.keys(track).length > 0) {
            let data = {
                ...track,
                bus_type: track.bus_type,
                day_time: track.day_time,
            };

            if (track.hasOwnProperty("districts")) {
                // data["mid_counters_id"] = schedule.mid_counters;
                setLocations(track.districts);
            }

            setFormData((prevState) => ({
                ...prevState,
                ...data,
            }));
        }
    }, [track]);

    const [errors, setErrors] = useState({
        bus_type: { text: "", show: false },
    });
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(null);

    const locationFieldChangeHandler = (value) => {
        let allLocations = [...locations, value];
        setLocations(allLocations);
        setSelectedLocation(null);
    };
    useEffect(() => {
        dispatch(fetchDistricts());
    }, [dispatch]);

    const locationDelete = (district) => {
        let allLocations = locations.filter((item) => item !== district);
        setLocations(allLocations);
    };

    const [newDayTimeStatus, setDayTimeStatus] = useState(false);
    const [dayTime, setDayTime] = useState({
        day: "",
        time: null,
    });
    const [dayTimeError, setDayTimeError] = useState({
        day: { text: "", show: false },
        time: { text: "", show: false },
    });

    const addTimeOptions = () => {
        let day_time = [...formData.day_time, dayTime];
        setFormData((prevState) => ({
            ...prevState,
            day_time: day_time,
        }));
        setDayTimeStatus(false);
        setDayTime({
            day: "",
            time: null,
        });
    };

    const dayTimeFieldChangeHandler = (field, value) => {
        setDayTimeError((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));

        setDayTime((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        let form = { ...formData };

        if (locations.length > 0) {
            let districts = [];

            locations.forEach((item) => {
                districts.push(item.id);
            });

            form["route"] = districts;
        }
        if (form.hasOwnProperty("id")) {
            dispatch(
                updateTrack(form, () =>
                    history.push(AdminUrl.manageTrack.index)
                )
            );
        } else {
            dispatch(
                addTrack(form, () => history.push(AdminUrl.manageTrack.index))
            );
        }
    };
    useEffect(() => {
        return () => {
            dispatch({
                type: TRACK_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_TRACK,
                payload: {},
            });
        };
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">
                    {formData.hasOwnProperty("id")
                        ? "Update Track"
                        : "Add Track"}
                </Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form onSubmit={submitHandler}>
                    <Grid container spacing={3}>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>
                                Choose your track by selecting location
                            </Typography>
                            <Autocomplete
                                options={districts}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={selectedLocation}
                                filterSelectedOptions
                                clearOnBlur
                                onChange={(e, data) =>
                                    locationFieldChangeHandler(data)
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
                                {locations.map((item, i) => (
                                    <Chip
                                        key={i}
                                        label={item.name}
                                        variant="outlined"
                                        color="primary"
                                        sx={{ margin: "2px" }}
                                        onDelete={() => locationDelete(item)}
                                    />
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                    <Box my={3}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Select Bus Type
                                    </InputLabel>
                                    <Select
                                        value={formData.bus_type}
                                        label="Select Bus Type"
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "bus_type",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <MenuItem value="ac">Ac</MenuItem>
                                        <MenuItem value="non_ac">
                                            Non Ac
                                        </MenuItem>
                                        <MenuItem value="business">
                                            Business
                                        </MenuItem>
                                        <MenuItem value="classic">
                                            Classic
                                        </MenuItem>
                                        <MenuItem value="double_decker">
                                            Double Decker
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={4} className={classes.timeBox}>
                        <Typography variant="h6" mr={1}>
                            Set Time
                        </Typography>
                        <IconButton onClick={() => setDayTimeStatus(true)}>
                            <AddCircleRoundedIcon />
                        </IconButton>
                    </Box>
                    {newDayTimeStatus && (
                        <>
                            <Box my={3}>
                                <Grid container spacing={3}>
                                    <Grid item lg={4} xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel id="demo-simple-select-label">
                                                Select Day
                                            </InputLabel>
                                            <Select
                                                value={dayTime.day}
                                                label="Select Day"
                                                class={classes.field}
                                                onChange={(e) =>
                                                    dayTimeFieldChangeHandler(
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
                                                    dayTimeFieldChangeHandler(
                                                        "time",
                                                        newValue
                                                    )
                                                }
                                                renderInput={(params) => (
                                                    <TextField
                                                        {...params}
                                                        fullWidth
                                                        className={
                                                            classes.field
                                                        }
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="flex-start">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={addTimeOptions}
                                            sx={{ marginTop: "10px" }}
                                        >
                                            Add Time
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    )}
                    {formData?.day_time?.map((item, i) => (
                        <>
                            <Grid container alignItems="center" key={i}>
                                <Grid item lg={3}>
                                    <Box display="flex">
                                        <Typography
                                            variant="body1"
                                            color="black"
                                            mb={1}
                                        >
                                            <strong>
                                                {item?.day},
                                                {moment(item.time).format(
                                                    "h:mm a"
                                                )}
                                            </strong>
                                        </Typography>
                                    </Box>
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
                                    {formData.hasOwnProperty("id")
                                        ? "Update Track"
                                        : "Add Track"}
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default AddTrack;
