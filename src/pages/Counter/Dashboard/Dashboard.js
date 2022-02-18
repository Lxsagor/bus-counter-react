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
import { fetchTracks } from "../../../store/actions/Admin/trackActions";

const Dashboard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { districts } = useSelector((state) => state.shared);
    const { tracks } = useSelector((state) => state.track);
    const [location, setLocation] = useState({
        start_location: null,
        end_location: null,
    });
    useEffect(() => {
        dispatch(fetchDistricts());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchTracks());
    }, [dispatch]);

    const searchHandler = () => {
        let formData = { ...location };
        if (
            formData.division_id &&
            Object.keys(formData.division_id).length > 0
        ) {
            formData["division_id"] = formData.division_id.id;
        }
        dispatch(searchTrack(formData));
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
                            text={<Link href="#">See details</Link>}
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
                        <Grid item lg={3} xs={12}>
                            <Typography>Pick Return Date (Optional)</Typography>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    // label="Subscription End Date"

                                    // onChange={(newValue) => {
                                    //     setValue(newValue);
                                    // }}
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
                                    onClick={() => searchHandler}
                                >
                                    Search
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5} mb={3}>
                    <Typography variant="h6">Available Bus List</Typography>
                    <Box
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                </Box>
                <Grid container>
                    <Grid item lg={12} xl={10}>
                        <Box className={classes.root}>
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                {/* <Grid item lg={2} xs={3}>
                                    <Box className={classes.bookingBox}>
                                        <Typography>Bookings</Typography>
                                    </Box>
                                </Grid>
                                <Grid itemlg={2} xs={2}>
                                    <Autocomplete
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                label="Today"
                                                variant="standard"
                                                fullWidth
                                            />
                                        )}
                                    />
                                </Grid> */}
                            </Grid>
                            {tracks?.data?.map((item, i) => (
                                <Box mb={3} className={classes.bus}>
                                    <Bus item={item} />
                                </Box>
                            ))}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;
