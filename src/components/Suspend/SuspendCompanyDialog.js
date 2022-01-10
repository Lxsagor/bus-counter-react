import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

const SuspendCompanyDialog = () => {
    return (
        <>
            <Box mb={2}>
                <Typography variant="h4" align="center" color="green">
                    Confirm
                </Typography>
                <Typography align="center">
                    Are you sure you want to Suspend company?
                </Typography>
            </Box>
            <Grid
                container
                justifyContent="center"
                spacing={2}
                alignItems="center"
            >
                <Grid item lg={6} xs={12}>
                    <Button
                        variant="contained"
                        size="large"
                        fullWidth
                        sx={{
                            backgroundColor: "#F6F7FB",
                            color: "#000000",
                        }}
                    >
                        No
                    </Button>
                </Grid>
                <Grid item lg={6} xs={12}>
                    <Button variant="contained" size="large" fullWidth>
                        Yes
                    </Button>
                </Grid>
            </Grid>
        </>
    );
};

export default SuspendCompanyDialog;
