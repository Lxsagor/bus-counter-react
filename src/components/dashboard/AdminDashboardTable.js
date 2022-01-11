import { Button, Dialog, DialogContent } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";

import { useStyles } from "./styled";

function createData(bus_no, counter, destination, dep_time, total_earning) {
    return { bus_no, counter, destination, dep_time, total_earning };
}

const rows = [
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
    createData("DTR- 0000001", "KP- Ac Counter", "Cumilla", "9.35 AM", "200"),
];

const AdminDashboardTable = () => {
    const classes = useStyles();

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Bus No</TableCell>
                        <TableCell align="center">Counter</TableCell>
                        <TableCell align="center">Destination</TableCell>
                        <TableCell align="center">Dep. Time</TableCell>
                        <TableCell align="center">Total Earning</TableCell>
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
                            <TableCell align="center">{row.counter}</TableCell>
                            <TableCell align="center">
                                {row.destination}
                            </TableCell>
                            <TableCell align="center">{row.dep_time}</TableCell>
                            <TableCell align="center">
                                {row.total_earning}
                            </TableCell>
                            {/* <TableCell align="center">{row.action}</TableCell> */}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default AdminDashboardTable;
