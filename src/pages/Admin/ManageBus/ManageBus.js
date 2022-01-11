import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import BusCard from "../../../components/BusCard/BusCard";
import AddIcon from "@mui/icons-material/Add";
import { useHistory } from "react-router-dom";
import { AdminUrl } from "../../../constants/urls";

const ManageBus = () => {
    const history = useHistory();
    return (
        <>
            <Box m={5}>
                <Grid container spacing={5}>
                    <Grid item>
                        <Typography variant="h6">Manage Bus</Typography>
                        <Box
                            mb={3}
                            sx={{
                                width: "42px",
                                height: "4px",
                                backgroundColor: "#33A551",
                            }}
                        ></Box>
                    </Grid>
                    <Grid item>
                        <Button
                            onClick={() =>
                                history.push(
                                    AdminUrl.manageBus.addbus.replace()
                                )
                            }
                        >
                            <AddIcon />
                            <Typography sx={{ color: "black" }}>
                                Add Bus
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>

                <Box mt={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={3}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageBus.editbusinfo.replace(
                                            ":id",
                                            1
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             2
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             3
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             4
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             5
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             6
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             7
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Bus No: Ka-5613"
                                subTitle="Route: Dhaka - Rangpur"
                                button="Manage Bus"

                                // control={() =>
                                //     history.push(
                                //         AdminUrl.manageCounter.edit.replace(
                                //             ":id",
                                //             7
                                //         )
                                //     )
                                // }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ManageBus;
