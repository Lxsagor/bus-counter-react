import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { useStyles } from "./styled";

const StaffTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const { staffs } = useSelector((state) => state.staff);

    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Name</TableCell>
                        <TableCell align="center">Address</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {staffs?.data?.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {item.name}
                            </TableCell>
                            <TableCell align="center">{item.address}</TableCell>
                            <TableCell align="center">{item.phone}</TableCell>

                            <TableCell
                                align="center"
                                className={classes.actionCell}
                            >
                                <Button
                                    variant="contained"
                                    className={classes.editBTn}
                                    onClick={() =>
                                        history.push(
                                            AdminUrl.staff.staffDetails.replace(
                                                ":id",
                                                item.id
                                            )
                                        )
                                    }
                                >
                                    View Details
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default StaffTable;
