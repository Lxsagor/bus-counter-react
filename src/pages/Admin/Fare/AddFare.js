import {
    Autocomplete,
    Box,
    TextField,
    Typography,
    Grid,
    Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { AdminUrl } from "../../../constants/urls";
import { fetchDistricts } from "../../../store/actions/sharedAction";
import {
    addFare,
    fetchFare,
    updateFare,
} from "../../../store/actions/Admin/fareActions";
import { FETCH_FARE, FARE_VALIDATE_ERROR } from "../../../store/types";
import { useStyles } from "./styled";

const Fare = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { districts } = useSelector((state) => state.shared);
    const { fare } = useSelector((state) => state.fare);
    const { error } = useSelector((state) => state.fare);
    const classes = useStyles();
    const [formData, setFormData] = useState({
        starting_district_id: null,
        destination_district_id: null,
        fare: "",
    });

    const [errors, setErrors] = useState({
        starting_district_id: { text: "", show: false },
        destination_district_id: { text: "", show: false },
        fare: { text: "", show: false },
    });
    const { id } = useParams();
    const { buttonLoading } = useSelector((state) => state.shared);

    const fieldChangeHandler = (field, value) => {
        setErrors((prevState) => ({
            ...prevState,
            [field]: { text: "", show: false },
        }));
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };
    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            Object.keys(error).forEach((key) => {
                setErrors((prevState) => ({
                    ...prevState,
                    [key]: { text: error[key][0], show: true },
                }));
            });
        }
    }, [error]);
    useEffect(() => {
        if (id) {
            dispatch(fetchFare(id));
        }
    }, [dispatch, id]);

    useEffect(() => {
        if (fare && Object.keys(fare).length > 0) {
            let data = {
                ...fare,
                starting_district_id: fare.start_point,
                destination_district_id: fare.destination_point,
                fare: fare.fare,
            };

            setFormData((prevState) => ({
                ...prevState,
                ...data,
            }));
        }
    }, [fare]);

    useEffect(() => {
        dispatch(fetchDistricts());
    }, [dispatch]);

    useEffect(() => {
        return () => {
            dispatch({
                type: FARE_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_FARE,
                payload: {},
            });
        };
    }, [dispatch]);
    const submitHandler = (e) => {
        e.preventDefault();
        let form = { ...formData };

        if (
            formData.starting_district_id &&
            formData.starting_district_id.hasOwnProperty("id")
        ) {
            form["starting_district_id"] = formData.starting_district_id.id;
        }
        if (
            formData.destination_district_id &&
            formData.destination_district_id.hasOwnProperty("id")
        ) {
            form["destination_district_id"] =
                formData.destination_district_id.id;
        }
        if (form.hasOwnProperty("id")) {
            dispatch(
                updateFare(form, () => history.push(AdminUrl.manageFare.index))
            );
        } else {
            dispatch(
                addFare(form, () => history.push(AdminUrl.manageFare.index))
            );
        }
    };
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">
                    {formData.hasOwnProperty("id") ? "Update Fare" : "Add Fare"}
                </Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form onSubmit={submitHandler}>
                    <Box mt={3}>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography mb={2}>
                                    Select Starting Point
                                </Typography>
                                <Autocomplete
                                    options={districts}
                                    optionLabel="name"
                                    getOptionLabel={(option) => option.name}
                                    value={formData.starting_district_id}
                                    onChange={(e, data) =>
                                        fieldChangeHandler(
                                            "starting_district_id",
                                            data
                                        )
                                    }
                                    error={errors.starting_district_id.show}
                                    helperText={
                                        errors.starting_district_id.text
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
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography mt={4} mb={2}>
                                    Select Destination Point
                                </Typography>
                                <Autocomplete
                                    options={districts}
                                    optionLabel="name"
                                    getOptionLabel={(option) => option.name}
                                    value={formData.destination_district_id}
                                    onChange={(e, data) =>
                                        fieldChangeHandler(
                                            "destination_district_id",
                                            data
                                        )
                                    }
                                    error={errors.destination_district_id.show}
                                    helperText={
                                        errors.destination_district_id.text
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
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item lg={4} xs={12}>
                                <Typography mt={4} mb={2}>
                                    Fare
                                </Typography>
                                <TextField
                                    fullWidth
                                    className={classes.field}
                                    value={formData.fare}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "fare",
                                            e.target.value
                                        )
                                    }
                                    error={errors.fare.show}
                                    helperText={errors.fare.text}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={4}>
                            <Grid container>
                                <Grid item lg={2}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        type="submit"
                                        className={classes.btn}
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
                                        {formData.hasOwnProperty("id")
                                            ? "Update Fare"
                                            : "Add Fare"}
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </form>
            </Box>
        </>
    );
};

export default Fare;
