import { Button, Dialog, DialogContent } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { SuperAdminUrl } from "../../constants/urls";
import { useStyles } from "./styled";

function createData(compnay, activity, activity_desc, IP, admin, action) {
    return { compnay, activity, activity_desc, IP, admin, action };
}

const rows = [
    createData(
        "SR Group",
        "10:21pm",
        "Book ticket",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "SR Group",
        "10:21pm",
        "Book ticket",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "SR Group",
        "10:21pm",
        "Book ticket",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "SR Group",
        "10:21pm",
        "Book ticket",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "SR Group",
        "10:21pm",
        "Book ticket",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
    createData(
        "SR Group",
        "10:21pm",
        "Book ticket",
        "172.32.21.21",
        "John Doe",
        "edit"
    ),
];

const DashboardTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const [suspendCompanyDialog, setSuspendCompanyDialog] =
        React.useState(false);
    return (
        <TableContainer>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Company</TableCell>
                        <TableCell align="center">Last Activity</TableCell>
                        <TableCell align="center">
                            Activity Description
                        </TableCell>
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
                                {row.compnay}
                            </TableCell>
                            <TableCell align="center">{row.activity}</TableCell>
                            <TableCell align="center">
                                {row.activity_desc}
                            </TableCell>
                            <TableCell align="center">{row.IP}</TableCell>
                            <TableCell align="center">{row.admin}</TableCell>
                            {/* <TableCell align="center">{row.action}</TableCell> */}
                            <TableCell
                                align="center"
                                className={classes.actionCell}
                                sx={{ maxWidth: "250px" }}
                            >
                                <Button
                                    variant="contained"
                                    color="error"
                                    size="large"
                                    fullWidth
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

                                <Button
                                    variant="contained"
                                    size="large"
                                    fullWidth
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "initial",
                                    }}
                                    onClick={() =>
                                        history.push(
                                            SuperAdminUrl.dashboard.show.replace(
                                                ":id",
                                                1
                                            )
                                        )
                                    }
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
export default DashboardTable;
