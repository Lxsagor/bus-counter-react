import { Button, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styled";

const BusComp = () => {
    const classes = useStyles();
    return (
        <>
            <Container maxWidth="md">
                <Box p={3} className={classes.busComp}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Typography>SR Travels</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>10:00 PM</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>06:00 PM</Typography>
                        </Grid>
                        <Grid item>
                            <Typography>$800</Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent="space-between"
                        alignItems="flex-end"
                    >
                        <Grid item lg={2}>
                            <Box className={classes.routeDetails}>
                                <Typography>Route:</Typography>
                                <Typography>Dhaka-Bogura-Rangpur</Typography>
                                <Typography>Start:Dhaka</Typography>

                                <Typography>Last Destination:</Typography>
                                <Typography>Rangpur</Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={2}>
                            <Button fullWidth variant="contained">
                                Book Ticket
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    );
};

export default BusComp;
