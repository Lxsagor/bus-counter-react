import { Button, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { SuperAdminUrl } from "../../../constants/urls";
import {
    fetchAdmins,
    suspendAdmin,
} from "../../../store/actions/companyAction";
import { useStyles } from "./styled";

const CounterLogTable = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [suspendCompanyDialog, setSuspendCompanyDialog] = useState(false);
    const { admins } = useSelector((state) => state.company);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(fetchAdmins(id));
        }
    }, [dispatch, id]);

    // e.preventDefault();

    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Phone</TableCell>
                            <TableCell align="center">Status</TableCell>

                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {admins?.data?.map((item, i) => (
                            <TableRow key={i}>
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="center"
                                >
                                    {item.name}
                                </TableCell>
                                <TableCell align="center">
                                    {item.email}
                                </TableCell>
                                <TableCell align="center">
                                    {item.phone}
                                </TableCell>
                                <TableCell align="center">
                                    {item.status === "active" ? (
                                        <Typography color="primary">
                                            <strong>{item.status}</strong>
                                        </Typography>
                                    ) : (
                                        <Typography color="error">
                                            <strong>{item.status}</strong>
                                        </Typography>
                                    )}
                                </TableCell>

                                {/* <TableCell align="center">{row.action}</TableCell> */}
                                <TableCell
                                    align="center"
                                    className={classes.actionCell}
                                    // sx={{ maxWidth: "250px" }}
                                >
                                    {item.status === "active" ? (
                                        <Button
                                            variant="contained"
                                            sx={{
                                                borderRadius: "14px",
                                                textTransform: "initial",
                                                mr: 1,
                                            }}
                                            color="error"
                                            onClick={() => {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: "You want to suspend the admin!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor:
                                                        "#3085d6",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText:
                                                        "Confirm",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(
                                                            suspendAdmin(
                                                                id,
                                                                item.id
                                                            )
                                                        );
                                                        Swal.fire(
                                                            "Success!",
                                                            "The Admin is suspended.",
                                                            "success"
                                                        );
                                                    }
                                                });
                                            }}
                                            // onClick={() => {
                                            //     Swal.fire({
                                            //         title: "Do you want to suspend the admin?",
                                            //         showCancelButton: true,
                                            //         confirmButtonColor:
                                            //             " #c62828",
                                            //         confirmButtonText:
                                            //             "Suspend",
                                            //     }).then((result) => {
                                            //         if (result.isConfirmed) {
                                            //             dispatch(
                                            //                 suspendAdmin(
                                            //                     id,
                                            //                     item.id
                                            //                 )
                                            //             );
                                            //             Swal.fire(
                                            //                 "Suspended!",
                                            //                 "",
                                            //                 "success"
                                            //             );
                                            //         }
                                            //     });
                                            // }}
                                        >
                                            Suspend User
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="contained"
                                            sx={{
                                                borderRadius: "14px",
                                                textTransform: "initial",
                                                mr: 1,
                                            }}
                                            // color="error"
                                            onClick={() => {
                                                Swal.fire({
                                                    title: "Are you sure?",
                                                    text: "You want to active the admin!",
                                                    icon: "warning",
                                                    showCancelButton: true,
                                                    confirmButtonColor:
                                                        "rgb(35, 115, 56)",
                                                    cancelButtonColor: "#d33",
                                                    confirmButtonText:
                                                        "Confirm",
                                                }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        dispatch(
                                                            suspendAdmin(
                                                                id,
                                                                item.id
                                                            )
                                                        );
                                                        Swal.fire(
                                                            "Success!",
                                                            "The Admin is activated.",
                                                            "success"
                                                        );
                                                    }
                                                });
                                            }}
                                        >
                                            Active User
                                        </Button>
                                    )}

                                    {/* <Dialog
                                        maxWidth="xs"
                                        fullWidth
                                        open={suspendCompanyDialog}
                                        onClose={() =>
                                            setSuspendCompanyDialog(false)
                                        }
                                    >
                                        <DialogContent>
                                            <SuspendCompany />
                                        </DialogContent>
                                    </Dialog> */}
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: "14px",
                                            textTransform: "initial",
                                            backgroundColor: "white",
                                        }}
                                        onClick={() =>
                                            history.push(
                                                SuperAdminUrl.manageCompany.viewAdmin
                                                    .replace(":companyId", id)
                                                    .replace(":id", item.id)
                                            )
                                        }
                                    >
                                        <Typography color="primary">
                                            View Profile
                                        </Typography>
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

export default CounterLogTable;
