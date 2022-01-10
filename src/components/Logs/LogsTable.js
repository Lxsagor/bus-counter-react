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
// import { SiteUrl } from "../../constants/urls";
// import SuspendCompany from "./../Suspend/SuspendCompanyDialog";

function createData(user, activity, activity_desc, compnay, IP, admin, action) {
    return { user, activity, activity_desc, compnay, IP, admin, action };
}

const rows = [
    createData(
        "John Doe",
        "10:21pm",
        "Book ticket",
        "SR Group",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "John Doe",
        "10:21pm",
        "Book ticket",
        "SR Group",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "John Doe",
        "10:21pm",
        "Book ticket",
        "SR Group",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
];

const LogsTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const [suspendCompanyDialog, setSuspendCompanyDialog] =
        React.useState(false);
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">User</TableCell>
                        <TableCell align="center">Last Activity</TableCell>
                        <TableCell align="center">
                            Activity Description
                        </TableCell>
                        <TableCell align="center">Company</TableCell>

                        <TableCell align="center">IP</TableCell>
                        <TableCell align="center">Admin</TableCell>
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
                                {row.user}
                            </TableCell>
                            <TableCell align="center">{row.activity}</TableCell>
                            <TableCell align="center">
                                {row.activity_desc}
                            </TableCell>
                            <TableCell align="center">{row.compnay}</TableCell>

                            <TableCell align="center">{row.IP}</TableCell>
                            <TableCell align="center">{row.admin}</TableCell>
                            {/* <TableCell align="center">{row.action}</TableCell> */}
                            <TableCell
                                align="center"
                                sx={{ maxWidth: "250px" }}
                            >
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="large"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                        mr: 1,
                                    }}
                                    // onClick={() =>
                                    //     setSuspendCompanyDialog(true)
                                    // }
                                >
                                    Suspend User
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
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                    }}

                                    // onClick={() =>
                                    //     history.push(
                                    //         SiteUrl.dashboard.show.replace(
                                    //             ":id",
                                    //             1
                                    //         )
                                    //     )
                                    // }
                                >
                                    View Profile
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default LogsTable;
