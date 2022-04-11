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
import { deleteTrack } from "../../../store/actions/Admin/trackActions";
import { useStyles } from "./styled";

const TrackTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { tracks } = useSelector((state) => state.track);

    return (
        <>
            <TableContainer>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Route</TableCell>
                            <TableCell align="center">Day</TableCell>
                            <TableCell align="center">Time</TableCell>

                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tracks?.data?.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {item?.districts?.map((district, j) => (
                                        <Chip
                                            key={j}
                                            label={district.name}
                                            variant="outlined"
                                            color="primary"
                                            sx={{ margin: "2px" }}
                                        />
                                    ))}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.day_time?.map((day, k) => day.day)}
                                </TableCell>
                                <TableCell align="center">
                                    {item?.day_time?.map((day) =>
                                        moment(day.time).format("h:mm a")
                                    )}
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
                                                AdminUrl.manageTrack.editTrack.replace(
                                                    ":id",
                                                    item.id
                                                )
                                            )
                                        }
                                    >
                                        Edit Track
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        fullWidth
                                        onClick={() => {
                                            Swal.fire({
                                                title: "Are you sure?",
                                                text: "You want to delete the track!",
                                                icon: "warning",
                                                showCancelButton: true,
                                                confirmButtonColor: "#3085d6",
                                                cancelButtonColor: "#d33",
                                                confirmButtonText: "Confirm",
                                            }).then((result) => {
                                                if (result.isConfirmed) {
                                                    dispatch(
                                                        deleteTrack(item.id)
                                                    );
                                                    Swal.fire(
                                                        "Success!",
                                                        "The Track is deleted.",
                                                        "success"
                                                    );
                                                }
                                            });
                                        }}
                                    >
                                        Delete Track
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
export default TrackTable;
