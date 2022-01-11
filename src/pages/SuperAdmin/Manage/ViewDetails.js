import {
    Box,
    Typography,
    Container,
    Grid,
    Button,
    Card,
    CardContent,
} from "@mui/material";
import React from "react";
import SearchBox from "../../../components/SearchBox/index";
import { useStyles } from "./styled";
import Divider from "@mui/material/Divider";
import CounterLogTable from "../../../components/Manage/CounterLogTable";
import { SuperAdminUrl } from "../../../constants/urls";
import { useHistory } from "react-router-dom";

const ViewDetails = () => {
    const history = useHistory();
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Manage Company</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <SearchBox />
                <Card sx={{ mt: 5 }}>
                    <CardContent>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Grid item lg={3}>
                                <Grid container>
                                    <Grid item lg={6}>
                                        <Typography mb={3}>
                                            Company Name:
                                        </Typography>
                                        <Typography mb={3}>
                                            Number Of Admin:
                                        </Typography>
                                        <Typography mb={3}>
                                            Number Of User:
                                        </Typography>
                                    </Grid>
                                    <Grid item lg={6}>
                                        <Typography mb={3} color="primary">
                                            SR Group
                                        </Typography>
                                        <Typography mb={3} color="primary">
                                            01
                                        </Typography>
                                        <Typography mb={3} color="primary">
                                            10
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item lg={2}>
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        textTransform: "initial",
                                        borderRadius: "8px",
                                    }}
                                    onClick={() =>
                                        history.push(
                                            SuperAdminUrl.manageCompany.more.replace()
                                        )
                                    }
                                >
                                    More Details
                                </Button>
                            </Grid>
                        </Grid>
                        <Divider />
                        <Box pt={3}>
                            <Typography variant="h6" color="primary">
                                View Counter Log
                            </Typography>
                            <Box
                                mb={3}
                                sx={{
                                    width: "42px",
                                    height: "4px",
                                    backgroundColor: "#33A551",
                                }}
                            ></Box>
                            <CounterLogTable />
                        </Box>
                    </CardContent>
                </Card>

                {/* <Box className={classes.root} my={5}>
                    <Grid container spacing={4} justifyContent="space-between">
                        <Grid item lg={4}>
                            <Grid container spacing={4}>
                                <Grid item lg={6}>
                                    <Typography variant="h6">
                                        Company Name:
                                    </Typography>
                                    <Typography variant="h6">
                                        Number of Admin:
                                    </Typography>
                                    <Typography variant="h6">
                                        Number of User:
                                    </Typography>
                                </Grid>
                                <Grid item lg={6}>
                                    <Typography variant="h6">
                                        SR Group
                                    </Typography>
                                    <Typography variant="h6">10</Typography>
                                    <Typography variant="h6">01</Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2}>
                            <Button size="large" variant="contained">
                                More Details
                            </Button>
                        </Grid>
                    </Grid>
                </Box> */}
            </Box>
        </>
    );
};

export default ViewDetails;
