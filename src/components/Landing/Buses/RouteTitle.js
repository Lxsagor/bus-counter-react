import { Icon } from "@iconify/react";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDistricts } from "../../../store/actions/sharedAction";
import { useStyles } from "./styled";

const RouteTitle = () => {
    // const { coaches } = useSelector((state) => state.ticket);
    const { searchCoach } = useSelector((state) => state.ticket);

    const dispatch = useDispatch();
    const [location, setLocation] = useState({
        start: "",
        end: "",
    });
    useEffect(() => {
        let search = JSON.parse(localStorage.getItem("searchPayload")) || null;
        if (search) {
            setLocation((prevState) => ({
                ...prevState,
                start: search?.start_location?.name,
                end: search?.end_location?.name,
            }));
        }
    }, []);

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
                                        {location.start} To {location.end}
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
