import {
    Autocomplete,
    Box,
    Container,
    Button,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import Card from "../../../components/dashboard/DashboardCard";
import dash1 from "../../../assets/counter_dashboard_image/dash1.png";
import dash2 from "../../../assets/counter_dashboard_image/dash2.png";
import { Link } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "date-fns";
import { useStyles } from "./styled";
import Bus from "../../../components/Counter/BusComponent/Bus";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchDistricts } from "../../../store/actions/sharedAction";
import { useSelector } from "react-redux";
import {
    fetchRoutes,
    searchRoute,
} from "../../../store/actions/Counter/bookingActions";
import { BeatLoader } from "react-spinners";
import { FETCH_ROUTES } from "../../../store/types";
import moment from "moment";

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { districts } = useSelector((state) => state.shared);
    const { buttonLoading } = useSelector((state) => state.shared);
    const { routes, searchHistory } = useSelector((state) => state.booking);
    const [location, setLocation] = useState({
        start_location: null,
        end_location: null,
        journey_date: null,
    });
    const [coachItems, setCoachItems] = useState([]);

    // console.log(
    //     routes?.map(
    //         (item) => item.assignBuses.map((dayTime) => dayTime)

    //         // item.assignBuses?.forEach((tick) =>
    //         //     moment(new Date(tick.time)).format("DD/MM/YYYY")
    //     )
    // );

    useEffect(() => {
        dispatch(fetchDistricts());
    }, [dispatch]);

    // useEffect(() => {
    //     dispatch(fetchRoutes());
    // }, [dispatch]);

    const fieldChangeHandler = (field, value) => {
        setLocation((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    // useEffect(() => {
    //     return () => {
    //         dispatch({
    //             type: FETCH_ROUTES,
    //             payload: {},
    //         });
    //     };
    // }, [dispatch]);

    useEffect(() => {
        if (routes) {
            let items = [];
            routes?.forEach((item) =>
                item.assignBuses?.forEach((tick) => {
                    if (
                        moment(new Date(tick.departure_time)).format(
                            "DD/MM/YYYY"
                        ) ===
                        moment(new Date(searchHistory.journey_date)).format(
                            "DD/MM/YYYY"
                        )
                    ) {
                        items.push(tick);
                    }
                })
            );
            setCoachItems(items);
        }
    }, [routes, routes?.assignBuses, searchHistory.journey_date]);
    console.log(coachItems);

    const searchHandler = (e) => {
        e.preventDefault();
        let formData = { ...location };
        if (
            formData.start_location &&
            Object.keys(formData.start_location).length > 0
        ) {
            formData["start_location"] = formData.start_location.id;
        }
        if (
            formData.end_location &&
            Object.keys(formData.end_location).length > 0
        ) {
            formData["end_location"] = formData.end_location.id;
        }

        dispatch(searchRoute(formData));
    };
    return (
        <>
            <Box m={5}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Tickets Booked"}
                            number={125}
                            src={dash1}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Sold Ammount"}
                            number={(12, 954)}
                            src={dash2}
                        />
                    </Grid>
                </Grid>
                <Box mt={5} mb={3}>
                    <Typography variant="h6">Search Bus</Typography>
                    <Box
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                </Box>
                <Box mb={3}>
                    <Grid container spacing={5}>
                        <Grid item lg={3} xs={12}>
                            <Typography>From</Typography>
                            <Autocomplete
                                options={districts}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={location.start_location}
                                onChange={(e, data) =>
                                    fieldChangeHandler("start_location", data)
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
                        <Grid item lg={3} xs={12}>
                            <Typography>To</Typography>
                            <Autocomplete
                                options={districts}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={location.end_location}
                                onChange={(e, data) =>
                                    fieldChangeHandler("end_location", data)
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
                    </Grid>
                </Box>
                <Box mb={5}>
                    <Grid container spacing={5}>
                        <Grid item lg={3} xs={12}>
                            <Typography>Pick Jurney Date</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    onChange={(newValue) =>
                                        fieldChangeHandler(
                                            "journey_date",
                                            newValue
                                        )
                                    }
                                    value={location.journey_date}
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
                    <Grid container>
                        <Grid item lg={2}>
                            <Box my={4}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    className={classes.searchBtn}
                                    onClick={searchHandler}
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
                                    Search
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {routes && routes.length > 0 && (
                    <>
                        <Box mt={5} mb={3}>
                            <Typography variant="h6">
                                Available Bus List
                            </Typography>
                            <Box
                                sx={{
                                    width: "42px",
                                    height: "4px",
                                    backgroundColor: "#33A551",
                                }}
                            ></Box>
                        </Box>
                    </>
                )}

                <Grid container>
                    <Grid item lg={12} xl={10}>
                        <Box className={classes.root}>
                            {routes?.map((item, i) => (
                                <>
                                    {!coachItems.length > 0 && (
                                        <Box
                                            mb={3}
                                            className={classes.bus}
                                            key={i}
                                        >
                                            {/* <Typography variant="h6">
                                                Routes
                                            </Typography> */}
                                            <Bus item={item} />
                                        </Box>
                                    )}
                                    {item.assignBuses.length > 0 && (
                                        <>
                                            {/* <Typography variant="h6" pl={3}>
                                                Coaches
                                            </Typography> */}
                                            {coachItems?.map((busItem, j) => (
                                                <Box
                                                    mb={3}
                                                    className={classes.bus}
                                                    key={j}
                                                >
                                                    <Bus
                                                        item={item}
                                                        bus={busItem}
                                                    />
                                                </Box>
                                            ))}
                                        </>
                                    )}
                                </>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;
