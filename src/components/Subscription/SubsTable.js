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
// import { SuperAdminUrl } from "../../constants/urls";
// import SuspendCompany from "./../Suspend/SuspendCompanyDialog";

function createData(
    company_name,
    number_of_user,
    last_subs_date,
    next_subs_date,
    subs_deadline,

    action
) {
    return {
        company_name,
        number_of_user,
        last_subs_date,
        next_subs_date,
        subs_deadline,

        action,
    };
}

const rows = [
    createData(
        "SR group",
        "2",
        "12/07/2021",
        "12/07/2021",
        "Subscription ended",
        "edit"
    ),
    createData(
        "SR group",
        "2",
        "12/07/2021",
        "12/07/2021",
        "2 days remaining",
        "edit"
    ),
    createData(
        "SR group",
        "2",
        "12/07/2021",
        "12/07/2021",
        "Subscription ended",
        "edit"
    ),
    createData(
        "SR group",
        "2",
        "12/07/2021",
        "12/07/2021",
        "2 days remaining",

        "edit"
    ),
    createData(
        "SR group",
        "2",
        "12/07/2021",
        "12/07/2021",
        "Subscription ended",
        "edit"
    ),
];

const SubsTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const [suspendCompanyDialog, setSuspendCompanyDialog] =
        React.useState(false);
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
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.company_name}
                            </TableCell>
                            <TableCell align="center">
                                {row.number_of_user}
                            </TableCell>
                            <TableCell align="center">
                                {row.last_subs_date}
                            </TableCell>
                            <TableCell align="center">
                                {row.next_subs_date}
                            </TableCell>

                            <TableCell align="center">
                                {row.subs_deadline}
                            </TableCell>

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
