import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "./styled";

const MoreDetails = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={3}>
                <Typography variant="h6">Viewing Details</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Grid container>
                    <Grid item lg={6}>
                        <Grid container className={classes.field} spacing={4}>
                            <Grid item lg={6} xs={12}>
                                <Typography>Company Name</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <Typography>Number of User</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <Typography>Admin Name</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <Typography>Email</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <Typography>Phone</Typography>
                                <TextField fullWidth />
                            </Grid>

                            <Grid item lg={6} xs={12}>
                                <Typography>Last subscription </Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6} xs={12}>
                                <Typography>Next subscription </Typography>
                                <TextField fullWidth />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={5}>
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
                </Box>
            </Box>
        </>
    );
};

export default MoreDetails;
