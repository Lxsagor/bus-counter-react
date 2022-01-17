import { Typography, Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styled";

const EditBusInfo = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Edit Bus</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={4}>
                    <Grid container>
                        <Grid item lg={10} xs={12}>
                            <Box className={classes.title}>
                                <Typography ml={3}>
                                    {" "}
                                    BUS NO : GHA-1254689
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box mt={4}>
                    <Typography variant="h6">Route</Typography>
                </Box>
                <Box mt={3}>
                    <Grid container>
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
                        <Grid item lg={3} xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="error"
                                className={classes.button}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default EditBusInfo;
