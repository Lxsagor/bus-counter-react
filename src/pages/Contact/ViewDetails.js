import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useStyles } from "./styled";

const ViewDetails = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Viewing Contact Details</Typography>
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
                        <Grid container spacing={5} className={classes.field}>
                            <Grid item lg={6}>
                                <Typography>Company Name</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography>Company Email</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography>Phone</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography>Last Subscription</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={6}>
                                <Typography>Next Subscription</Typography>
                                <TextField fullWidth />
                            </Grid>
                        </Grid>
                        <Grid item lg={4}>
                            <Box my={5} className={classes.field}>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        textTransform: "initial",
                                        backgroundColor: "#000000",
                                    }}
                                >
                                    Send Email To Admin
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default ViewDetails;
