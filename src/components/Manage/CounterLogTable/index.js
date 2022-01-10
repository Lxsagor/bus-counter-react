import { Box, Button, Dialog, DialogContent, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useStyles } from "./styled";
import { SiteUrl } from "./../../../constants/urls";
import { useHistory } from "react-router-dom";
import SuspendCompany from "./../../Suspend/SuspendCompanyDialog";

function createData(
    user,
    last_activity,
    activity_description,
    counter,
    ip,
    next_subscription,
    action
) {
    return {
        user,
        last_activity,
        activity_description,
        counter,
        ip,
        next_subscription,
        action,
    };
}

const rows = [
    createData(
        "john doe",
        "10:31:21PM",
        "Book Ticket",
        "Kollayanpur",
        "172.12.21.1",
        "12/07/2021",
        "edit"
    ),
    createData(
        "john doe",
        "10:31:21PM",
        "Book Ticket",
        "Kollayanpur",
        "172.12.21.1",
        "12/07/2021",
        "edit"
    ),
    createData(
        "john doe",
        "10:31:21PM",
        "Book Ticket",
        "Kollayanpur",
        "172.12.21.1",
        "12/07/2021",
        "edit"
    ),
];

const CounterLogTable = () => {
    const history = useHistory();
    const classes = useStyles();
    const [suspendCompanyDialog, setSuspendCompanyDialog] =
        React.useState(false);
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">User</TableCell>
                            <TableCell align="center">Last Activity</TableCell>
                            <TableCell align="center">
                                Activity Description
                            </TableCell>
                            <TableCell align="center">Counter</TableCell>
                            <TableCell align="center">IP</TableCell>
                            <TableCell align="center">
                                Next Subscription
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
                                    {row.user}
                                </TableCell>
                                <TableCell align="center">
                                    {row.last_activity}
                                </TableCell>
                                <TableCell align="center">
                                    {row.activity_description}
                                </TableCell>
                                <TableCell align="center">
                                    {row.counter}
                                </TableCell>
                                <TableCell align="center">{row.ip}</TableCell>
                                <TableCell align="center">
                                    {row.next_subscription}
                                </TableCell>
                                {/* <TableCell align="center">{row.action}</TableCell> */}
                                <TableCell
                                    align="center"
                                    // sx={{ maxWidth: "250px" }}
                                >
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: "14px",
                                            textTransform: "initial",
                                            mr: 1,
                                        }}
                                        color="error"
                                        onClick={() =>
                                            setSuspendCompanyDialog(true)
                                        }
                                    >
                                        Suspend User
                                    </Button>
                                    <Dialog
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
                                    </Dialog>
                                    <Button
                                        variant="contained"
                                        sx={{
                                            borderRadius: "14px",
                                            textTransform: "initial",
                                            backgroundColor: "white",
                                        }}
                                        onClick={() =>
                                            history.push(
                                                SiteUrl.dashboard.show.replace(
                                                    ":id",
                                                    1
                                                )
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
