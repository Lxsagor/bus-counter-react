import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useStyles } from "../SuperAdmin/Contact/styled";
import { useSelector } from "react-redux";
import moment from "moment";
import { DatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useDispatch } from "react-redux";
import { COMPANY_VALIDATE_ERROR, ERROR } from "../../store/types";
import { extendSubs } from "../../store/actions/SuperAdmin/companyAction";

const ExtendSubs = ({ isControl = false, controlHandler = () => {} }) => {
    const { company, error } = useSelector((state) => state.company);
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: company.name,
        email: company.email,
        phone: company.phone,
        no_of_counters: company.no_of_counters,
        sub_start_date: company.sub_start_date,
        sub_end_date: company.sub_end_date,
        err_list: {
            name: { text: "", show: false },
            email: { text: "", show: false },
            phone: { text: "", show: false },
            no_of_counters: { text: "", show: false },
            sub_start_date: { text: "", show: false },
            sub_end_date: { text: "", show: false },
        },
    });

    const fieldChangeHandler = (field, value) => {
        setFormData((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();

        dispatch(
            extendSubs(company.id, formData, () => {
                controlHandler();
            })
        );
    };

    useEffect(() => {
        if (error && Object.keys(error).length > 0) {
            Object.keys(error).forEach((key) => {
                setFormData((prevState) => ({
                    ...prevState,
                    err_list: {
                        ...prevState.err_list,
                        [key]: { text: error[key][0], show: true },
                    },
                }));
            });
        }
    }, [error]);

    useEffect(() => {
        return () => {
            dispatch({
                type: COMPANY_VALIDATE_ERROR,
                payload: null,
            });
        };
    }, [dispatch]);
    const classes = useStyles();
    return (
        <>
            <form onSubmit={submitHandler}>
                <Box m={5}>
                    <Typography variant="h5">Extend Subscription</Typography>
                    <Box my={3} className={classes.dialog}>
                        <TextField
                            fullWidth
                            label="Company Name"
                            value={formData.name}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                    <Box mb={3} className={classes.dialog}>
                        <TextField
                            fullWidth
                            label="Email"
                            value={formData.email}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>

                    <Box mb={3} className={classes.dialog}>
                        <TextField
                            fullWidth
                            label="Phone"
                            value={formData.phone}
                            inputProps={{
                                readOnly: true,
                            }}
                        />
                    </Box>
                    <Box mb={3}>
                        <Typography>Extend Subscription Date</Typography>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                inputFormat="MM/dd/yyyy"
                                value={formData.sub_end_date}
                                onChange={(newValue) =>
                                    fieldChangeHandler("sub_end_date", newValue)
                                }
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        fullWidth
                                        className={classes.dialog}
                                        error={
                                            formData.err_list.sub_end_date.show
                                        }
                                        helperText={
                                            formData.err_list.sub_end_date.text
                                        }
                                    />
                                )}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Grid container spacing={4}>
                        <Grid item lg={4}>
                            <Button
                                size="large"
                                fullWidth
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Add
                            </Button>
                        </Grid>

                        <Grid item lg={4}>
                            {isControl && (
                                <Button
                                    size="large"
                                    fullWidth
                                    variant="outlined"
                                >
                                    <Typography
                                        color="black"
                                        onClick={controlHandler}
                                    >
                                        Cancel
                                    </Typography>
                                </Button>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </form>
        </>
    );
};

export default ExtendSubs;
