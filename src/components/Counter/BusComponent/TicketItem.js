import { Box, Divider, Grid, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useStyles } from "./styled";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import Bus from "./Bus";
import Swal from "sweetalert2";
import { cancelTicket } from "../../../store/actions/Counter/bookingActions";

const TicketItem = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { ticket } = useSelector((state) => state.booking);
    const [form, setForm] = useState({
        pnr: ticket.PNR,
    });
    return (
        <>
            <Grid container alignItems="center">
                <Grid item lg={7} xs={12}>
                    <Box className={classes.ticketItemRoot}>
                        <Grid
                            container
                            alignItems="center"
                            justifyContent="space-between"
                        >
                            <Grid item lg={2}>
                                <Box className={classes.ticketIcon}>
                                    <Icon
                                        icon="fa-solid:ticket-alt"
                                        width="50%"
                                        height="50%"
                                    />
                                </Box>
                            </Grid>
                            <Divider orientation="vertical" flexItem />

                            <Grid item lg={5}>
                                <Typography
                                    variant="body2"
                                    className={classes.pnrFont1}
                                >
                                    PNR Number: {ticket.PNR}
                                </Typography>
                                {/* <Typography
                                    variant="body2"
                                    className={classes.pnrFont2}
                                >
                                    Ticket Printed Few Moments Ago
                                </Typography> */}
                            </Grid>
                            <Grid item lg={4}>
                                <Grid container spacing={3}>
                                    <Grid item lg={6}>
                                        <Box>
                                            <Button
                                                fullWidth
                                                className={classes.prntBtn}
                                            >
                                                Print
                                            </Button>
                                        </Box>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Box pr={1}>
                                            <Button
                                                fullWidth
                                                className={classes.prntBtn}
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: "Are you sure?",
                                                        text: "You want to cancel the ticket!",
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
                                                                cancelTicket(
                                                                    form
                                                                )
                                                            );
                                                            Swal.fire(
                                                                "Success!",
                                                                "The Ticket is canceled.",
                                                                "success"
                                                            );
                                                        }
                                                    });
                                                }}
                                            >
                                                Cancel
                                            </Button>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};

export default TicketItem;
