import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import BusCard from "../../../components/BusCard/BusCard";
import { AdminUrl } from "../../../constants/urls";
import { useStyles } from "./styled";

const ManageCounter = () => {
    const classes = useStyles();
    const history = useHistory();
    return (
        <>
            <Box m={5}>
                <Grid container justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h6">Our Counters</Typography>
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
                            className={classes.addbutton}
                            fullWidth
                            variant="contained"
                            onClick={() =>
                                history.push(
                                    AdminUrl.manageCounter.add.replace()
                                )
                            }
                        >
                            <AddIcon />
                            Add Counter
                        </Button>
                    </Grid>
                </Grid>
                <Box my={3}>
                    <Grid
                        container
                        // justifyContent="space-between"
                        alignItems="flex-end"
                        spacing={3}
                    >
                        <Grid item lg={4} md={4} xs={12}>
                            <Typography>Choose Division</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                        <Grid item lg={4} md={4} xs={12}>
                            <Typography>Choose District</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                        <Grid item>
                            <Button
                                variant="contained"
                                fullWidth
                                className={classes.searchButton}
                            >
                                Search Counter
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
                <Typography variant="h6">Showing Result</Typography>
                <Typography variant="p" style={{ opacity: 0.5 }}>
                    8 Counters in this location
                </Typography>
                <Box mt={5}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={3}>
                            <BusCard
                                title="Kollyanpur, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            1
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Shyamoli, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            2
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Asad Gate, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            3
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Kollyanpur, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            4
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <BusCard
                                title="Kollyanpur, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            5
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Kollyanpur, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            6
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Kollyanpur, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            7
                                        )
                                    )
                                }
                            />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <BusCard
                                title="Kollyanpur, Dhaka"
                                subTitle="Phone: +88 0123456789"
                                button="Edit Information"
                                control={() =>
                                    history.push(
                                        AdminUrl.manageCounter.edit.replace(
                                            ":id",
                                            8
                                        )
                                    )
                                }
                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ManageCounter;
