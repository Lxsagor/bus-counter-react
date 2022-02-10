import AdapterDateFns from "@mui/lab/AdapterDateFns";
import DatePicker from "@mui/lab/DatePicker";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {
    Box,
    Button,
    Dialog,
    DialogContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCompany } from "../../../store/actions/companyAction";
import { useStyles } from "./styled";
import AddUserDialog from "../../../components/AddUserDialog";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
import { SuperAdminUrl } from "../../../constants/urls";
import { ERROR } from "./../../../store/types";

const AddCompany = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { error } = useSelector((state) => state.company);
    const [addUserDialog, setAddUserDialog] = React.useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        no_of_counters: "",
        sub_start_date: null,
        sub_end_date: null,
    });
    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        email: { text: "", show: false },
        phone: { text: "", show: false },
        no_of_counters: { text: "", show: false },
        sub_start_date: { text: "", show: false },
        sub_end_date: { text: "", show: false },
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
        dispatch(
            addCompany(
                formData,

                () => history.push(SuperAdminUrl.manageCompany.index)
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
                type: ERROR,
                payload: null,
            });
        };
    }, [dispatch]);

    // const [values, setValues] = React.useState({
    //     password: "",
    //     date: null,
    //     showPassword: false,
    // });
    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };

    // const handleClickShowPassword = () => {
    //     setValues({
    //         ...values,
    //         showPassword: !values.showPassword,
    //     });
    // };

    // const handleMouseDownPassword = (event) => {
    //     event.preventDefault();
    // };
    return (
        <>
            {/* <Container> */}
            <Box m={3}>
                <Typography variant="h6">Adding Company</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <form onSubmit={submitHandler}>
                    <Grid container>
                        <Grid item lg={9}>
                            <Grid container spacing={4}>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Typography>Company Name</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        value={formData.name}
                                        error={errors.name.show}
                                        helperText={errors.name.text}
                                    />
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Typography>Email</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        value={formData.email}
                                        error={errors.email.show}
                                        helperText={errors.email.text}
                                    />
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Typography>Phone</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        value={formData.phone}
                                        error={errors.phone.show}
                                        helperText={errors.phone.text}
                                    />
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Typography>
                                        Number Of User (Max)
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "no_of_counters",
                                                e.target.value
                                            )
                                        }
                                        value={formData.no_of_counters}
                                        error={errors.no_of_counters.show}
                                        helperText={errors.no_of_counters.text}
                                    />
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Typography>
                                        Subscription Start Date
                                    </Typography>

                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            inputFormat="MM/dd/yyyy"
                                            value={formData.sub_start_date}
                                            onChange={(newValue) =>
                                                fieldChangeHandler(
                                                    "sub_start_date",
                                                    newValue
                                                )
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    className={classes.field}
                                                    error={
                                                        errors.sub_start_date
                                                            .show
                                                    }
                                                    helperText={
                                                        errors.sub_start_date
                                                            .text
                                                    }
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item lg={4} md={6} xs={12}>
                                    <Typography>
                                        Subscription End Date
                                    </Typography>

                                    <LocalizationProvider
                                        dateAdapter={AdapterDateFns}
                                    >
                                        <DatePicker
                                            inputFormat="MM/dd/yyyy"
                                            value={formData.sub_end_date}
                                            onChange={(newValue) =>
                                                fieldChangeHandler(
                                                    "sub_end_date",
                                                    newValue
                                                )
                                            }
                                            renderInput={(params) => (
                                                <TextField
                                                    {...params}
                                                    fullWidth
                                                    className={classes.field}
                                                    error={
                                                        errors.sub_end_date.show
                                                    }
                                                    helperText={
                                                        errors.sub_end_date.text
                                                    }
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Box mt={5}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                textTransform: "initial",
                                borderRadius: "8px",
                            }}
                            type="submit"
                        >
                            Add User
                        </Button>
                    </Box>
                    {/* <Dialog
                        maxWidth="sm"
                        open={addUserDialog}
                        onClose={() => setAddUserDialog(false)}
                    >
                        <DialogContent>
                            <AddUserDialog />
                        </DialogContent>
                    </Dialog> */}
                </form>
            </Box>

            {/* </Container> */}
        </>
    );
};

export default AddCompany;
