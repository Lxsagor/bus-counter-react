import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import * as React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../constants/urls";
import { fetchSchedules } from "../../store/actions/counterAction";
import { useStyles } from "./styled";

const ManageScheduleTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { schedules } = useSelector((state) => state.counter);

    useEffect(() => {
        dispatch(fetchSchedules());
    }, [dispatch]);

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Boarding From</TableCell>
                        <TableCell align="center">Destination</TableCell>
                        <TableCell align="center">Dep. Time</TableCell>
                        <TableCell align="center">Bus No</TableCell>

                        <TableCell align="center">Mid Counters</TableCell>
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
                                {item?.start_counter?.name}
                            </TableCell>
                            <TableCell align="center">
                                {" "}
                                {item?.end_counter?.name}
                            </TableCell>
                            <TableCell align="center">
                                {moment(item.date_time).format("HH:mm:ss")}
                            </TableCell>
                            <TableCell align="center"> {item.bus_no}</TableCell>
                            <TableCell align="center"></TableCell>

                            <TableCell
                                align="center"
                                className={classes.actionCell}
                            >
                                <Button
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
                                </Button>
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
    );
};
export default ManageScheduleTable;
