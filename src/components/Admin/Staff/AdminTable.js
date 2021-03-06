import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useHistory } from "react-router-dom";
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

const AdminTable = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <TableContainer>
            <Table className={classes.table}>
                {/* <TableRow>
                    <TableCell align="center">Admin</TableCell>
                    <TableCell align="center">Driver</TableCell>
                    <TableCell align="center">Staff</TableCell>
                </TableRow> */}
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Phone</TableCell>

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

                            <TableCell
                                align="center"
                                className={classes.actionCell}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.editBTn}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant="contained"
                                    className={classes.mailBtn}
                                >
                                    Send Mail
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default AdminTable;
