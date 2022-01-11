import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import dash1 from "../../../assets/admin_dashboard_image/dash1.png";
import dash2 from "../../../assets/admin_dashboard_image/dash2.png";
import dash3 from "../../../assets/admin_dashboard_image/dash3.png";
import Card from "../../../components/dashboard/DashboardCard";
import { useStyles } from "./styled";
import AdminDashboardTable from "../../../components/dashboard/AdminDashboardTable";

const Dashboard = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Countries"}
                            number={7}
                            src={dash1}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Ticket Sold today"}
                            number={1410}
                            src={dash2}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Bus On The Trip"}
                            number={15}
                            src={dash3}
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
                        <Grid item lg={2} className={classes.button}>
                            <Button fullWidth variant="contained">
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
