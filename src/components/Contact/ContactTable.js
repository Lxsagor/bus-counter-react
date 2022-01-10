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
import { SiteUrl } from "../../constants/urls";
import SuspendCompany from "./../Suspend/SuspendCompanyDialog";

function createData(
    compnay_name,
    last_subs_date,
    next_subs_date,
    email,
    phone,
    action
) {
    return {
        compnay_name,
        last_subs_date,
        next_subs_date,
        email,
        phone,
        action,
    };
}

const rows = [
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
    createData(
        "SR Group",
        "12/12/2021",
        "12/12/2021",

        "srgroup@gmail.com",
        "+88 0265490841",
        "edit"
    ),
];

const ContactTable = () => {
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
                    {rows.map((row, i) => (
                        <TableRow key={i}>
                            <TableCell
                                component="th"
                                scope="row"
                                align="center"
                            >
                                {row.compnay_name}
                            </TableCell>
                            <TableCell align="center">
                                {row.last_subs_date}
                            </TableCell>
                            <TableCell align="center">
                                {row.next_subs_date}
                            </TableCell>
                            <TableCell align="center">{row.email}</TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            {/* <TableCell align="center">{row.action}</TableCell> */}
                            <TableCell
                                align="center"
                                sx={{ maxWidth: "250px" }}
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
                                            SiteUrl.contact.view.replace(
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
                                    onClick={() =>
                                        setSuspendCompanyDialog(true)
                                    }
                                >
                                    Suspend
                                </Button>
                                <Dialog
                                    maxWidth="xs"
                                    open={suspendCompanyDialog}
                                    onClose={() =>
                                        setSuspendCompanyDialog(false)
                                    }
                                >
                                    <DialogContent>
                                        <SuspendCompany />
                                    </DialogContent>
                                </Dialog>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};
export default ContactTable;
