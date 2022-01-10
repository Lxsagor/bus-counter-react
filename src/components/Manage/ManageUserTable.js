import { Button } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { useHistory } from "react-router-dom";
import { SiteUrl } from "../../constants/urls";
import { useStyles } from "../dashboard/styled";

function createData(
    compnay_name,
    number_of_user,
    phone,
    last_sub_date,
    next_sub_date,
    action
) {
    return {
        compnay_name,
        number_of_user,
        phone,
        last_sub_date,
        next_sub_date,
        action,
    };
}

const rows = [
    createData(
        "SR Group",
        "2",
        "0184737443",
        "12/07/2021",
        "12/07/2021",
        "edit"
    ),
    createData(
        "SR Group",
        "2",
        "0184737443",
        "12/07/2021",
        "12/07/2021",
        "edit"
    ),

    createData(
        "SR Group",
        "2",
        "0184737443",
        "12/07/2021",
        "12/07/2021",
        "edit"
    ),
    createData(
        "SR Group",
        "2",
        "0184737443",
        "12/07/2021",
        "12/07/2021",
        "edit"
    ),
];

const DashboardTable = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <TableContainer>
            <Table sx={{ minWidth: 650 }} className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Company Name</TableCell>
                        <TableCell align="center">Number Of User</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        <TableCell align="center">
                            Last Subscription Date
                        </TableCell>
                        <TableCell align="center">
                            Next Subscription Date
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
                                {row.compnay_name}
                            </TableCell>
                            <TableCell align="center">
                                {row.number_of_user}
                            </TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">
                                {row.last_sub_date}
                            </TableCell>
                            <TableCell align="center">
                                {row.next_sub_date}
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
                                    }}
                                    onClick={() =>
                                        history.push(
                                            SiteUrl.manageCompany.view.replace()
                                        )
                                    }
                                >
                                    View Details
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
