import {
    Autocomplete,
    Box,
    Button,
    FormControl,
    Grid,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useStyles } from "./styled";

const AssignBus = () => {
    const classes = useStyles();
    return (
        <>
            <Box m={3}>
                <Typography variant="h6">Assign Bus</Typography>
                <Box
                    mb={3}
                    sx={{
                        width: "42px",
                        height: "4px",
                        backgroundColor: "#33A551",
                    }}
                ></Box>

                <Grid container spacing={4}>
                    <Grid item lg={4} xs={12}>
                        <Typography mb={2}>Select Bus No.</Typography>
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Typography mb={2}>Select Bus Driver</Typography>
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Typography mb={2}>Select Bus SupperVisor</Typography>
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>{" "}
                    <Grid item lg={4} xs={12}>
                        <Typography mb={2}>Select Bus Staff</Typography>
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Typography mb={2}>Select Bus Type</Typography>
                        <FormControl fullWidth>
                            <Select>
                                <MenuItem value="ac">Ac</MenuItem>
                                <MenuItem value="non_ac">Non Ac</MenuItem>
                                <MenuItem value="business">Business</MenuItem>
                                <MenuItem value="classic">Classic</MenuItem>
                                <MenuItem value="double_decker">
                                    Double Decker
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Box my={2}>
                    <Typography variant="h6">Location</Typography>
                </Box>
                <Grid container spacing={3}>
                    <Grid item lg={4} xs={12}>
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    label="Start from"
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <Autocomplete
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    fullWidth
                                    label="Journey End"
                                    className={classes.field}
                                />
                            )}
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item lg={2}>
                        <Box my={3}>
                            <Button
                                fullWidth
                                variant="contained"
                                className={classes.submitBtn}
                            >
                                Assign Bus
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default AssignBus;
