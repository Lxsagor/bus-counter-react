import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { SuperAdminUrl } from "../../../constants/urls";
import { addAdmin, fetchCompany } from "../../../store/actions/companyAction";
import { ERROR } from "../../../store/types";
import { useStyles } from "./styled";

const AddAdmin = () => {
    const { company, error } = useSelector((state) => state.company);
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company_id: company.id,
        password: "",
    });
    const [errors, setErrors] = useState({
        name: { text: "", show: false },
        email: { text: "", show: false },
        phone: { text: "", show: false },
        password: { text: "", show: false },
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
            addAdmin(company.id, formData, () =>
                history.push(
                    SuperAdminUrl.manageCompany.view.replace(":id", company.id)
                )
            )
        );
    };
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchCompany(id));
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
    const classes = useStyles();
    return (
        <>
            <Box m={3}>
                <Typography variant="h6">Add Admin</Typography>
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
                        <Grid item lg={6}>
                            <Grid container spacing={4}>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Company Name</Typography>
                                    <TextField
                                        className={classes.field}
                                        value={company.name}
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Number of User</Typography>
                                    <TextField
                                        className={classes.field}
                                        fullWidth
                                        value={company.no_of_counters}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Admin Name</Typography>
                                    <TextField
                                        value={formData.name}
                                        className={classes.field}
                                        fullWidth
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "name",
                                                e.target.value
                                            )
                                        }
                                        error={errors.name.show}
                                        helperText={errors.name.text}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Email</Typography>
                                    <TextField
                                        value={formData.email}
                                        className={classes.field}
                                        fullWidth
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "email",
                                                e.target.value
                                            )
                                        }
                                        error={errors.email.show}
                                        helperText={errors.email.text}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Phone</Typography>
                                    <TextField
                                        value={formData.phone}
                                        className={classes.field}
                                        fullWidth
                                        onChange={(e) =>
                                            fieldChangeHandler(
                                                "phone",
                                                e.target.value
                                            )
                                        }
                                        error={errors.phone.show}
                                        helperText={errors.phone.text}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Password</Typography>
                                    <TextField
                                        type="password"
                                        value={formData.password}
                                        className={classes.field}
                                        fullWidth
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

                                <Grid item lg={6} xs={12}>
                                    <Typography>Last subscription </Typography>
                                    <TextField
                                        value={moment(
                                            company.sub_start_date
                                        ).format("M/D/Y")}
                                        className={classes.fieldlast}
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Next subscription </Typography>
                                    <TextField
                                        value={moment(
                                            company.sub_end_date
                                        ).format("M/D/Y")}
                                        className={classes.fieldnext}
                                        fullWidth
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            textTransform: "initial",
                                            borderRadius: "8px",
                                            minHeight: "55px",
                                        }}
                                        type="submit"
                                    >
                                        Add Admin
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </>
    );
};

export default AddAdmin;