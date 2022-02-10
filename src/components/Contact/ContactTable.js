import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useStyles } from "./styled";
import { Box } from "@mui/system";
import Edit from "@mui/icons-material/Edit";
import { Button, Dialog, DialogContent, Grid, Typography } from "@mui/material";
import { useHistory } from "react-router-dom";
import { SuperAdminUrl } from "../../constants/urls";
import SuspendCompany from "./../Suspend/SuspendCompanyDialog";
import moment from "moment";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchCompanies } from "../../store/actions/companyAction";

const ContactTable = () => {
    const classes = useStyles();

    const history = useHistory();
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.company.companies);

    React.useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Company Name</TableCell>
                        <TableCell align="center">
                            Last Subscription Date
                        </TableCell>
                        <TableCell align="center">
                            Next Subscription Date
                        </TableCell>
                        <TableCell align="center">Email </TableCell>
                        <TableCell align="center">Phone</TableCell>
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
                                {moment(item.sub_start_date).format("M/D/Y")}
                            </TableCell>
                            <TableCell align="center">
                                {moment(item.sub_end_date).format("M/D/Y")}
                            </TableCell>
                            <TableCell align="center">{item.email}</TableCell>
                            <TableCell align="center">{item.phone}</TableCell>
                            {/* <TableCell align="center">{row.action}</TableCell> */}
                            <TableCell
                                align="center"
                                sx={{ maxWidth: "250px" }}
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
                                    onClick={() =>
                                        history.push(
                                            SuperAdminUrl.contact.view.replace(
                                                ":id",
                                                1
                                            )
                                        )
                                    }
                                >
                                    View Details
                                </Button>
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="large"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                    }}
                                    // onClick={() =>
                                    //     setSuspendCompanyDialog(true)
                                    // }
                                >
                                    Suspend
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
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default ContactTable;
