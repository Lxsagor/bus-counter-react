import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import dash1 from "../../../assets/admin_dashboard_image/dash1.png";
import dash2 from "../../../assets/admin_dashboard_image/dash2.png";
import dash3 from "../../../assets/admin_dashboard_image/dash3.png";
import Card from "../../../components/dashboard/DashboardCard";
import { useStyles } from "./styled";
import AdminDashboardTable from "../../../components/dashboard/AdminDashboardTable";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useDispatch, useSelector } from "react-redux";
import { fetchCounters } from "../../../store/actions/Admin/counterAction";

const Dashboard = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { counters } = useSelector((state) => state.counter);

    useEffect(() => {
        dispatch(fetchCounters());
    }, [dispatch]);
    return (
        <>
            <Box m={5}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Counters"}
                            number={counters?.meta?.total}
                            src={dash1}
                            text={<Link to="#">See All</Link>}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Ticket Sold today"}
                            number={1410}
                            src={dash2}
                            text={<Link to="#">See All</Link>}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Bus On The Trip"}
                            number={15}
                            src={dash3}
                            text={<Link to="#">See All</Link>}
                        />
                    </Grid>
                </Grid>
                <Box mt={5} mb={3}>
                    <Grid container justifyContent="space-between">
                        <Grid item lg={2}>
                            <Typography variant="h6">History</Typography>
                            <Box
                                sx={{
                                    width: "42px",
                                    height: "4px",
                                    backgroundColor: "#33A551",
                                }}
                            ></Box>
                        </Grid>
                        <Grid item lg={2}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.button}
                            >
                                Print as PDF
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <AdminDashboardTable />
            </Box>
        </>
    );
};

export default Dashboard;
