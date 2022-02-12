import { Icon } from "@iconify/react";
import { Container, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import RouteTitle from "../../components/Landing/Buses/RouteTitle";
import { useStyles } from "./styled";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PaymentCard from "../../components/Landing/PaymentCard/PaymentCard";
import PaymentAccept from "../../components/Landing/Home/PaymentAccept";

const TicketPayment = () => {
    const classes = useStyles();
    return (
        <>
            <RouteTitle />
            <Box py={3}>
                <Container maxWidth="lg">
                    <Box className={classes.icon}>
                        <Box className={classes.iconRoute}>
                            <LocationOnIcon />
                            <Typography variant="h6" ml={2}>
                                Dhaka
                            </Typography>
                        </Box>

                        <Grid container justifyContent="space-between" p={5}>
                            <Grid item lg={4}>
                                <Box className={classes.routeF}>
                                    <Typography variant="body1" p={1}>
                                        Deprature:
                                    </Typography>
                                    <Typography variant="body2" p={1}>
                                        10:00 AM
                                    </Typography>
                                </Box>
                                <Box className={classes.routeF}>
                                    <Typography variant="body1" p={1}>
                                        Arrival:
                                    </Typography>
                                    <Typography variant="body2" p={1}>
                                        10:00 AM
                                    </Typography>
                                </Box>
                                <Box className={classes.routeF}>
                                    <Typography variant="body1" p={1}>
                                        Passenger Name:
                                    </Typography>
                                    <Typography variant="body2" p={1}>
                                        John Doe
                                    </Typography>
                                </Box>
                                <Box className={classes.routeF}>
                                    <Typography variant="body1" p={1}>
                                        Reporting Time:
                                    </Typography>
                                    <Typography variant="body2" p={1}>
                                        09:30 AM
                                    </Typography>
                                </Box>
                                <Box className={classes.routeF}>
                                    <Typography variant="body1" p={1}>
                                        Deprature Time:
                                    </Typography>
                                    <Typography variant="body2" p={1}>
                                        09:30 AM
                                    </Typography>
                                </Box>
                            </Grid>
                            <Grid item lg={4}>
                                <Typography variant="body2" mb={3} pl={1}>
                                    PNR: 011213574687314
                                </Typography>

                                <Box className={classes.coachName} mb={3}>
                                    <Typography>Coach Type: AC</Typography>
                                </Box>
                                <Box className={classes.seatName}>
                                    <Typography>B3</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box className={classes.iconRoute} mb={5}>
                            <LocationOnIcon />
                            <Typography variant="h6" ml={2}>
                                Rangpur
                            </Typography>
                        </Box>
                    </Box>
                    <Box my={5}>
                        <Typography>
                            <strong>Pay Using</strong>
                        </Typography>
                        <Box className={classes.payCard} my={2}>
                            <Container maxWidth="sm">
                                <Grid container spacing={2}>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>{" "}
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                    <Grid item lg={2}>
                                        <PaymentCard />
                                    </Grid>
                                </Grid>
                            </Container>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    );
};

export default TicketPayment;
