import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "../../../components/dashboard/styled";

const ViewProfile = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Viewing Profile</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Box mt={5}>
                    <Grid container>
                        <Grid item lg={6} xs={12}>
                            <Grid
                                container
                                spacing={4}
                                className={classes.field}
                            >
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Company Name</Typography>
                                    <TextField fullWidth />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Company Email</Typography>
                                    <TextField fullWidth />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Admin Name</Typography>
                                    <TextField fullWidth />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Admin Email</Typography>
                                    <TextField fullWidth />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>Phone</Typography>
                                    <TextField fullWidth />
                                </Grid>
                                <Grid item lg={6} xs={12} md={6}>
                                    <Typography>IP</Typography>
                                    <TextField fullWidth />
                                </Grid>

                                <Grid item>
                                    <Button
                                        variant="contained"
                                        style={{
                                            textTransform: "initial",
                                            backgroundColor: "black",
                                            borderRadius: "8px",
                                            minWidth: "230px",
                                            minHeight: "50px",
                                        }}
                                    >
                                        Send Email To Admin
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        variant="contained"
                                        style={{
                                            textTransform: "initial",
                                            borderRadius: "8px",
                                            minWidth: "230px",
                                            minHeight: "50px",
                                        }}
                                    >
                                        Re-active User
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ViewProfile;
