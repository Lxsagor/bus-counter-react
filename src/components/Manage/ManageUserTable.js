import { Button, Dialog, DialogContent, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { SuperAdminUrl } from "../../constants/urls";
import {
    fetchCompanies,
    fetchCompany,
} from "../../store/actions/SuperAdmin/companyAction";
import { fetchAdmin } from "../../store/actions/SuperAdmin/adminAction";
import ExtendSubs from "./ExtendSubs";
import { useStyles } from "./styled";

const DashboardTable = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.company.companies);
    const [extend, setExtend] = React.useState(false);

    // const submitHandler = (e) => {
    //     e.preventDefault();

    //     dispatch(confirm, () =>
    //         history.push(
    //             SuperAdminUrl.manageCompany.view.replace(":id", item.id)
    //         )
    //     );
    // };

    console.log(companies);

    const extendSub = (id) => {
        dispatch(
            fetchCompany(id, () => {
                setExtend(true);
            })
        );
    };

    return (
        // <form onSubmit={submitHandler}>
        <TableContainer>
            <Table sx={{ minWidth: 650 }} className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Company Name</TableCell>
                        <TableCell align="center">Number Of User</TableCell>
                        <TableCell align="center">Phone</TableCell>
                        {/* <TableCell align="center">
                            Last Subscription Date
                        </TableCell> */}
                        <TableCell align="center">
                            Subscription End Date
                        </TableCell>
                        <TableCell align="center">
                            Subscription Remaining
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
                            <TableCell align="center">{item.phone}</TableCell>
                            {/* <TableCell align="center">
                                {moment(item.sub_start_date).format("M/D/Y")}
                            </TableCell> */}
                            <TableCell align="center">
                                {moment(item.sub_end_date).format("M/D/Y")}
                            </TableCell>
                            <TableCell align="center">
                                {item.sub_remaining >= 0 ? (
                                    <Typography color="primary">
                                        <strong>
                                            {item.sub_remaining} days remaining
                                        </strong>
                                    </Typography>
                                ) : (
                                    <Typography color="error">
                                        <strong>Subscription Ended</strong>
                                    </Typography>
                                )}
                            </TableCell>

                            <TableCell
                                align="center"
                                sx={{ maxWidth: "250px" }}
                                className={classes.actionCell}
                            >
                                <Button
                                    variant="contained"
                                    fullWidth
                                    type="submit"
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "capitalize",
                                    }}
                                    onClick={() =>
                                        dispatch(
                                            fetchCompany(item.id),
                                            history.push(
                                                SuperAdminUrl.manageCompany.view.replace(
                                                    ":id",
                                                    item.id
                                                )
                                            )
                                        )
                                    }
                                >
                                    View Details
                                </Button>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        borderRadius: "14px",
                                        textTransform: "capitalize",
                                        backgroundColor: "black",
                                    }}
                                    onClick={() => extendSub(item.id)}
                                >
                                    Extend Subscription
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    <Dialog
                        maxWidth="sm"
                        fullWidth
                        open={extend}
                        onClose={() => setExtend(false)}
                    >
                        <DialogContent>
                            <ExtendSubs
                                isControl={true}
                                controlHandler={() => setExtend(false)}
                            />
                        </DialogContent>
                    </Dialog>
                </TableBody>
            </Table>
        </TableContainer>
        // </form>
    );
};
export default DashboardTable;
