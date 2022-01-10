import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useStyles } from "./styed";

const AddCompany = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.field} m={5}>
                <Typography variant="h4" m={3} ml={5}>
                    Add Company
                </Typography>
                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item lg={10} xs={12}>
                        <TextField fullwidth label="Company Name" />
                    </Grid>
                    <Grid item lg={10} xs={12}>
                        <TextField label="Number of user" />
                    </Grid>
                    <Grid item lg={10} xs={12}>
                        <TextField label="Last subscription Date" />
                    </Grid>
                    <Grid item lg={10} xs={12}>
                        <TextField label="Next subscription Date" />
                    </Grid>
                    <Grid item lg={10} xs={12}>
                        <Button variant="contained" sx={{ mr: 1 }}>
                            Add
                        </Button>
                        <Button variant="outlined">Cancel</Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddCompany;
