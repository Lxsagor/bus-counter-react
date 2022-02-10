import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { suspendAdmin } from "../../store/actions/companyAction";

const SuspendCompanyDialog = () => {
    const { company } = useSelector((state) => state.company);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(suspendAdmin(company.id));
    };
    return (
        <>
            <form onSubmit={submitHandler}>
                <Box mb={2}>
                    <Typography variant="h4" align="center" color="green">
                        Confirm
                    </Typography>
                    <Typography align="center">
                        Are you sure you want to Suspend the Admin?
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
                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            type="submit"
                        >
                            Yes
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default SuspendCompanyDialog;
