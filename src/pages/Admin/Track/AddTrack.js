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

const AddTrack = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { districts } = useSelector((state) => state.shared);
    const { error } = useSelector((state) => state.track);
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

    const [errors, setErrors] = useState({
        route: { text: "", show: false },
        bus_type: { text: "", show: false },
        day_time: { text: "", show: false },
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
        let dayTimes = [...formData.day_time, dayTime];
        setFormData((prevState) => ({
            ...prevState,
            day_time: dayTimes,
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
    };
    console.log(formData);
    console.log(locations);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Add Track</Typography>
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
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            onClick={addTimeOptions}
                                        >
                                            Add Time
                                        </Button>
                                    </Grid>
                                </Grid>
                            </Box>
                        </>
                    )}
                    {formData.day_time.map((item, i) => (
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

export default AddTrack;
