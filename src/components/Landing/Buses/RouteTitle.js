import { Icon } from "@iconify/react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styled";

const RouteTitle = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.busesroot} my={6}>
                <Container maxWidth="xl">
                    <Box className={classes.main} py={2}>
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
        </>
    );
};

export default RouteTitle;
