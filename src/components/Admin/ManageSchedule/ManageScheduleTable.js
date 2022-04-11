import { Button, Chip } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { fetchSchedules } from "../../../store/actions/Admin/counterAction";
import { useStyles } from "./styled";

const ManageScheduleTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { schedules } = useSelector((state) => state.schedule);

    return (
        <>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Bus Type</TableCell>
                            <TableCell align="center">Seat Pattern</TableCell>
                            <TableCell align="center">Day</TableCell>
                            <TableCell align="center">Time</TableCell>
                            <TableCell align="center">Route</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {schedules?.data?.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {item?.bus_type}
                                </TableCell>
                                <TableCell align="center">
                                    {" "}
                                    {item?.bus_seat_type}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.day_time.map(
                                        (day, k) => day?.day + ", "
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.day_time.map(
                                        (time, l) =>
                                            moment(time?.time).format("LT") +
                                            ", "
                                    )}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.routes.map((route, j) => (
                                        <Chip
                                            key={j}
                                            label={route.name}
                                            variant="outlined"
                                            color="primary"
                                            sx={{ margin: "2px" }}
                                        />
                                    ))}
                                </TableCell>

                                <TableCell
                                    align="center"
                                    className={classes.actionCell}
                                >
                                    {/* <Button
                                        variant="contained"
                                        fullWidth
                                        className={classes.editBtn}
                                        onClick={() =>
                                            history.push(
                                                AdminUrl.manageSchedule.editSchedule.replace(
                                                    ":id",
                                                    item.id
                                                )
                                            )
                                        }
                                    >
                                        Edit Info
                                    </Button> */}
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Assign Bus
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
export default ManageScheduleTable;
