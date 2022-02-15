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
    deleteStaff,
    fetchDriver,
    fetchStaff,
} from "../../../../store/actions/counterAction";
import { ERROR, FETCH_DRIVER, FETCH_STAFF } from "../../../../store/types";
import Swal from "sweetalert2";
import { AdminUrl } from "../../../../constants/urls";

const StaffDetails = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const { staff } = useSelector((state) => state.counter);
    const { id } = useParams();
    useEffect(() => {
        if (id) {
            dispatch(fetchStaff(id));
        }
    }, [dispatch, id]);

    const renderName = (url) => {
        let name = url.split("/");
        return name[name.length - 1];
    };

    useEffect(() => {
        return () => {
            dispatch({
                type: FETCH_STAFF,
                payload: {},
            });
        };
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Staff Details</Typography>
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
                            src={staff.image}
                            style={{
                                width: "10%",
                                height: "10%",
                                borderRadius: 0,
                            }}
                        />
                    </Box>
                    <Grid container spacing={5}>
                        <Grid item lg={2}>
                            <Typography>Staff's Name :</Typography>
                        </Grid>
                        <Grid item lg={6}>
                            <Typography className={classes.driverDText}>
                                {staff.name}
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
                                    {staff.address}
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
                                    {staff.phone}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box my={3}>
                        <Typography className={classes.driverDText}>
                            {staff.details}
                        </Typography>
                    </Box>
                    <Box my={3}>
                        <Stack direction="row" spacing={3} mb={3}>
                            {staff?.docs?.map((item, i) => (
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
                                    AdminUrl.staff.editStaff.replace(
                                        ":id",
                                        staff.id
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
                                    text: "You want to delete the staff!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Confirm",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        dispatch(
                                            deleteStaff(staff.id, () =>
                                                history.push(
                                                    AdminUrl.staff.index
                                                )
                                            )
                                        );
                                        Swal.fire(
                                            "Success!",
                                            "The Staff is deleted.",
                                            "success"
                                        );
                                    }
                                });
                            }}
                        >
                            Delete Staff
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default StaffDetails;
