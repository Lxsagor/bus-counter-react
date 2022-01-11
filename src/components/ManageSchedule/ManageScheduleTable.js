import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../constants/urls";
import { useStyles } from "./styled";

function createData(
    bus_no,
    boarding_time,
    destination,
    dep_time,
    total_fare,
    action
) {
    return { bus_no, boarding_time, destination, dep_time, total_fare, action };
}

const rows = [
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
];

const ManageScheduleTable = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Bus No</TableCell>
                        <TableCell align="center">Boarding From</TableCell>
                        <TableCell align="center">Destination</TableCell>
                        <TableCell align="center">Dep. Time</TableCell>
                        <TableCell align="center">Total Fare</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.bus_no}
                            </TableCell>
                            <TableCell align="center">
                                {row.boarding_time}
                            </TableCell>
                            <TableCell align="center">
                                {row.destination}
                            </TableCell>
                            <TableCell align="center">{row.dep_time}</TableCell>
                            <TableCell align="center">
                                {row.total_fare}
                            </TableCell>

                            <TableCell
                                align="center"
                                className={classes.actionCell}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    onClick={() =>
                                        history.push(
                                            AdminUrl.manageSchedule.editinfo.replace(
                                                ":id",
                                                1
                                            )
                                        )
                                    }
                                >
                                    Edit Info
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
