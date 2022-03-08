import {
    Avatar,
    Button,
    Container,
    Dialog,
    DialogContent,
    Divider,
    Fade,
    Grid,
    Slide,
    TextField,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useRef, useState, useEffect } from "react";
import { useStyles } from "./styled";
import Busimage from "../../../assets/bus.png";
import Available from "../../../assets/available.png";
import Booked from "../../../assets/booked.png";
import Selected from "../../../assets/selected.png";
import { Icon } from "@iconify/react";
import BusSeat from "./BusSeatDouble";
import BusTicket from "./BusTicket";
import AssignBus from "../AssignBus/AssignBus";
import moment from "moment";
import { useDispatch } from "react-redux";
import {
    assignBusdialog,
    routeid,
} from "../../../store/actions/Counter/bookingActions";
import { useSelector } from "react-redux";
import BusSeatSingle from "./BusSeatSingle";
import BusSeatDouble from "./BusSeatDouble";
import { CONFIRM_TICKET } from "../../../store/types";

const Bus = ({ item, bus }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [collapseStatus, setCollapseStatus] = useState(false);
    const [assignBus, setAssignBus] = useState(false);
    const { confirmTicket } = useSelector((state) => state.booking);

    const assignHandler = () => {
        dispatch(routeid(item.id, item.bus_type));
        setAssignBus(true);
    };

    console.log("Item", item);
    console.log("Bus", bus);

    return (
        <>
            <Box pb={2}>
                <Grid container justifyContent="space-between">
                    <Grid item lg={3} xs={3}>
                        <Box mt={2} ml={2}>
                            <Typography>Bus No:{bus?.bus_no}</Typography>
                        </Box>
                    </Grid>
                    {!bus && (
                        <Grid item lg={2} xs={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.assignBusBtn}
                                onClick={() => assignHandler()}
                            >
                                + Assign Coach
                            </Button>
                        </Grid>
                    )}
                </Grid>

                <Box mt={3} mb={3}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Box mb={3} mt={2} ml={2}>
                                <Typography style={{ opacity: 0.5 }}>
                                    From
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box mt={2} mr={2}>
                                {bus && (
                                    <Typography>
                                        Seat Avalability:
                                        {bus?.bus?.total_seat -
                                            bus?.ticket_books.forEach(
                                                (item) => item?.seat_no?.length
                                            )}
                                    </Typography>
                                )}
                            </Box>
                        </Grid>
                    </Grid>

                    <Grid container alignItems="center" spacing={3}>
                        <Grid item lg={2}>
                            <Box className={classes.track}>
                                <Typography className={classes.coach}>
                                    {item?.bus_type}
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item lg={8}>
                            <Grid
                                container
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Grid item>
                                    {item?.routes?.length > 0 && (
                                        <Typography variant="h5">
                                            {item?.routes[0]?.name}
                                        </Typography>
                                    )}
                                </Grid>
                                <Grid item lg={6}>
                                    <Divider>
                                        <Avatar
                                            src={Busimage}
                                            alt="bus"
                                            sx={{
                                                width: "34px",
                                                height: "23px",
                                                borderRadius: 0,
                                            }}
                                        />
                                    </Divider>
                                </Grid>
                                <Grid item lg={2}>
                                    {item?.routes?.length > 0 && (
                                        <Typography variant="h5">
                                            {
                                                item?.routes[
                                                    item.routes.length - 1
                                                ]?.name
                                            }
                                        </Typography>
                                    )}
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <Button
                                variant="contained"
                                size="large"
                                className={classes.button}
                                onClick={() => {
                                    setCollapseStatus(!collapseStatus);
                                    dispatch({
                                        type: CONFIRM_TICKET,
                                        payload: {},
                                    });
                                }}
                            >
                                View Seats
                            </Button>
                        </Grid>
                    </Grid>
                    <Box mt={3} mb={2}>
                        <Box mb={2} mt={2} ml={2}>
                            <Typography variant="h6">
                                Departure: {moment(bus?.time).format("LT")}
                            </Typography>
                        </Box>
                        {/* <Box mb={2} pb={2} ml={2}>
                        <Typography variant="h6">Arrival:</Typography>
                    </Box> */}
                    </Box>
                </Box>

                <Dialog
                    maxWidth="lg"
                    fullWidth
                    open={assignBus}
                    onClose={() => setAssignBus(false)}
                >
                    <DialogContent>
                        <AssignBus controlHandler={() => setAssignBus(false)} />
                    </DialogContent>
                </Dialog>

                {collapseStatus && item?.bus_seat_type === "double" && (
                    <BusSeatDouble
                        data={bus}
                        route={item}
                        setCollapseStatus={setCollapseStatus}
                    />
                )}
                {collapseStatus && item?.bus_seat_type === "single" && (
                    <BusSeatSingle
                        data={bus}
                        route={item}
                        setCollapseStatus={setCollapseStatus}
                    />
                )}

                {!collapseStatus &&
                    confirmTicket &&
                    Object.keys(confirmTicket).length > 0 && <BusTicket />}

                {/* <BusTicket /> */}
            </Box>
        </>
    );
};

export default Bus;
