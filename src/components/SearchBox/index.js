import {
    Box,
    Button,
    Grid,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";
import { Add, Search } from "@mui/icons-material";

const ManageSearchBox = ({
    isControl = false,
    controlLabel = "Add",
    controlHandler = () => {},
}) => {
    const classes = useStyles();
    return (
        <>
            <Grid
                container
                justifyContent="space-between"
                alignItems="stretch"
                spacing={4}
            >
                <Grid item lg={5} xs={7} className={classes.field}>
                    <TextField
                        sx={{ mr: 1 }}
                        fullWidth
                        label="Search"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Search />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {/* <Button sx={{ borderRadius: "8px" }} variant="contained">
                        Search
                    </Button> */}
                </Grid>
                {isControl && (
                    <Grid item xl={2} lg={3} md={4} xs={5}>
                        <Button
                            variant="contained"
                            sx={{ borderRadius: "28px", height: "100%" }}
                            fullWidth
                            onClick={controlHandler}
                        >
                            <Add />
                            {controlLabel}
                        </Button>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export default ManageSearchBox;
