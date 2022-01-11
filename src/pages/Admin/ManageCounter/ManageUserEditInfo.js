import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styled";

const ManageUserEditInfo = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h6">Manage Counter</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>
                <Grid container spacing={3} className={classes.field}>
                    <Grid item lg={8} xs={12}>
                        <Grid container spacing={3}>
                            <Grid item lg={5} xs={12}>
                                <Typography>Division</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={5} xs={12}>
                                <Typography>District</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={5} xs={12}>
                                <Typography>Counter Manager Name</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={5} xs={12}>
                                <Typography>Phone Number</Typography>
                                <TextField fullWidth />
                            </Grid>
                            <Grid item lg={5} xs={12}>
                                <Typography>Initial Password</Typography>
                                <TextField fullWidth />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Box mt={4}>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            lg={2}
                            xs={12}
                            className={classes.editButton}
                        >
                            <Button fullWidth variant="contained" size="large">
                                Edit Information
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
};

export default ManageUserEditInfo;
