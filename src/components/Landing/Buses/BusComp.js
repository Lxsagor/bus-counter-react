import {
    Button,
    Container,
    Grid,
    TableCell,
    TableRow,
    Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import UserBusSeat from "./UserBusSeat";
import { useStyles } from "./styled";
import moment from "moment";
import BusSeatDouble from "../../Counter/BusComponent/BusSeatDouble";
import BusSeatSingle from "../../Counter/BusComponent/BusSeatSingle";
import { useDispatch, useSelector } from "react-redux";
import BusTicket from "../../Counter/BusComponent/BusTicket";
import { CONFIRM_TICKET } from "../../../store/types";

const BusComp = ({ item }) => {
    const [collapseStatus, setCollapseStatus] = useState(false);
    const { confirmTicket } = useSelector((state) => state.booking);
    const dispatch = useDispatch();

    const classes = useStyles();
    return (
        <>
            <TableRow>
                <TableCell>
                    <Typography>{item.bus_no}</Typography>

                    <>
                        <Typography>
                            <strong>Route:</strong>
                        </Typography>
                        <Typography>
                            {item.schedule_bus.routes[0].name}-
                            {
                                item?.schedule_bus?.routes[
                                    item?.schedule_bus?.routes.length - 1
                                ]?.name
                            }
                        </Typography>
                        <Typography>
                            Start:{item.schedule_bus.routes[0].name}
                        </Typography>
                        <Typography>Last Destination:</Typography>
                        <Typography>
                            {
                                item?.schedule_bus?.routes[
                                    item?.schedule_bus?.routes.length - 1
                                ]?.name
                            }
                        </Typography>
                    </>
                </TableCell>
                <TableCell>{moment(item?.time).format("LT")}</TableCell>
                <TableCell>{}</TableCell>
                <TableCell>40</TableCell>
                <TableCell>
                    {item?.fares?.fare}
                    <Box pt={10}>
                        <Button
                            fullWidth
                            variant="contained"
                            className={classes.bookTicketBtn}
                            onClick={() => {
                                setCollapseStatus(!collapseStatus);
                                dispatch({
                                    type: CONFIRM_TICKET,
                                    payload: {},
                                });
                            }}
                        >
                            Book Ticket
                        </Button>
                    </Box>
                </TableCell>
            </TableRow>
            <TableCell>
                {collapseStatus &&
                    item?.schedule_bus?.bus_seat_type === "double" && (
                        <BusSeatDouble
                            data={item}
                            route={item.schedule_bus}
                            setCollapseStatus={setCollapseStatus}
                        />
                    )}
                {collapseStatus &&
                    item?.schedule_bus?.bus_seat_type === "single" && (
                        <BusSeatSingle
                            data={item}
                            route={item.schedule_bus}
                            setCollapseStatus={setCollapseStatus}
                        />
                    )}

                {!collapseStatus &&
                    confirmTicket &&
                    Object.keys(confirmTicket).length > 0 && <BusTicket />}
            </TableCell>
        </>
    );
};

export default BusComp;
