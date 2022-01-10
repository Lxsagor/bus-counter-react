import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { useStyles } from "../styled";
import { Add } from "@mui/icons-material";

const ManageSearchBox = ({ isControl = false, controlHandler = () => {} }) => {
    const classes = useStyles();
    return (
        <>
            <Typography variant="h6">Manage Company</Typography>
            <Box
                mb={3}
                sx={{
                    width: "42px",
                    height: "4px",
                    backgroundColor: "#33A551",
                }}
            ></Box>
            <Grid
                container
                justifyContent="space-between"
                spacing={4}
                className={classes.field}
            >
                <Grid item lg={7} xs={12}>
                    <TextField sx={{ mr: 1 }} label="Search Company Name" />
                    <Button sx={{ borderRadius: "8px" }} variant="contained">
                        Search
                    </Button>
                </Grid>
                {isControl && (
                    <Grid item lg={2} xs={12}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "28px" }}
                            fullWidth
                            onClick={controlHandler}
                        >
                            <Add />
                            Add Company
                        </Button>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default ManageSearchBox;
