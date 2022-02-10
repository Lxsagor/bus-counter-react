import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import {
    Autocomplete,
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { useStyles } from "./styled";
import { LandingUrl } from "../../../constants/urls";
import { useHistory } from "react-router-dom";

const Hero = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <Box pt={7} pl={3}>
                <Box className={classes.heroTop}>
                    <Typography
                        variant="body2"
                        color="white"
                        className={classes.stop}
                    >
                        Stop Looking
                    </Typography>
                    <Typography
                        variant="body2"
                        color="primary"
                        className={classes.stop}
                        mb={3}
                    >
                        Start Tracking
                    </Typography>
                    <Typography
                        varinat="body2"
                        color="white"
                        className={classes.subtext}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Convallis amet sem quam egestas at arcu quis proin
                        nulla. Sollicitudin turpis imperdiet sed venenatis dui
                        ultrices vitae ac. Ultrices lorem feugiat in sem nunc
                        proin. Et vitae massa nec sit.
                    </Typography>
                </Box>

                <Box mt={7} className={classes.ticketOption}>
                    <Grid
                        container
                        spacing={3}
                        alignItems="center"
                        justifyContent="space-around"
                        px={5}
                        pt={1}
                        pb={6}
                    >
                        <Grid item lg={3} xs={6}>
                            <Typography mb={2} color="primary">
                                From
                            </Typography>
                            <Autocomplete
                                className={classes.field}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        placeholder="Select City"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={3} xs={6}>
                            <Typography mb={2} color="primary">
                                To
                            </Typography>
                            <Autocomplete
                                className={classes.field}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        placeholder="Select City"
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={3} xs={6}>
                            <Typography mb={2} color="primary">
                                Date Of Journey
                            </Typography>
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
                        <Grid item lg={3} xs={6}>
                            <Typography mb={2} color="primary" variant="body2">
                                Date of Return <span>(Optional)</span>
                            </Typography>
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
                    </Grid>
                </Box>
                <Grid container justifyContent="center" mt={4}>
                    <Grid item lg={2}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.srchBtn}
                            onClick={() =>
                                history.push(LandingUrl.landing.buses.replace())
                            }
                        >
                            Search Buses
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Hero;
