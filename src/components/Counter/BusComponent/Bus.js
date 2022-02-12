import {
    Avatar,
    Button,
    Container,
    Divider,
    Fade,
    Grid,
    Slide,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState } from "react";
import { useStyles } from "./styled";
import Busimage from "../../../assets/bus.png";
import Available from "../../../assets/available.png";
import Booked from "../../../assets/booked.png";
import Selected from "../../../assets/selected.png";
import { Icon } from "@iconify/react";
import BusSeat from "./BusSeat";
import BusTicket from "./BusTicket";

const Bus = () => {
    const classes = useStyles();

    const [collapseStatus, setCollapseStatus] = useState(false);

    return (
        <>
            <Grid container justifyContent="space-between">
                <Grid item lg={2} xs={2}>
                    <Box mt={2} ml={2}>
                        <Typography>Bus No: Ka-5613</Typography>
                    </Box>
                </Grid>
                <Grid item lg={2} xs={2}>
                    <Box mt={2} mr={2}>
                        <Typography>Seat Avalability 12</Typography>
                    </Box>
                </Grid>
            </Grid>

            <Box mt={3} mb={3}>
                <Box mb={3} mt={2} ml={2}>
                    <Typography style={{ opacity: 0.5 }}>From</Typography>
                </Box>

                <Grid container alignItems="center" spacing={3}>
                    <Grid item lg={2}>
                        <Box className={classes.track}>
                            <Typography className={classes.coach}>
                                Non Ac Coach
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={8}>
                        <Grid
                            container
                            justifyContent="space-evenly"
                            alignItems="center"
                        >
                            <Grid item>
                                <Typography variant="h5">Dhaka</Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Divider>
                                    <Avatar
                                        src={Busimage}
                                        alt="bus"
                                        sx={{
                                            width: "34px",
                                            height: "23px",
                                            borderRadius: 0,
                                        }}
                                    />
                                </Divider>
                            </Grid>
                            <Grid item lg={2}>
                                <Typography variant="h5">Jessore</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() => setCollapseStatus(!collapseStatus)}
                        >
                            View Seats
                        </Button>
                    </Grid>
                </Grid>
                <Box mt={3} mb={2}>
                    <Box mb={2} mt={2} ml={2}>
                        <Typography variant="h6">
                            Departure: 10:00 AM
                        </Typography>
                    </Box>
                    <Box mb={2} pb={2} ml={2}>
                        <Typography variant="h6">Arrival: 06:00 PM</Typography>
                    </Box>
                </Box>
            </Box>

            {collapseStatus && <BusSeat />}
        </>
    );
};

export default Bus;
