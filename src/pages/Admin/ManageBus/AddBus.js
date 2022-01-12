import { TextField, Typography, Grid, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styled";

const AddBus = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Add Bus</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={5}>
                    <Typography variant="h6">Route</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3} justifyContent="space-between">
                        <Grid item lg={6} xs={12}>
                            <Grid container spacing={3}>
                                <Grid item lg={6} xs={12}>
                                    <Typography>From</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>To</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                    />
                                </Grid>
                                <Grid item lg={6} xs={12}>
                                    <Typography>Fare</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <Grid container justifyContent="center">
                                <Grid item lg={6} xs={12}>
                                    <Typography>Full Route</Typography>
                                    <TextField
                                        fullWidth
                                        className={classes.field}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <Typography variant="h6">Drivers Inforamtion</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} xs={12}>
                            <Typography>Name</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography>Phone</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography>Driving Licence Number</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <Typography variant="h6">Supervison Information</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3} className={classes.field}>
                        <Grid item lg={3} xs={12}>
                            <Typography>Name</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography>Phone</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <Typography variant="h6">Helper Information</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} xs={12}>
                            <Typography>Name</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                        <Grid item lg={3} xs={12}>
                            <Typography>Phone</Typography>
                            <TextField fullWidth className={classes.field} />
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={5}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.button}
                            >
                                Save Information
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default AddBus;
