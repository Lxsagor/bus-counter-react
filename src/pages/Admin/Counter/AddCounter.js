import {
    Autocomplete,
    Button,
    Chip,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { addCounter } from "../../../store/actions/Admin/counterAction";
import {
    fetchDistrictsByDivision,
    fetchDivisions,
} from "../../../store/actions/sharedAction.js";
import { useStyles } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { COUNTER_VALIDATE_ERROR, ERROR } from "../../../store/types";
import { AdminUrl } from "../../../constants/urls";
import { useHistory } from "react-router-dom";
import { BeatLoader } from "react-spinners";

const AddCounter = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { error } = useSelector((state) => state.counter);
    const { divisions, districts } = useSelector((state) => state.shared);
    const { buttonLoading } = useSelector((state) => state.shared);
    const [formData, setFormData] = useState({
        division_id: null,
        district_id: null,
        name: "",
        manager_name: "",
        phone: "",
        password: "",
    });
    const [errors, setErrors] = useState({
        division_id: { text: "", show: false },
        district_id: { text: "", show: false },
        name: { text: "", show: false },

        manager_name: { text: "", show: false },
        phone: { text: "", show: false },
        password: { text: "", show: false },
    });

    useEffect(() => {
        dispatch(fetchDivisions());
    }, [dispatch]);

    const fieldChangeHandler = (field, value) => {
        if (field === "division_id") {
            setFormData((prevState) => ({
                ...prevState,
                [field]: value,
                district_id: null,
            }));
        } else {
            setErrors((prevState) => ({
                ...prevState,
                [field]: { text: "", show: false },
            }));
            setFormData((prevState) => ({
                ...prevState,
                [field]: value,
            }));
        }
    };
    useEffect(() => {
        if (formData.division_id) {
            dispatch(fetchDistrictsByDivision(formData.division_id.id));
        }
    }, [dispatch, formData.division_id]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (
            formData.division_id &&
            Object.keys(formData.division_id).length > 0
        ) {
            formData["division_id"] = formData.division_id.id;
        }

        if (
            formData.district_id &&
            Object.keys(formData.district_id).length > 0
        ) {
            formData["district_id"] = formData.district_id.id;
        }
        console.log(formData);
        dispatch(
            addCounter(formData, () =>
                history.push(AdminUrl.manageCounter.index)
            )
        );
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
        return () => {
            dispatch({
                type: COUNTER_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    return (
        <>
            <form onSubmit={submitHandler}>
                <Box m={5}>
                    <Typography variant="h6">Add Counter</Typography>
                    <Box
                        mb={3}
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                    <Grid container spacing={6}>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Division</Typography>
                            <Autocomplete
                                options={divisions}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={formData.division_id}
                                onChange={(e, data) =>
                                    fieldChangeHandler("division_id", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Division"
                                        fullWidth
                                        className={classes.field}
                                        error={errors.division_id.show}
                                        helperText={errors.division_id.text}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>District</Typography>
                            <Autocomplete
                                options={districts}
                                optionLabel="name"
                                getOptionLabel={(option) => option.name}
                                value={formData.district_id}
                                onChange={(e, data) =>
                                    fieldChangeHandler("district_id", data)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="District"
                                        fullWidth
                                        className={classes.field}
                                        error={errors.district_id.show}
                                        helperText={errors.district_id.text}
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Counter Name</Typography>
                            <TextField
                                fullWidth
                                className={classes.field}
                                value={formData.name}
                                onChange={(e) =>
                                    fieldChangeHandler("name", e.target.value)
                                }
                                error={errors.name.show}
                                helperText={errors.name.text}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Counter Manager Name</Typography>
                            <TextField
                                fullWidth
                                className={classes.field}
                                value={formData.manager_name}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "manager_name",
                                        e.target.value
                                    )
                                }
                                error={errors.manager_name.show}
                                helperText={errors.manager_name.text}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Phone Number</Typography>
                            <TextField
                                fullWidth
                                className={classes.field}
                                value={formData.phone}
                                onChange={(e) =>
                                    fieldChangeHandler("phone", e.target.value)
                                }
                                error={errors.phone.show}
                                helperText={errors.phone.text}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <Typography mb={2}>Initial Password</Typography>
                            <TextField
                                fullWidth
                                className={classes.field}
                                type="password"
                                value={formData.password}
                                onChange={(e) =>
                                    fieldChangeHandler(
                                        "password",
                                        e.target.value
                                    )
                                }
                                error={errors.password.show}
                                helperText={errors.password.text}
                            />
                        </Grid>
                        {/* <Grid item lg={4} xs={12}>
                            <Typography mb={2}>
                                Select Counters By Whome Buses Wil Go Through
                            </Typography>
                            <TextField
                                fullWidth
                                className={classes.field}
                                inputProps={{ readOnly: true }}
                            />
                            <Box mt={3} display="flex">
                                <Chip
                                    label="Kollyanpur"
                                    color="success"
                                    variant="outlined"
                                    size="medium"
                                />
                                <Chip
                                    label="Mohakhali"
                                    color="success"
                                    variant="outlined"
                                    size="medium"
                                />
                            </Box>
                        </Grid> */}
                    </Grid>

                    <Box mt={6}>
                        <Grid container spacing={2}>
                            <Grid item lg={2} xs={12}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    size="large"
                                    className={classes.editButton}
                                    type="submit"
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
                                    Add Counter
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </form>
        </>
    );
};

export default AddCounter;
