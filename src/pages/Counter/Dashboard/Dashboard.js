import {
    Autocomplete,
    Box,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import Card from "../../../components/dashboard/DashboardCard";
import dash1 from "../../../assets/counter_dashboard_image/dash1.png";
import dash2 from "../../../assets/counter_dashboard_image/dash2.png";
import { Link } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import "date-fns";
import { useStyles } from "./styled";
import Bus from "../../../components/TrackBus/Bus";

const Dashboard = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Tickets Booked"}
                            number={125}
                            src={dash1}
                            text={<Link href="#">See All</Link>}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Sold Ammount"}
                            number={(12, 954)}
                            src={dash2}
                            text={<Link href="#">See All</Link>}
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
                </Box>
                <Grid container>
                    <Grid item lg={10}>
                        <Box className={classes.root}>
                            <Grid
                                container
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <Grid item lg={2} xs={3}>
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
                                </Grid>
                            </Grid>
                            <Box mb={3} className={classes.bus}>
                                <Bus />
                            </Box>
                            <Box mb={3} className={classes.bus}>
                                <Bus />
                            </Box>
                            <Box mb={3} className={classes.bus}>
                                <Bus />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;
