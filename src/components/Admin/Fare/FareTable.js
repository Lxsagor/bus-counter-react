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
import Swal from "sweetalert2";
import { AdminUrl } from "../../../constants/urls";
import { fetchSchedules } from "../../../store/actions/Admin/scheduleAction";
import { deleteFare } from "../../../store/actions/Admin/fareActions";
import { useStyles } from "./styled";

const FareTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { fares } = useSelector((state) => state.fare);

    return (
        <>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Starting From</TableCell>
                            <TableCell align="center">Destination</TableCell>
                            <TableCell align="center">Fare</TableCell>

                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {fares?.data?.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {item?.start_point?.name}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.destination_point?.name}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.fare}
                                </TableCell>
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
                                                AdminUrl.manageFare.editFare.replace(
                                                    ":id",
                                                    item.id
                                                )
                                            )
                                        }
                                    >
                                        Edit Fare
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        fullWidth
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "You want to delete the fire!",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Confirm",
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(
                                                        deleteFare(item.id)
                                                    );
                                                    Swal.fire(
                                                        "Success!",
                                                        "The Fare is deleted.",
                                                        "success"
                                                    );
                                                }
                                            });
                                        }}
                                    >
                                        Delete Fare
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
export default FareTable;
