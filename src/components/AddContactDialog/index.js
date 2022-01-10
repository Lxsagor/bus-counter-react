import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useStyles } from "../Contact/styled";

const AddContactDialog = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h5">Add Contact</Typography>
                <Box my={3} className={classes.field}>
                    <TextField fullWidth label="Company Name" />
                </Box>
                <Box mb={3} className={classes.field}>
                    <TextField fullWidth label="Email" />
                </Box>

                <Box mb={3} className={classes.field}>
                    <TextField fullWidth label="Phone" />
                </Box>
                <Box mb={3} className={classes.field}>
                    <TextField fullWidth label="Subscription Date" />
                </Box>
                <Grid container spacing={4}>
                    <Grid item lg={4}>
                        <Button
                            size="large"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Add
                        </Button>
                    </Grid>
                    <Grid item lg={4}>
                        <Button size="large" fullwidth variant="outlined">
                            <Typography color="black"> Cancel</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddContactDialog;
