import { Typography, Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { fetchBus, updateBus } from "../../../store/actions/counterAction";
import { ERROR } from "../../../store/types";
import { useStyles } from "./styled";

const EditBusInfo = () => {
    const classes = useStyles();
    const history = useHistory();
    const { bus, error } = useSelector((state) => state.counter);
    const { id } = useParams();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        bus_no: bus.bus_no,
        bus_reg_no: bus.bus_reg_no,
        chesis_no: bus.chesis_no,
        bus_type: bus.bus_type,
        total_seat: bus.total_seat,
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
                updateBus(id, formData, () =>
                    history.push(AdminUrl.manageBus.index)
                )
            );
        }
    };

    useEffect(() => {
        if (id) {
            dispatch(fetchBus(id));
        }
    }, [dispatch, id]);

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
                <Typography variant="h6">Edit Bus</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={4}>
                    <Grid container>
                        <Grid item lg={8} xs={12}>
                            <Box className={classes.title}>
                                <Typography ml={3} className={classes.busno}>
                                    <strong>BUS NO :</strong> {bus.bus_reg_no}
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
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
                                    placeholder={bus.bus_no}
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
                                    Save
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default EditBusInfo;
