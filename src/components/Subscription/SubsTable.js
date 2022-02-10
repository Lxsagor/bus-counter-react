import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useStyles } from "./styled";
import { useDispatch, useSelector } from "react-redux";
// import { SuperAdminUrl } from "../../constants/urls";
// import SuspendCompany from "./../Suspend/SuspendCompanyDialog";
import { fetchCompanies } from "../../store/actions/companyAction";
const SubsTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.company.companies);

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Company Name</TableCell>
                        <TableCell align="center">Number Of User</TableCell>
                        <TableCell align="center">
                            Last Subscription Date
                        </TableCell>
                        <TableCell align="center">
                            Next Subscription Date
                        </TableCell>

                        <TableCell align="center">
                            Subscription Deadline
                        </TableCell>

                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {companies?.data?.map((item, i) => (
                        <TableRow key={i}>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {item.name}
                            </TableCell>
                            <TableCell align="center">
                                {item.no_of_counters}
                            </TableCell>

                            <TableCell align="center">
                                {moment(item.sub_start_date).format("M/D/Y")}
                            </TableCell>
                            <TableCell align="center">
                                {moment(item.sub_end_date).format("M/D/Y")}
                            </TableCell>
                            <TableCell align="center">Remaining time</TableCell>

                            {/* <TableCell align="center">{row.action}</TableCell> */}
                            <TableCell
                                align="center"
                                className={classes.actionCell}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                        mr: 1,
                                    }}
                                >
                                    Send Mail
                                </Button>
                                {/* <Dialog
                                    maxWidth="xs"
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
                                    color="error"
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                        mr: 1,
                                    }}
                                >
                                    Send Notification
                                </Button>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                        backgroundColor: "#040404",
                                    }}
                                >
                                    Extend
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default SubsTable;
