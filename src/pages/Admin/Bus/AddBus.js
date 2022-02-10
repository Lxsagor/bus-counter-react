import { TextField, Typography, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { addBus } from "../../../store/actions/counterAction";
import { ERROR } from "../../../store/types";
import { useStyles } from "./styled";

const AddBus = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { error } = useSelector((state) => state.counter);
    const [formData, setFormData] = useState({
        bus_no: "",
        bus_reg_no: "",
        chesis_no: "",
        bus_type: "",
        total_seat: "",
    });
    const [errors, setErrors] = useState({
        bus_no: { text: "", show: false },
        bus_reg_no: { text: "", show: false },
        chesis_no: { text: "", show: false },
        bus_type: { text: "", show: false },
        total_seat: { text: "", show: false },
    });

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

    const submitHandler = (e) => {
        e.preventDefault();
        if (formData.bus_no === "") {
            setErrors((prevState) => ({
                ...prevState,
                bus_no: { text: "Bus no not valid", show: true },
            }));
        } else if (formData.bus_reg_no === "") {
            setErrors((prevState) => ({
                ...prevState,
                bus_reg_no: {
                    text: "Bus registration number not valid",
                    show: true,
                },
            }));
        } else if (formData.chesis_no === "") {
            setErrors((prevState) => ({
                ...prevState,
                chesis_no: {
                    text: "Bus chesis number not valid",
                    show: true,
                },
            }));
        } else {
            dispatch(
                addBus(formData, () => history.push(AdminUrl.manageBus.index))
            );
        }
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
                type: ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Add Bus</Typography>
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
                        <Grid container spacing={6}>
                            <Grid item lg={4} xs={12}>
                                <Typography mb={2}>Bus No</Typography>
                                <TextField
                                    fullWidth
                                    className={classes.field}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "bus_no",
                                            e.target.value
                                        )
                                    }
                                    value={formData.bus_no}
                                    error={errors.bus_no.show}
                                    helperText={errors.bus_no.text}
                                />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Typography mb={2}>
                                    Bus Registration No
                                </Typography>
                                <TextField
                                    fullWidth
                                    className={classes.field}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "bus_reg_no",
                                            e.target.value
                                        )
                                    }
                                    value={formData.bus_reg_no}
                                    error={errors.bus_reg_no.show}
                                    helperText={errors.bus_reg_no.text}
                                />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Typography mb={2}>Chesis No</Typography>
                                <TextField
                                    fullWidth
                                    className={classes.field}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "chesis_no",
                                            e.target.value
                                        )
                                    }
                                    value={formData.chesis_no}
                                    error={errors.chesis_no.show}
                                    helperText={errors.chesis_no.text}
                                />
                            </Grid>{" "}
                            <Grid item lg={4} xs={12}>
                                <Typography mb={2}>Bus Type</Typography>
                                <TextField
                                    fullWidth
                                    className={classes.field}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "bus_type",
                                            e.target.value
                                        )
                                    }
                                    value={formData.bus_type}
                                    error={errors.bus_type.show}
                                    helperText={errors.bus_type.text}
                                />
                            </Grid>
                            <Grid item lg={4} xs={12}>
                                <Typography mb={2}>Total Seat</Typography>
                                <TextField
                                    fullWidth
                                    className={classes.field}
                                    onChange={(e) =>
                                        fieldChangeHandler(
                                            "total_seat",
                                            e.target.value
                                        )
                                    }
                                    value={formData.total_seat}
                                    error={errors.total_seat.show}
                                    helperText={errors.total_seat.text}
                                />
                            </Grid>
                        </Grid>
                    </Box>
                    <Grid container>
                        <Grid item lg={2}>
                            <Box mt={7}>
                                <Button
                                    fullWidth
                                    size="large"
                                    variant="contained"
                                    className={classes.button}
                                    type="submit"
                                >
                                    Add Bus
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default AddBus;