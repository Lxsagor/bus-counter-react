import { Delete } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/AddCircleRounded";
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { AdminUrl } from "../../../constants/urls";
import { deleteBus, fetchBuses } from "../../../store/actions/Admin/busAction";
import { useStyles } from "./styled";

const ManageBus = () => {
    const history = useHistory();
    const classes = useStyles();
    const { buses } = useSelector((state) => state.bus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBuses());
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h6">Manage Bus</Typography>
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
                            onClick={() =>
                                history.push(AdminUrl.manageBus.addbus)
                            }
                        >
                            <Box display="flex">
                                <AddIcon color="black" />
                                <Typography ml={1} sx={{ color: "black" }}>
                                    Add Bus
                                </Typography>
                            </Box>
                        </Button>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <Grid container spacing={3}>
                        {buses?.data?.map((item, i) => (
                            <Grid item xs={12} lg={3}>
                                <Card>
                                    <CardContent className={classes.card}>
                                        <Box
                                            mt={2}
                                            className={classes.deleteBox}
                                        >
                                            <Typography variant="h6">
                                                Bus name: {item.bus_no}
                                            </Typography>
                                            <Delete
                                                fontSize="large"
                                                color="error"
                                                cursor="pointer"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You want to delete the bus!",
                                                        icon: "warning",
                                                        showCancelButton: true,
                                                        confirmButtonColor:
                                                            "#3085d6",
                                                        cancelButtonColor:
                                                            "#d33",
                                                        confirmButtonText:
                                                            "Confirm",
                                                    }).then((result) => {
                                                        if (
                                                            result.isConfirmed
                                                        ) {
                                                            dispatch(
                                                                deleteBus(
                                                                    item.id
                                                                )
                                                            );
                                                            Swal.fire(
                                                                "Success!",
                                                                "The Bus is deleted.",
                                                                "success"
                                                            );
                                                        }
                                                    });
                                                }}
                                            />
                                        </Box>
                                        <Box mt={1}>
                                            <Typography>
                                                Bus Type: {item.bus_type}
                                            </Typography>
                                        </Box>{" "}
                                        <Box mt={1}>
                                            <Typography variant="body2">
                                                Total Seat: {item.total_seat}
                                            </Typography>
                                        </Box>
                                        <Box mt={1}>
                                            <Typography variant="body1">
                                                Bus Registrstion NO:{" "}
                                                {item.bus_reg_no}
                                            </Typography>
                                        </Box>
                                        <Box mt={2}>
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                className={classes.managebutton}
                                                onClick={() =>
                                                    history.push(
                                                        AdminUrl.manageBus.editbusinfo.replace(
                                                            ":id",
                                                            item.id
                                                        )
                                                    )
                                                }
                                            >
                                                Manage Bus
                                            </Button>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ManageBus;
