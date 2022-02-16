import {
    Avatar,
    Box,
    Grid,
    Typography,
    Button,
    Stack,
    Chip,
} from "@mui/material";
import React, { useEffect } from "react";
import { useStyles } from "../styled";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
    deleteDriver,
    fetchDriver,
} from "../../../../store/actions/Admin/staffAction";
import { STAFF_VALIDATE_ERROR, FETCH_DRIVER } from "../../../../store/types";
import Swal from "sweetalert2";
import { AdminUrl } from "../../../../constants/urls";

const DriverDetails = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { driver } = useSelector((state) => state.staff);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(fetchDriver(id));
        }
    }, [dispatch, id]);

    const renderName = (url) => {
        let name = url.split("/");
        return name[name.length - 1];
    };

    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_DRIVER,
                payload: {},
            });
        };
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Driver Details</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box my={5}>
                    <Box my={5}>
                        <Avatar
                            src={driver.image}
                            style={{
                                width: "10%",
                                height: "10%",
                                borderRadius: 0,
                            }}
                        />
                    </Box>
                    <Grid container spacing={5}>
                        <Grid item lg={2}>
                            <Typography>Driver's Name :</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography className={classes.driverDText}>
                                {driver.name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Box my={3}>
                        <Grid container spacing={5}>
                            <Grid item lg={2}>
                                <Typography>Address :</Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Typography className={classes.driverDText}>
                                    {driver.address}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box my={3}>
                        <Grid container spacing={5}>
                            <Grid item lg={2}>
                                <Typography>Phone :</Typography>
                            </Grid>
                            <Grid item lg={6}>
                                <Typography className={classes.driverDText}>
                                    {driver.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box my={3}>
                        <Typography className={classes.driverDText}>
                            {driver.details}
                        </Typography>
                    </Box>
                    <Box my={3}>
                        <Stack direction="row" spacing={3} mb={3}>
                            {driver?.docs?.map((item, i) => (
                                <Chip key={i} label={renderName(item)} />
                            ))}
                        </Stack>
                    </Box>
                </Box>
                <Grid container>
                    <Grid item lg={2}>
                        <Button
                            variant="contained"
                            className={classes.editDBtn}
                            onClick={() =>
                                history.push(
                                    AdminUrl.staff.editDriver.replace(
                                        ":id",
                                        driver.id
                                    )
                                )
                            }
                        >
                            Edit Information
                        </Button>
                    </Grid>
                    <Grid item lg={2}>
                        <Button
                            variant="contained"
                            className={classes.deleteDBtn}
                            onClick={() => {
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You want to delete the driver!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Confirm",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(
                                            deleteDriver(driver.id, () =>
                                                history.push(
                                                    AdminUrl.staff.index
                                                )
                                            )
                                        );
                                        Swal.fire(
                                            "Success!",
                                            "The Driver is deleted.",
                                            "success"
                                        );
                                    }
                                });
                            }}
                        >
                            Delete Driver
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default DriverDetails;
