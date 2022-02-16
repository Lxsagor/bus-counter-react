import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import dash1 from "../../../assets/super_admin_dashboard_images/dash1.png";
import dash2 from "../../../assets/super_admin_dashboard_images/dash2.png";
import dash3 from "../../../assets/super_admin_dashboard_images/dash3.png";
import dash4 from "../../../assets/super_admin_dashboard_images/dash4.png";
import Card from "../../../components/dashboard/DashboardCard";
import TableData from "../../../components/dashboard/DashboardTable";
import { fetchCompanies } from "../../../store/actions/SuperAdmin/companyAction";

const Dashbaord = () => {
    const dispatch = useDispatch();
    const companies = useSelector((state) => state.company.companies);

    useEffect(() => {
        dispatch(fetchCompanies());
    }, [dispatch]);

    return (
        <>
            <Box m={5}>
                <Grid container spacing={2} alignItems="stretch">
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Total Companies"}
                            number={companies?.meta?.total}
                            src={dash1}
                        />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card title={"Total User"} number={5459} src={dash2} />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card title={"Total admins"} number={17} src={dash3} />
                    </Grid>
                    <Grid item xs={12} lg={3}>
                        <Card
                            title={"Subscrition ending(Today)"}
                            number={15}
                            src={dash4}
                        />
                    </Grid>
                </Grid>
                <Box mt={5} mb={3}>
                    <Typography variant="h6">Logs</Typography>
                    <Box
                        sx={{
                            width: "42px",
                            height: "4px",
                            backgroundColor: "#33A551",
                        }}
                    ></Box>
                </Box>
                <TableData />
            </Box>
        </>
    );
};

export default Dashbaord;
