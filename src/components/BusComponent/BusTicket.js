import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styled";

const BusTicket = () => {
    const classes = useStyles();
    return (
        <>
            <Divider />
            <Box ml={2} mt={2}>
                <Grid container justifyContent="space-between">
                    <Grid item lg={6} xs={12}>
                        <Grid container>
                            <Grid item lg={4} xs={6}>
                                <Typography
                                    mb={3}
                                    variant="body2"
                                    className={classes.ticket}
                                >
                                    Passenger Name:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    mb={3}
                                    className={classes.ticket}
                                >
                                    Phone Number:
                                </Typography>
                            </Grid>
                            <Grid item lg={5} xs={4}>
                                <Typography variant="body2" mb={3}>
                                    John Doe
                                </Typography>
                                <Typography variant="body2" mb={3}>
                                    +8017-95929461
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2} xs={12}>
                        <Typography className={classes.pnrFont}>
                            DTR- 125411234
                        </Typography>
                    </Grid>
                </Grid>
            </Box>

            <Divider />
            <Box mx={2} mt={2}>
                <Grid
                    container
                    justifyContent="space-between"
                    alignItems="flex-end"
                >
                    <Grid item lg={6} xs={12}>
                        <Grid container>
                            <Grid item lg={4} xs={6}>
                                <Typography
                                    mb={3}
                                    variant="body2"
                                    className={classes.ticket}
                                >
                                    Boarding Point:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    mb={3}
                                    className={classes.ticket}
                                >
                                    Destination:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    mb={3}
                                    className={classes.ticket}
                                >
                                    Reporting Time:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    mb={3}
                                    className={classes.ticket}
                                >
                                    Departure Time:
                                </Typography>
                                <Typography
                                    variant="body2"
                                    mb={3}
                                    className={classes.ticket}
                                >
                                    Seat No:
                                </Typography>
                            </Grid>
                            <Grid item lg={6} xs={4}>
                                <Typography variant="body2" mb={3}>
                                    Gabtoli Counter-1
                                </Typography>
                                <Typography variant="body2" mb={3}>
                                    Jessore
                                </Typography>
                                <Typography variant="body2" mb={3}>
                                    9:30 AM
                                </Typography>
                                <Typography variant="body2" mb={3}>
                                    10:00 AM
                                </Typography>
                                <Typography variant="body2" mb={3}>
                                    A3, A4
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item lg={2} xs={3}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.pdfBtn}
                        >
                            Print Ticket
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default BusTicket;
