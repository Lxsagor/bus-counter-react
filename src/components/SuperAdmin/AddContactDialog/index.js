import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import { useStyles } from "../Contact/styled";
import { useSelector } from "react-redux";
import moment from "moment";

const AddContactDialog = () => {
    const company = useSelector((state) => state.company.company);

    const classes = useStyles();
    return (
        <>
            <Box m={5}>
                <Typography variant="h5">Add Contact</Typography>
                <Box my={3} className={classes.field}>
                    <TextField
                        fullWidth
                        label="Company Name"
                        value={company.name}
                        inputProps={{
                            readOnly: true,
                        }}
                    />
                </Box>
                <Box mb={3} className={classes.field}>
                    <TextField fullWidth label="Email" />
                </Box>

                <Box mb={3} className={classes.field}>
                    <TextField fullWidth label="Phone" />
                </Box>
                <Box mb={3} className={classes.field}>
                    <TextField
                        fullWidth
                        label="Subscription Date"
                        value={moment(company.sub_end_date).format("M/D/Y")}
                        inputProps={{
                            readOnly: true,
                        }}
                    />
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
                        <Button size="large" fullWidth variant="outlined">
                            <Typography color="black"> Cancel</Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AddContactDialog;
