import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {
    Autocomplete,
    Button,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { LandingUrl } from "../../../constants/urls";
import { fetchDistricts } from "../../../store/actions/sharedAction";
import { searchCoach } from "../../../store/actions/User/userActions";
import { useStyles } from "./styled";
import moment from "moment";

const Search = () => {
    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();
    const { districts, buttonLoading } = useSelector((state) => state.shared);
    const [location, setLocation] = useState({
        start_location: null,
        end_location: null,
        journey_date: null,
        return_date: null,
    });
    useEffect(() => {
        dispatch(fetchDistricts());
    }, [dispatch]);

    const fieldChangeHandler = (field, value) => {
        setLocation((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const searchHandler = (e) => {
        e.preventDefault();
        let formData = { ...location };
        if (
            formData.start_location &&
            Object.keys(formData.start_location).length > 0
        ) {
            formData["start_location"] = formData.start_location.id;
        }
        if (
            formData.end_location &&
            Object.keys(formData.end_location).length > 0
        ) {
            formData["end_location"] = formData.end_location.id;
        }

        dispatch(
            searchCoach(formData, () => {
                localStorage.setItem("searchPayload", JSON.stringify(location));
                let url =
                    LandingUrl.landing.buses +
                    `?start_location=${
                        location?.start_location?.id
                    }&end_location=${
                        location?.end_location?.id
                    }&journey_date=${moment(location.journey_date).format(
                        "DD/MM/YYYY"
                    )}`;
                history.push(url);
            })
        );
    };
    console.log(location);
    return (
        <>
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
                            options={districts}
                            optionLabel="name"
                            getOptionLabel={(option) => option.name}
                            value={location.start_location}
                            onChange={(e, data) =>
                                fieldChangeHandler("start_location", data)
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item lg={3} xs={6}>
                        <Typography mb={2} color="primary">
                            To
                        </Typography>
                        <Autocomplete
                            options={districts}
                            optionLabel="name"
                            getOptionLabel={(option) => option.name}
                            value={location.end_location}
                            onChange={(e, data) =>
                                fieldChangeHandler("end_location", data)
                            }
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    className={classes.field}
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
                                onChange={(newValue) =>
                                    fieldChangeHandler("journey_date", newValue)
                                }
                                value={location.journey_date}
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
                                onChange={(newValue) =>
                                    fieldChangeHandler("return_date", newValue)
                                }
                                value={location.return_date}
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
                        onClick={searchHandler}
                        {...(buttonLoading && {
                            disabled: true,
                            startIcon: (
                                <BeatLoader
                                    color="white"
                                    loading={true}
                                    size={10}
                                />
                            ),
                        })}
                    >
                        Search Buses
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default Search;
