import React, { useState, useEffect } from "react";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import admin from "../../../assets/admin_dashboard_image/admin.png";
import driver from "../../../assets/admin_dashboard_image/driver.png";
import staff from "../../../assets/admin_dashboard_image/staff.png";
import Card from "../../../components/dashboard/DashboardCard";
import { Link } from "react-router-dom";
import IndexTable from "../../../components/Admin/Staff/AdminTable";
import { useStyles } from "./styled";
import AdminTable from "../../../components/Admin/Staff/AdminTable";
import DriverTable from "../../../components/Admin/Staff/DriverTable";
import HelperTable from "../../../components/Admin/Staff/HelperTable";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchDrivers,
    fetchStaffs,
} from "../../../store/actions/counterAction";

const Staff = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const { drivers, staffs } = useSelector((state) => state.counter);
    const [field, setField] = useState("driver");
    const handleAdmin = () => {
        setField("admin");
    };
    const handleDriver = () => {
        setField("driver");
    };
    const handleStaff = () => {
        setField("staff");
    };
    const handleClick = () => {
        if (field === "admin") {
            history.push(AdminUrl.staff.addAdmin);
        }
        if (field === "driver") {
            history.push(AdminUrl.staff.addDriver);
        }
        if (field === "staff") {
            history.push(AdminUrl.staff.addStaff);
        }
    };
    useEffect(() => {
        dispatch(fetchDrivers());
    }, [dispatch]);
    useEffect(() => {
        dispatch(fetchStaffs());
    }, [dispatch]);

    return (
        <>
            <Box m={5}>
                <Box mb={5}>
                    <Grid container spacing={2} alignItems="stretch">
                        <Grid item xs={12} lg={3}>
                            <Card
                                title={"Total Admins"}
                                number={7}
                                src={admin}
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <Card
                                title={"Total Drivers"}
                                number={drivers?.meta?.total}
                                src={driver}
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <Card
                                title={"Total Staffs"}
                                number={staffs?.meta?.total}
                                src={staff}
                            />
                        </Grid>
                    </Grid>
                </Box>
                <Box m={2}>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button
                                variant="contained"
                                className={classes.addBtn}
                                onClick={handleClick}
                            >
                                {field === "admin" && "Add Admin"}
                                {field === "driver" && "Add Driver"}
                                {field === "staff" && "Add Staff"}
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Box className={classes.tabBox}>
                    <Grid container>
                        <Grid item lg={2}>
                            <Typography
                                variant="h6"
                                className={
                                    field === "admin" && classes.activeTab
                                }
                                align="center"
                                sx={{ padding: "10px", cursor: "pointer" }}
                                onClick={handleAdmin}
                            >
                                Admin
                            </Typography>
                        </Grid>
                        <Grid item lg={2}>
                            <Typography
                                variant="h6"
                                className={
                                    field === "driver" && classes.activeTab
                                }
                                align="center"
                                sx={{ padding: "10px", cursor: "pointer" }}
                                onClick={handleDriver}
                            >
                                Driver
                            </Typography>
                        </Grid>
                        <Grid item lg={2}>
                            <Typography
                                variant="h6"
                                className={
                                    field === "staff" && classes.activeTab
                                }
                                align="center"
                                sx={{ padding: "10px", cursor: "pointer" }}
                                onClick={handleStaff}
                            >
                                Staff
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
                {field === "admin" && <AdminTable />}
                {field === "driver" && <DriverTable />}
                {field === "staff" && <HelperTable />}
            </Box>
        </>
    );
};

export default Staff;
