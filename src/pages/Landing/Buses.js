import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";
import BusComp from "../../components/Landing/Buses/BusComp";

const Buses = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.busesroot}>
                <Container maxWidth="xl">
                    <Box className={classes.main} my={9}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Grid item lg={3} xs={6}>
                                <Typography
                                    variant="body1"
                                    pl={3}
                                    className={classes.routeText}
                                >
                                    Showing Buses
                                </Typography>
                            </Grid>
                            <Grid item lg={3} xs={6}>
                                <Box className={classes.route}>
                                    <Icon icon="fa-solid:route" />
                                    <Typography
                                        variant="body1"
                                        mx={2}
                                        className={classes.routeText}
                                    >
                                        Dhaka To Rangpur
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
            <Box className={classes.busComp} my={3}>
                <BusComp />
            </Box>
            <Box className={classes.busComp} my={3}>
                <BusComp />
            </Box>
            <Box className={classes.busComp} my={3}>
                <BusComp />
            </Box>
            <Box className={classes.busComp} my={3}>
                <BusComp />
            </Box>
            <Box className={classes.busComp} my={3}>
                <BusComp />
            </Box>
        </>
    );
};

export default Buses;
