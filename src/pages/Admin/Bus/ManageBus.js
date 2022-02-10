import React, { useEffect } from "react";
import {
    Box,
    Typography,
    Grid,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import BusCard from "../../../components/BusCard/BusCard";
import AddIcon from "@mui/icons-material/AddCircleRounded";

import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteBus, fetchBuses } from "../../../store/actions/counterAction";
import { useStyles } from "./styled";
import { Delete } from "@mui/icons-material";
import Swal from "sweetalert2";

const ManageBus = () => {
    const history = useHistory();
    const classes = useStyles();
    const { buses } = useSelector((state) => state.counter);
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
                                                Bus no: {item.bus_no}
                                            </Typography>
                                            <Delete
                                                fontSize="large"
                                                color="error"
                                                cursor="pointer"
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Do you want to delete the bus?",
                                                        showCancelButton: true,
                                                        confirmButtonColor:
                                                            " #c62828",
                                                        confirmButtonText:
                                                            "Delete",
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
                                                                "Deleted!",
                                                                "",
                                                                "success"
                                                            );
                                                        }
                                                    });
                                                }}
                                            />
                                        </Box>
                                        <Box mt={2}>
                                            <Typography>
                                                Bus Type: {item.bus_type}
                                            </Typography>
                                        </Box>{" "}
                                        <Box mt={1}>
                                            <Typography variant="body2">
                                                Total Seat: {item.total_seat}
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
