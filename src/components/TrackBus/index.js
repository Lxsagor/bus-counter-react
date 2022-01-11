import { Avatar, Button, Divider, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Bus from "../../assets/track.png";
import Map from "../../assets/map.png";
import { useStyles } from "./styled";

const TrackBus = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={2}>
                <Grid container justifyContent="space-between">
                    <Grid item lg={2} xs={2}>
                        <Typography>Bus No: Ka-5613</Typography>
                    </Grid>
                    <Grid item lg={2} xs={2}>
                        <Typography>Seat Avalability 12</Typography>
                    </Grid>
                </Grid>

                <Box mt={3}>
                    <Grid container alignItems="center">
                        <Grid item lg={2}>
                            <Typography>Non Ac Coach</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="h4">Dhaka</Typography>
                        </Grid>
                        <Grid item lg={4}>
                            <Divider>
                                <Avatar
                                    src={Bus}
                                    alt="bus"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 0,
                                    }}
                                />
                            </Divider>
                        </Grid>
                        <Grid item lg={2}>
                            <Typography variant="h4">Jessore</Typography>
                        </Grid>
                        <Grid item lg={2} className={classes.button}>
                            <Button variant="contained" size="large">
                                View Seats
                            </Button>
                        </Grid>
                    </Grid>
                    <Box mt={2}>
                        <Typography variant="h6">
                            Departure: 10:00 AM
                        </Typography>
                        <Typography variant="h6">Arrival: 06:00 PM</Typography>
                        <Divider />
                    </Box>
                    <Grid container justifyContent="center" alignItems="center">
                        <Grid item lg={5}>
                            <Box mt={5}>
                                <Avatar
                                    src={Map}
                                    alt="map"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 0,
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default TrackBus;
