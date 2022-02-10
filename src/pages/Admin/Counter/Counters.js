import AddIcon from "@mui/icons-material/Add";
import {
    Autocomplete,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    TextField,
    Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import {
    fetchCounters,
    fetchDistrictsByDivision,
    fetchDivisions,
    searchCompany,
} from "../../../store/actions/counterAction";
import { FETCH_DISTRICTS, FETCH_DIVISIONS } from "../../../store/types";
import { useStyles } from "./styled";

const Counters = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { counters } = useSelector((state) => state.counter);
    const [formData, setFormData] = useState({
        division_id: null,
        district_id: null,
    });
    const { divisions, districts } = useSelector((state) => state.counter);

    const fieldChangeHandler = (field, value) => {
        if (field === "division_id") {
            setFormData((prevState) => ({
                ...prevState,
                [field]: value,
                district_id: null,
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [field]: value,
            }));
        }
    };

    useEffect(() => {
        dispatch(fetchCounters());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchDivisions());
    }, [dispatch]);

    useEffect(() => {
        if (formData.division_id) {
            dispatch(fetchDistrictsByDivision(formData.division_id.id));
        }
    }, [dispatch, formData.division_id]);

    const submitHandler = (e) => {
        e.preventDefault();
        let form = { ...formData };

        if (formData.division_id && formData.division_id.hasOwnProperty("id")) {
            form["division_id"] = formData.division_id.id;
        }

        if (formData.district_id && formData.district_id.hasOwnProperty("id")) {
            form["district_id"] = formData.district_id.id;
        }

        dispatch(searchCompany(form));
    };
    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_DIVISIONS,
                payload: [],
            });
        };
    }, [dispatch]);
    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_DISTRICTS,
                payload: [],
            });
        };
    }, [dispatch]);

    return (
        <>
            <Box m={5}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6">Our Counters</Typography>
                        <Box
                            mb={3}
                            sx={{
                                width: "42px",
                                height: "4px",
                                backgroundColor: "#33A551",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item>
                        <Button
                            className={classes.addbutton}
                            fullWidth
                            variant="contained"
                            onClick={() =>
                                history.push(AdminUrl.manageCounter.add)
                            }
                        >
                            <AddIcon />
                            Add Counter
                        </Button>
                    </Grid>
                </Grid>
                <Box my={3}>
                    <Grid
                        container
                        // justifyContent="space-between"
                        alignItems="flex-end"
                        spacing={3}
                    >
                        <Grid item lg={4} md={4} xs={12}>
                            <Typography mb={3}>Choose Division</Typography>
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
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Typography mb={3}>Choose District</Typography>
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
                                    />
                                )}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                fullWidth
                                className={classes.searchButton}
                                onClick={submitHandler}
                            >
                                Search Counter
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant="h6">Showing Result</Typography>
                <Typography variant="p" style={{ opacity: 0.5 }}>
                    {counters?.meta?.total} Counters in this location
                </Typography>
                <Box mt={5}>
                    <Grid container spacing={3}>
                        {counters?.data?.map((item, i) => (
                            <Grid item xs={12} lg={3}>
                                <Card>
                                    <CardContent className={classes.card}>
                                        <Box mt={2}>
                                            <Typography variant="h6">
                                                {item?.district?.name},
                                                {item?.division?.name}
                                            </Typography>
                                        </Box>
                                        <Box mt={1}>
                                            <Typography>
                                                Phone:
                                                {item?.counter_managers?.map(
                                                    (item) => item.phone
                                                )}
                                            </Typography>
                                        </Box>
                                        <Box mt={2}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                className={classes.button}
                                            >
                                                Edit Information
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                        {/* <Grid item lg={3} xs={12}>
                                                        <BusCard
                                                            title="Shyamoli, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        2
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item lg={3} xs={12}>
                                                        <BusCard
                                                            title="Asad Gate, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        3
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item lg={3} xs={12}>
                                                        <BusCard
                                                            title="Kollyanpur, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        4
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item xs={12} lg={3}>
                                                        <BusCard
                                                            title="Kollyanpur, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        5
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item lg={3} xs={12}>
                                                        <BusCard
                                                            title="Kollyanpur, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        6
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item lg={3} xs={12}>
                                                        <BusCard
                                                            title="Kollyanpur, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        7
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid>
                                                    <Grid item lg={3} xs={12}>
                                                        <BusCard
                                                            title="Kollyanpur, Dhaka"
                                                            subTitle="Phone: +88 0123456789"
                                                            button="Edit Information"
                                                            control={() =>
                                                                history.push(
                                                                    AdminUrl.manageCounter.edit.replace(
                                                                        ":id",
                                                                        8
                                                                    )
                                                                )
                                                            }
                                                        />
                                                    </Grid> */}
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default Counters;
